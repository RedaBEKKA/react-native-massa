import React, { useState } from "react";
import { CheckBox } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import { colors } from "../styles/GlobalStyle";

export const Input = ({
  placeholder,
  outlineColor,
  activeOutlineColor,
  placeholderTextColor,
  style,
  value,
  onChangeText,
  secureTextEntry,
  right,
}) => {
  return (
    <TextInput
      right={right || null}
      placeholder={placeholder}
      value={value}
      secureTextEntry={secureTextEntry || false}
      onChangeText={onChangeText}
      mode="outlined"
      outlineColor={outlineColor || colors.grayBorder}
      activeOutlineColor={activeOutlineColor || colors.green2}
      placeholderTextColor={placeholderTextColor || colors.grayBorder}
      style={{
        backgroundColor: "#fff",
        justifyContent: "center",
        color: colors.blue3,
        ...style,
      }}
    />
  );
};

export const RadioInput = ({ onPress, checked, title }) => {
  return (
    <CheckBox
      checked={checked}
      title={title || <></>}
      containerStyle={{
        alignSelf: "flex-start",
        margin: 0,
        padding: 0,
        backgroundColor: "transparent",
        borderWidth: 0,
      }}
      checkedIcon={
        <Ionicons name="checkmark-circle" size={24} color={colors.green2} />
      }
      uncheckedIcon={
        <Ionicons
          name="ios-radio-button-off-outline"
          size={24}
          color={colors.grayBorder}
        />
      }
      onPress={onPress}
    />
  );
};

export const SearchComponent = ({
  value,
  setValue,
  style,
  outlineColor,
  activeOutlineColor,
  placeholderTextColor,
}) => {
  const resetHandler = () => {
    setValue("");
  };
  return (
    <TextInput
      placeholder="Rechercher"
      mode="outlined"
      outlineColor={outlineColor || colors.grayBorder}
      activeOutlineColor={activeOutlineColor || colors.blue3}
      placeholderTextColor={placeholderTextColor || colors.grayBorder}
      value={value}
      style={{
        backgroundColor: "#fff",
        justifyContent: "center",
        color: colors.blue3,
        ...style,
      }}
      theme={{ colors: { text: colors.blue3 } }}
      left={
        <TextInput.Icon name={() => <Ionicons name={"search"} size={24} />} />
      }
      right={
        value.length > 0 ? (
          <TextInput.Icon
            onPress={resetHandler}
            name={() => <Ionicons name={"close"} size={24} />}
          />
        ) : (
          <></>
        )
      }
      onChangeText={(val) => setValue(val)}
    />
  );
};
