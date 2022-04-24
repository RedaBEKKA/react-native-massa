import React, { useState, useEffect, useRef } from "react";
import { CheckBox } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import { colors } from "../styles/GlobalStyle";
import {
  Pressable,
  View,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Animated,
  Easing,
  ScrollView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { SmallTxt, Txt } from "./TextsComponents";
import { TouchableRipple } from "react-native-paper";
import { PresenceTransition } from "native-base";

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

export const DropDown = ({
  show,
  setShow,
  value,
  setValue,
  options,
  height,
  placeholder,
}) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: show ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start();
  }, [show]);

  const onSelectOption = (option) => {
    setValue(option);
    setShow();
  };
  return (
    <View style={{ width: "100%", position: "relative", zIndex: 1000}}>
      <Pressable
        onPress={setShow}
        style={[
          styles.button,
          {
            borderColor: show ? colors.green2 : colors.grayBorder,
            borderBottomLeftRadius: show ? 0 : 5,
            borderBottomRightRadius: show ? 0 : 5,
            height,
          },
        ]}
      >
        <Txt numberOfLines={1} fontSize={14}>
          {value === "" ? placeholder : value.label}
        </Txt>
        <Animated.View
          style={{
            transform: [
              {
                rotate: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0deg", "180deg"],
                }),
              },
            ],
          }}
        >
          <FontAwesome5
            name="chevron-down"
            size={14}
            color={colors.blue3}
            style={{ marginTop: 3 }}
          />
        </Animated.View>
      </Pressable>
      {/** options */}

      <PresenceTransition
        visible={show}
        initial={{
          translateY: -5,
          opacity: 0,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            type: "timing",
            duration: 300,
            useNativeDriver: Platform.OS === "web" ? false : true,
          },
        }}
        style={[
          styles.optionsContainer,
          {
            top: height,
          },
        ]}
      >
        <ScrollView nestedScrollEnabled={true}>
          {options.map((option) => {
            return (
              <TouchableRipple
                rippleColor={colors.green3}
                onPress={() => onSelectOption(option)}
                key={option.value}
                style={[
                  styles.optionButton,
                  {
                    backgroundColor:
                      option.value == value.value ? colors.beige : colors.white,
                  },
                ]}
              >
                <Txt fontSize={14} numberOfLines={1}>
                  {option.label}
                </Txt>
              </TouchableRipple>
            );
          })}
        </ScrollView>
      </PresenceTransition>
    </View>
  );
};

const styles = StyleSheet.create({
  optionsContainer: {
    position: "absolute",
    backgroundColor: colors.white,
    width: "100%",
    borderWidth: 1,
    borderColor: colors.green2,
    borderTopWidth: 0,
    maxHeight: 150,
  },
  optionButton: {
    width: "100%",
    height: 45,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: colors.beige,
    paddingLeft: 10,
  },
  button: {
    borderWidth: 1,
    width: "100%",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    height: 50,
    backgroundColor: colors.white,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
