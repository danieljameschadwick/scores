import React, { useState } from "react";
import { Month } from "@scores/types/enum/Month";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getTheme } from "@scores/theme/utils/theme";
import { useClickOutside } from "@scores/ui/util/useClickOutside";

export const Dropdown: React.FC = () => {
  const themeStyles = getTheme();
  const [open, setOpen] = useState<boolean>(false);
  const [ref] = useClickOutside(setOpen);
  const [value, setValue] = useState<string>(Month.SEPTEMBER);
  const [items, setItems] = useState([
    { label: "August", value: Month.AUGUST },
    { label: "September", value: Month.SEPTEMBER },
  ]);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const dropdownContainerStyles = [styles.dropdownContainer];
  if (!open) dropdownContainerStyles.push(styles.hiddenContainer);

  return (
    <View ref={ref} style={[styles.container]}>
      <TouchableOpacity onPress={() => toggleOpen()}>
        <View style={[]}>
          <Text style={[themeStyles.text]}>{value}</Text>
        </View>
      </TouchableOpacity>

      <View style={[dropdownContainerStyles]}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    zIndex: 20,
  },
  dropdownContainer: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 25,
    zIndex: 20,
  },
  hiddenContainer: {
    display: "none",
  },
  dropdownItem: {
    backgroundColor: "black",
  },
});
