import { Pressable, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Txt } from "../TextsComponents";
import { Check, UnCheck } from "../../assets/svg/Coaching";
const CheckBox = (props) => {
  const [checkedState, setCheckedState] = useState(
    new Array(props.title?.length).fill(false),
    // console.log("currentQuestionIndex", currentQuestionIndex)
  );

  console.log("checkedState", checkedState);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          handleOnChange(props.index);
        }}
      >
        {checkedState[props.index] ? (
          <View style={{ width: 20, height: 20 }}>
            <Check />
          </View>
        ) : (
          <View style={{ width: 20, height: 20 }}>
            <UnCheck />
          </View>
        )}
        {/* !i && (
              <View style={{ width: 20, height: 20 }}>
                <UnCheck />
              </View>
            ); */}
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
