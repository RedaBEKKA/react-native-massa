import React from "react";
import { View, Text, Pressable, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Txt } from "../../../components/TextsComponents";
import { colors } from "../../../styles/GlobalStyle";
import MaskGroup from "../../../assets/MaskGroup.png";

export default function RadioButton({ data, CloseAll,userOption,setUserOption }) {
  return (
    <>
      {data.map((item) => {
        return (
          <Pressable
            style={ userOption == item.value ?styles.StyleBoxes: styles.StyleBox  }
            onPress={() => {
              setUserOption(item.value);
              //   selectAtelier();
                CloseAll();
            }}
            key={item.value}
          >
            <View style={styles.ImageBac}>
              <Image
                source={MaskGroup}
                style={{ height: "100%", width: "100%" }}
              />
              <View style={styles.Icon}>
                {item.icon}
              </View>
            </View>
            <Txt style={{ alignSelf: "center", marginTop: 10 }}>
              {item.value}
            </Txt>
          </Pressable>
        );
      })}
      {/* <Text> User option: {userOption}</Text> */}
    </>
  );
}

const styles = StyleSheet.create({

  StyleBox: {
    width: "30%",
    height: "100%",
    backgroundColor: colors.white,
    borderColor: colors.white,
    borderRadius: 10,
    overflow: "hidden",
  },
  StyleBoxes: {
    shadowColor: colors.green2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    width: "30%",
    height: "100%",
    backgroundColor: colors.white,
    borderColor: colors.green2,
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  ImageBac: {
    width: "100%",
    height: 58,
    // backgroundColor:'#ccc',
    justifyContent: "center",
    alignItems: "center",
  },
  Icon: {
    height: 27,
    width: 30,
    top: -35,
  },
});
