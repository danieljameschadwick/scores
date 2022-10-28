import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@scores/theme/utils/theme";

const mockData = [
  {
    name: "Arsenal",
    points: 28,
  },
  {
    name: "Manchester City",
    points: 26,
  },
  {
    name: "Tottenham",
    points: 23,
  },
  {
    name: "Newcastle",
    points: 21,
  },
  {
    name: "Chelsea",
    points: 21,
  },
  {
    name: "Manchester United",
    points: 20,
  },
  {
    name: "Fulham",
    points: 18,
  },
  {
    name: "Liverpool",
    points: 16,
  },
  {
    name: "Brighton & Hove Albion",
    points: 15,
  },
  {
    name: "West Ham United",
    points: 14,
  },
  {
    name: "Brentford",
    points: 14,
  },
  {
    name: "Everton",
    points: 13,
  },
  {
    name: "Crystal Palace",
    points: 13,
  },
  {
    name: "AFC Bournemouth",
    points: 13,
  },
  {
    name: "Aston Villa",
    points: 12,
  },
  {
    name: "Southampton",
    points: 12,
  },
  {
    name: "Leicester City",
    points: 11,
  },
  {
    name: "Leeds United",
    points: 9,
  },
  {
    name: "Wolverhampton Wanderers",
    points: 9,
  },
  {
    name: "Nottingham Forest",
    points: 9,
  },
];

const TableHeader = () => {
  const themeStyles = useTheme();

  return (
    <View style={[tableHeaderStyles.row]}>
      <View style={[tableHeaderStyles.td, tableHeaderStyles.indexedTd]}>
        <Text
          style={[
            tableHeaderStyles.tdText,
            tableHeaderStyles.tdCenter,
            themeStyles.text,
          ]}
        >
          #
        </Text>
      </View>
      <View style={[tableHeaderStyles.td, tableHeaderStyles.tdGrow]}>
        <Text style={[tableHeaderStyles.tdText, themeStyles.text]}>Team</Text>
      </View>
      <View style={[tableHeaderStyles.td]}>
        <Text style={[tableHeaderStyles.tdText, themeStyles.text]}>PTS</Text>
      </View>
    </View>
  );
};

const tableHeaderStyles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#dcdddf",
    paddingVertical: 5,
    marginBottom: 5,
  },
  td: {
    paddingHorizontal: 5,
  },
  tdText: {
    fontWeight: "600",
    textTransform: "uppercase",
  },
  indexedTd: {
    width: 30,
  },
  tdCenter: {
    textAlign: "center",
  },
  tdGrow: {
    flexGrow: 1,
  },
});

const TableBody = ({ data }) => {
  const themeStyles = useTheme();

  return (
    <View>
      {data.map((row, index) => {
        return (
          <View key={index} style={[tableBodyStyles.row]}>
            <View style={[tableBodyStyles.td, tableBodyStyles.indexedTd]}>
              <Text style={[tableBodyStyles.tdCenter, themeStyles.text]}>
                {index + 1}
              </Text>
            </View>
            <View style={[tableBodyStyles.td, tableBodyStyles.tdGrow]}>
              <Text style={[themeStyles.text]}>{row.name}</Text>
            </View>
            <View style={[tableBodyStyles.td]}>
              <Text style={[themeStyles.text]}>{row.points}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const tableBodyStyles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
  },
  td: {
    paddingHorizontal: 5,
  },
  indexedTd: {
    width: 30,
  },
  tdCenter: {
    textAlign: "center",
  },
  tdGrow: {
    flexGrow: 1,
  },
});

export const LeagueTable = () => {
  const data = mockData;

  return (
    <View>
      <TableHeader />

      <TableBody data={data} />
    </View>
  );
};
