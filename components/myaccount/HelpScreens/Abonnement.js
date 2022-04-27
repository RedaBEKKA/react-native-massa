import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { SmallArrow } from "../../../assets/svg/Icons";
import { Txt, H3 } from "../../TextsComponents";
import DimensionsHook from "../../../hooks/DimensionsHook";
import { QuestionDropDown } from "../../Inputs";

// FAKE QUESTIONS - ANSWERS
const subjects = [
  {
    question: "Question 1",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "Question 2",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const Abonnement = ({ setState }) => {
  const { isDesktop } = DimensionsHook();
  return (
    <View style={{ marginTop: isDesktop ? 0 : 20 }}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          position: isDesktop ? "absolute" : "relative",
          top: isDesktop ? -75 : 0,
        }}
        onPress={() => setState("Categories")}
      >
        <SmallArrow />
        <Txt
          style={{
            marginLeft: 5,
          }}
        >
          Retour aux catégories
        </Txt>
      </TouchableOpacity>
      <H3
        style={{ fontSize: isDesktop ? 26 : 22, marginTop: isDesktop ? 0 : 20 }}
      >
        Abonnement
      </H3>
      {/** use question dropdown */}
      {subjects.map((subject) => {
        return (
          <QuestionDropDown
            key={subject.question}
            question={subject.question}
            answer={subject.answer}
            height={64}
          />
        );
      })}
    </View>
  );
};

export default Abonnement;

const styles = StyleSheet.create({});
