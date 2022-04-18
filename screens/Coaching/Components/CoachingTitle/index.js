import { StyleSheet, View } from "react-native";
import React from "react";
import { H5, LightTxt } from "../../../../components/TextsComponents";

const CoachingTitle = () => {
  return (
    <View>
      <View style={styles.TitleCoaching}>
        <H5 style={styles.textJustify}>Coaching</H5>
      </View>
      <View style={styles.Title}>
        <LightTxt style={styles.textJustify}>
          Vous pouvez prendre rendez-vous avec l’un de nos experts ou répondre à
          nos questionnaires.
        </LightTxt>
      </View>
    </View>
  );
};

export default CoachingTitle;

const styles = StyleSheet.create({
  TitleCoaching: {
    marginTop: 30,
    paddingVertical: 8,
  },
  Title: {
    paddingVertical: 8,
  },
  textJustify: {
    textAlign: "center",
  },
});
