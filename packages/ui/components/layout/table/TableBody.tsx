import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTable } from "@scores/ui/components/layout/table/TableContext";
import { useTheme } from "@scores/theme/utils/theme";
import { TableTd } from "./TableTd";

interface Props {
  data: any; // @TODO: add to generics
  showIndex: boolean;
  spaced: boolean;
}

export const TableBody: React.FC<Props> = ({ data, showIndex, spaced }) => {
  const tableConfig = useTable();
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
              themeStyles.mediumContainer,
              spaced && tableBodyStyles.rowSpaced,
              !isAlternate && themeStyles.lightContainer,
            ]}
          >
            {/* // @TODO: add showIndex to context */}
            {showIndex && (
              <View style={[tableBodyStyles.td, tableBodyStyles.indexedTd]}>
                <Text
                  style={[
                    tableBodyStyles.text,
                    tableBodyStyles.tdTextCenter,
                    themeStyles.text,
                  ]}
                >
                  {index + 1}
                </Text>
              </View>
            )}
            {tableConfig.map((config, index) => (
              <TableTd
                key={index}
                config={config}
                showIndex={showIndex}
                value={row[config.accessor]}
              />
            ))}
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
  },
  rowSpaced: {
    justifyContent: "space-between",
  },
  text: {
    fontSize: 13,
  },
  td: {
    paddingHorizontal: 5,
  },
  limitedTd: {
    width: "15%",
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
