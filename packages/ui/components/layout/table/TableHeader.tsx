import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTable } from "@scores/ui/components/layout/table/TableContext";
import { useTheme } from "@scores/theme/utils/theme";
import { TableTd } from "./TableTd";

interface Props {
  showIndex: boolean;
  spaced: boolean;
}

export const TableHeader = ({ showIndex, spaced }) => {
  const tableConfig = useTable();
  const themeStyles = useTheme();

  return (
    <View style={[
      tableHeaderStyles.row,
      spaced && tableHeaderStyles.rowSpaced,
    ]}>
      {showIndex && (
        <View style={[tableHeaderStyles.td, tableHeaderStyles.indexedTd]}>
          <Text
            style={[
              tableHeaderStyles.tdText,
              tableHeaderStyles.tdTextCenter,
              themeStyles.text,
            ]}
          >
            #
          </Text>
        </View>
      )}
      {tableConfig.map((config, index) => (
        <TableTd
          key={index}
          config={config}
          showIndex={showIndex}
          value={config.label}
        />
      ))}
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
  rowSpaced: {
    justifyContent: "space-between",
  },
  td: {
    paddingHorizontal: 5,
  },
  limitedTd: {
    width: "15%",
  },
  tdText: {
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  indexedTd: {
    width: 30,
  },
  tdTextCenter: {
    textAlign: "center",
  },
  tdGrow: {
    flexGrow: 1,
  },
});
