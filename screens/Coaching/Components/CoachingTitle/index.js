import { StyleSheet, useWindowDimensions, View } from "react-native";
import React from "react";
import { H5, LightTxt } from "../../../../components/TextsComponents";

const CoachingTitle = () => {
  const { width } = useWindowDimensions();

  const StyleText = {
    textAlign: "center",
    padding: width  <= 1000 ? 10 : 0
  }
  return (
    <View style={styles.Conatiner}>
      <View style={styles.TitleCoaching}>
        <H5 style={styles.textJustify}>Coaching</H5>
      </View>
      <View style={styles.Title}>
        <LightTxt style={StyleText}>
          Vous pouvez prendre rendez-vous avec l’un de nos experts ou répondre à
          nos questionnaires.
        </LightTxt>
      </View>
    </View>
  );
};

export default CoachingTitle;

const styles = StyleSheet.create({
  Conatiner:{
    alignItems:'center',
    marginVertical:25,
  },  
  TitleCoaching: {
    paddingVertical: 8,
  },
  Title: {
    paddingVertical: 8,
  },
  textJustify: {
  },
});
