import React, { Component, useState } from "react";
import {
  Picker,
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { colors } from "../../../styles/GlobalStyle";
import RNPickerSelect from "react-native-picker-select";
// import { Ionicons } from '@expo/vector-icons';
import { Chevron } from "react-native-shapes";
import DimensionsHook from "../../../hooks/DimensionsHook";
const DropDownMob = () => {
  const [selectedcat, setSelectedcat] = useState(items);
  const { width } = useWindowDimensions();
  const { isDesktop } = DimensionsHook();

  const onValueChangeCat = async (value) => {
    console.log(value);
    setSelectedcat({ value });
  };
  const selectedItem = {
    title: "Selected item title",
  };
  const items = [
    { label: "Football", value: "football" },
    { label: "Baseball", value: "baseball" },
    { label: "Hockey", value: "hockey" },
  ];
  return (
    <View style={styles.viewStyle}>
      <RNPickerSelect
        pickerProps={{
          accessibilityLabel: selectedItem.title,
        }}
        items={items}
        onValueChange={(val) => {
          onValueChangeCat(val);
        }}
        style={{
          ...styles,
          iconContainer: {
            top: 30,
            right: 12,
          },
        }}
        value={selectedcat}
        useNativeAndroidPickerStyle={false}
        Icon={() => {
          return (
            !isDesktop && (
              <Chevron size={1.5} color="gray" style={{ marginRight: 5 }} />
            )
          );
        }}
      />
    </View>
  );
};
export default DropDownMob;
const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    height: 64,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  itemStyle: {
    fontSize: 14,
    color: colors.black,
    padding: 5,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  pickerStyle: {
    width: "100%",
    height: "100%",
    color: "#000",
    fontSize: 14,
  },
  textStyle: {
    fontSize: 14,
  },
  pikerItem: {
    width: "100%",
    backgroundColor: "#eee",
  },
  inputAndroid: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.grayBorder,
    borderRadius: 8,
    paddingRight: 30, // to ensure the text is never behind the icon
    height: 64,
    minWidth: "100%",
    paddingLeft: 15,
  },
});
