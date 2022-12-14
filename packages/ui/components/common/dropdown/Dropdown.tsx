import React, { useState } from "react";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Month } from "@scores/types/enum/Month";
import { useTheme } from "@scores/theme/utils/theme";
import { useClickOutside } from "@scores/ui/util/useClickOutside";
import { getPrimaryText } from "@scores/theme/utils/variables";
import { Z_INDEXES } from "@scores/types/enum/zIndex";

// @TODO: implement react-i18next / translations with displayable strings
const formattedMonthKeys = {
  [Month.AUGUST]: "August",
  [Month.SEPTEMBER]: "September",
};

const getLabel = (value: string, items: [{ label: string; value: string }]) => {
  for (const item of items) {
    if (item.value === value) {
      return item.label;
    }
  }

  return value;
};

interface Props<T> {
  value: T;
  setValue: (value: T) => {};
  values: T[];
}

export const Dropdown: React.FC<Props<string>> = ({
  value,
  setValue,
  values,
}) => {
  const themeStyles = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  const [ref] = useClickOutside(setOpen);
  const [items] = useState(values);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <View ref={ref} style={[styles.container]}>
      <TouchableOpacity
        style={[styles.dropdownContainer, themeStyles.darkContainer]}
        onPress={() => toggleOpen()}
      >
        <Text style={[styles.dropdownText, themeStyles.text]}>
          {getLabel(value, items)}
        </Text>

        <EntypoIcon
          name="chevron-small-down"
          size={20}
          color={getPrimaryText()}
        />
      </TouchableOpacity>

      <View
        style={[
          styles.menuContainer,
          themeStyles.darkContainer,
          !open && styles.hiddenContainer,
        ]}
      >
        <View style={[styles.fixedContainer, themeStyles.darkContainer]}>
          {items.map(({ label, value }) => {
            return (
              <TouchableOpacity key={value} onPress={() => setValue(value)}>
                <View style={[styles.dropdownItem]}>
                  <Text style={[themeStyles.text]}>{label}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    zIndex: 20,
  },
  dropdownContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingLeft: 15,
    paddingRight: 10,
    borderRadius: 5,
    minWidth: 130, // @TODO: pass as prop
  },
  dropdownText: {
    fontWeight: "600",
    textAlign: "left",
  },
  menuContainer: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 45,
    zIndex: Z_INDEXES.OVERLAY,
  },
  fixedContainer: {
    // @TODO: fixed isn't available in an app
    position: "fixed",
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  hiddenContainer: {
    display: "none",
  },
  dropdownItem: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
