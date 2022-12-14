//
//  scoreWidget.swift
//  scoreWidget
//
//  Created by Daniel Chadwick on 19/09/2022.
//

import WidgetKit
import SwiftUI
import Intents

struct WidgetData: Decodable {
   let displayText: String
}

struct Provider: IntentTimelineProvider {
    func placeholder(in context: Context) -> SimpleEntry {
        SimpleEntry(date: Date(), configuration: ConfigurationIntent(), displayText: "Test Scores Widget: Swift")
    }

    func getSnapshot(for configuration: ConfigurationIntent, in context: Context, completion: @escaping (SimpleEntry) -> ()) {
        let entry = SimpleEntry(date: Date(), configuration: configuration, displayText: "Test Scores Widget: Swift")
        completion(entry)
    }

    func getTimeline(for configuration: ConfigurationIntent, in context: Context, completion: @escaping (Timeline<Entry>) -> ()) {
        let userDefaults = UserDefaults.init(suiteName: "com.group.scores.ReactNativeWidget")
        var entries: [SimpleEntry] = []

        // Generate a timeline consisting of five entries an hour apart, starting from the current date.
        let currentDate = Date()
        for hourOffset in 0 ..< 5 {
            let entryDate = Calendar.current.date(byAdding: .hour, value: hourOffset, to: currentDate)!
            let entry = SimpleEntry(date: entryDate, configuration: configuration, displayText: "Test Scores Widget: Swift")
            entries.append(entry)
        }

        let timeline = Timeline(entries: entries, policy: .atEnd)
        completion(timeline)
    }
}

struct SimpleEntry: TimelineEntry {
    let date: Date
    let configuration: ConfigurationIntent
    let displayText: String
}

struct scoreWidgetEntryView : View {
    var entry: Provider.Entry

    var body: some View {
        Text("Test Scores Widget: Swift")
    }
}

@main
struct scoreWidget: Widget {
    let kind: String = "scoreWidget"

    var body: some WidgetConfiguration {
        IntentConfiguration(kind: kind, intent: ConfigurationIntent.self, provider: Provider()) { entry in
            scoreWidgetEntryView(entry: entry)
        }
        .configurationDisplayName("My Widget")
        .description("This is an example widget.")
    }
}

struct scoreWidget_Previews: PreviewProvider {
    static var previews: some View {
        scoreWidgetEntryView(entry: SimpleEntry(date: Date(), configuration: ConfigurationIntent(), displayText: "Test Scores Widget: Swift"))
            .previewContext(WidgetPreviewContext(family: .systemSmall))
    }
}
