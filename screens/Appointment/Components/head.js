import { View, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { H5, Txt } from "../../../components/TextsComponents";

const Head = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      <View style={styles.TitleWrapper}>
        <H5
          style={{
            paddingHorizontal: width <= 800 ? 5 : 0,
            textAlign: "center",
          }}
        >
          Prendre rendez-vous avec un expert
        </H5>
      </View>
      <View
        style={[
          styles.TextWrapper,
          { paddingHorizontal: width <= 800 ? 10 : 0 },
        ]}
      >
        <Txt
          style={{
            paddingHorizontal: width <= 800 ? 5 : 0,
            textAlign: "center",
          }}
        >
          Donnez-nous quelques informations pour que nous puissions vous diriger
          vers les bons interlocuteurs
        </Txt>
      </View>
    </>
  );
};

export default Head;
const styles = StyleSheet.create({
  TitleWrapper: {
    marginTop: 40,
    alignSelf: "center",
  },
  TextWrapper: {
    marginTop: 20,
    alignSelf: "center",
  },
});
