import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { Txt } from "../TextsComponents";
import { Check, UnCheck } from "../../assets/svg/Coaching";
const CheckBox = (props) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={props.onPress}>
        {!props.isChecked ? (
          <View style={{ width: 20, height: 20 }}>
            <UnCheck />
          </View>
        ) : (
          <View style={{ width: 20, height: 20 }}>
            <Check />
          </View>
        )}
      </Pressable>
      <Txt style={{ marginLeft: 10 }}>{props.title}</Txt>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: 150,
    paddingRight: 15,
  },
  title: {
    marginLeft: 10,
  },
});
