import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@scores/theme/utils/theme";

const mockData = [
  {
    name: "Seattle Seahawks",
    wins: 6,
    losses: 4,
    draws: 0,
  },
  {
    name: "San Francisco 49ers",
    wins: 5,
    losses: 4,
    draws: 0,
  },
  {
    name: "Arizona Cardinals",
    wins: 4,
    losses: 6,
    draws: 0,
  },
  {
    name: "Los Angeles Rams",
    wins: 3,
    losses: 6,
    draws: 0,
  },
];

// @TODO: copied from LeagueTable to refactor to common
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
        <Text style={[tableHeaderStyles.tdText, themeStyles.text]}>W</Text>
      </View>
      <View style={[tableHeaderStyles.td]}>
        <Text style={[tableHeaderStyles.tdText, themeStyles.text]}>L</Text>
      </View>
      <View style={[tableHeaderStyles.td]}>
        <Text style={[tableHeaderStyles.tdText, themeStyles.text]}>T</Text>
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
    paddingBottom: 5,
  },
  td: {
    paddingHorizontal: 5,
  },
  tdText: {
    fontSize: 12,
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
        const isAlternate = index % 2;

        return (
          <View
            key={index}
            style={[
              tableBodyStyles.row,
              !isAlternate && themeStyles.lightContainer,
            ]}
          >
            <View style={[tableBodyStyles.td, tableBodyStyles.indexedTd]}>
              <Text
                style={[
                  tableBodyStyles.text,
                  tableBodyStyles.tdCenter,
                  themeStyles.text,
                ]}
              >
                {index + 1}
              </Text>
            </View>
            <View style={[tableBodyStyles.td, tableBodyStyles.tdGrow]}>
              <Text style={[tableBodyStyles.text, themeStyles.text]}>
                {row.name}
              </Text>
            </View>
            <View style={[tableBodyStyles.td]}>
              <Text style={[tableBodyStyles.text, themeStyles.text]}>
                {row.wins}
              </Text>
            </View>
            <View style={[tableBodyStyles.td]}>
              <Text style={[tableBodyStyles.text, themeStyles.text]}>
                {row.losses}
              </Text>
            </View>
            <View style={[tableBodyStyles.td]}>
              <Text style={[tableBodyStyles.text, themeStyles.text]}>
                {row.draws}
              </Text>
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
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(85, 85, 85)",
  },
  text: {
    fontSize: 13,
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

export const DivisionTable = () => {
  const data = mockData;

  return (
    <View>
      <TableHeader />

      <TableBody data={data} />
    </View>
  );
};
