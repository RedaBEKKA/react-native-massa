import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { H6, SmallTxt } from "../../../../components/TextsComponents";
import CheckBox from "../../../../components/CheckBox/useCheckBox";
import { colors } from "../../../../styles/GlobalStyle";

const RenderQustions = ({ item }) => {
  const { width } = useWindowDimensions();
  const CustW2 = width <= 800 ? "90%" : width <= 1500 ? "50%" : "100%";

  return (
    <View
      style={{
        width: 350,
        marginRight: 15,
      }}
    >
      {/* reponse */}
      <View style={[styles.Reponses, { width: CustW2 }]}>
        <View>
          {item?.possible_answers.map((i) => {
            return (
              <View style={styles.BoxResponse}>
                <CheckBox onPress={() => {}} title={i} isChecked={false} />
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};


export default RenderQustions;

const styles = StyleSheet.create({
  QuestionsCounter: {
    alignSelf: "center",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    marginVertical: 20,
  },
  Questions: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  Reponses: {
    marginTop: 20,
    alignSelf: "center",
  },
  BoxResponse: {
    flexDirection: "row",
    alignItems: "center",
    height: 67,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 5,
    paddingLeft: 15,
  },
});
