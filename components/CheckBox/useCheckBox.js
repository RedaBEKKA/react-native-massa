import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons'; 
import { colors } from "../../styles/GlobalStyle";
import { Txt } from "../TextsComponents";
const CheckBox = (props) => {

  return (
    <View style={styles.container}>
      <Pressable onPress={props.onPress}>
        {!props.isChecked ? (
          <MaterialIcons
            name={"radio-button-unchecked"}
            size={24}
            color={colors.grayBackground}
          />
        ) : (
            <FontAwesome name="check-circle" size={24} color={colors.green2} />
        )}
      </Pressable>
      <Txt style={{marginLeft:10}}>{props.title}</Txt>
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
    paddingRight:15,
  },
  title: {
      marginLeft:10
  },
});
