import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTable } from "@scores/ui/components/layout/table/TableContext";
import { useTheme } from "@scores/theme/utils/theme";

interface Props {
  showIndex: boolean;
}

export const TableHeader = ({ showIndex }) => {
  const tableConfig = useTable();
  const themeStyles = useTheme();

  return (
    <View style={[tableHeaderStyles.row]}>
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
        <View
          key={index}
          style={[
            tableHeaderStyles.td,
            config.style?.limited && tableHeaderStyles.limitedTd,
            config.style?.grow && tableHeaderStyles.tdGrow,
          ]}
        >
          <Text style={[
            tableHeaderStyles.tdText,
            themeStyles.text,
            config.style?.center && tableHeaderStyles.tdTextCenter,
          ]}>
            {config.label}
          </Text>
        </View>
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
