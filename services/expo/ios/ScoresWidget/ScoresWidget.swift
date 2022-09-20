//
//  ScoresWidget.swift
//  ScoresWidget
//
//  Created by Daniel Chadwick on 20/09/2022.
//

import WidgetKit
import SwiftUI
import Intents

//
// @TODO: ScoresWidget Refactor
// Rough initial ScoresWidget that requires
// refactoring but need to read more into Swift!
//

struct WidgetData {
  let home: Team;
  let away: Team;
  let data: Date;
}

struct Provider: IntentTimelineProvider {
    func placeholder(in context: Context) -> SimpleEntry {
        SimpleEntry(date: Date(), configuration: ConfigurationIntent(), widgetData: nil)
    }

    func getSnapshot(for configuration: ConfigurationIntent, in context: Context, completion: @escaping (SimpleEntry) -> ()) {
        let entry = SimpleEntry(date: Date(), configuration: configuration, widgetData: nil)
        completion(entry)
    }

    // @TODO: figure out what to replace IntentTimelineProvider with
    func getTimeline(for configuration: ConfigurationIntent, in context: Context, completion: @escaping (Timeline<Entry>) -> ()) {
        var entries: [SimpleEntry] = []

        let widgetData: WidgetData? = nil;
      
        let userDefaults = UserDefaults.init(suiteName: "com.group.scores")
        if userDefaults != nil {
          if let savedData = userDefaults!.value(forKey: "widgetData") as? String {
            let decoder = JSONDecoder()
            let data = savedData.data(using: .utf8)
            
            print(data);
            
//            if let parsedData = try? decoder.decode(WidgetData.self, from: data!) {
//              print(parsedData)
//            }
          }
        }
      
        let currentDate = Date()
        for hourOffset in 0 ..< 5 {
          let entryDate = Calendar.current.date(byAdding: .hour, value: hourOffset, to: currentDate)!
          let entry = SimpleEntry(date: entryDate, configuration: configuration, widgetData: nil)
            entries.append(entry)
        }

        let timeline = Timeline(entries: entries, policy: .atEnd)
        completion(timeline)
    }
}

struct SimpleEntry: TimelineEntry {
  let date: Date;
  let configuration: ConfigurationIntent;
  let widgetData: WidgetData?;
}

struct Team {
  var abbreviation: String
  var score: Int
}

func getDate(from: String) -> Date? {
    let dateFormatter = DateFormatter()
    dateFormatter.dateFormat = "yyyy-MM-dd'T'HH:mm:ss+00:00"
    dateFormatter.timeZone = TimeZone.current
    dateFormatter.locale = Locale.current
    
    return dateFormatter.date(from: from)
}

struct ScoresWidgetEntryView : View {
    @Environment(\.widgetFamily) var family
  
    var entry: Provider.Entry

    var date = getDate(from: "2022-09-04T15:30:00+00:00")
    var home = Team(abbreviation: "MUN", score: 3)
    var away = Team(abbreviation: "ARS", score: 1)
  
    var body: some View {
      let columns = [GridItem(.flexible()), GridItem(.flexible())]

      switch family {
        case .systemSmall:
          VStack(alignment: .leading) {
            ScoresWidgetRowView(home: home, away: away, date: date)
          }
          .padding(.all)
        default:
          LazyVGrid(columns: columns, content: {
            VStack(alignment: .leading) {
              ScoresWidgetRowView(home: home, away: away, date: date)
            }
            .padding(.all)
            
            VStack(alignment: .leading) {
              ScoresWidgetRowView(home: home, away: away, date: date)
            }
            .padding(.all)
          })
      }
    }
}

struct ScoresWidgetRowView : View {
  let columns = [GridItem(.flexible()), GridItem(.fixed(30))]

  var home: Team
  var away: Team
  var date: Date?
  var status = "FT"

  var body: some View {
    Section(content: {
      LazyVGrid(columns: columns, content: {
        ScoresWidgetRowScores(home: home, away: away)
        
        ScoresWidgetStatus(status: status)
      })
    })
    .frame(
      minHeight: 0,
      maxHeight: .infinity
    )

    // @TODO: investigate `date!` and binding dates
    Section(content: {
        Text(date!, format: Date.FormatStyle(date: .numeric))
          .font(.caption)
    })
    .padding([.top], 10)
    .frame(
      minWidth: 0,
      maxWidth: .infinity
    )
  }
}

struct ScoresWidgetRowScores : View {
  var home: Team
  var away: Team

  var body: some View {
    VStack {
      ScoresWidgetRowScore(team: away)
      
      Divider()
      
      ScoresWidgetRowScore(team: home)
    }
  }
}

struct ScoresWidgetRowScore : View {
  var team: Team
  let columns = [GridItem(.flexible()), GridItem(.flexible())]

  var body: some View {
    LazyVGrid(columns: columns, content: {
      Text(team.abbreviation)
      Text(String(team.score))
        .fontWeight(.bold)
    })
  }
}

struct ScoresWidgetStatus : View {
  var status: String

  var body: some View {
    Text(status)
      .fontWeight(.semibold)
  }
}

@main
struct ScoresWidget: Widget {
    let kind: String = "ScoresWidget"

    var body: some WidgetConfiguration {
        IntentConfiguration(kind: kind, intent: ConfigurationIntent.self, provider: Provider()) { entry in
            ScoresWidgetEntryView(entry: entry)
        }
        .configurationDisplayName("Scores Widget")
        .description("This is an example Scores widget.")
    }
}

struct ScoresWidget_Previews: PreviewProvider {
    static var previews: some View {
        ScoresWidgetEntryView(entry: SimpleEntry(date: Date(), configuration: ConfigurationIntent(), widgetData: nil))
            .previewContext(WidgetPreviewContext(family: .systemSmall))
    }
}
