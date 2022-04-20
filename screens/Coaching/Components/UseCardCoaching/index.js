import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { colors } from "../../../../styles/GlobalStyle";
import {
  H7,
  LightTxt,
  SmallLightTxt,
} from "../../../../components/TextsComponents";
import { PrimaryButton } from "../../../../components/Buttons";
import { DemiCircl, DemiCirclMob } from "../../../../assets/svg/space";

const UseCoachingCards = ({ Imge, TitleCard, BodyText, ButtonText ,navigation,To}) => {
  const { width } = useWindowDimensions();

  const card = {
    width: width <= 800 ? "95%" : width <= 1300 ? "45%" : "27%",
    borderRadius: 20,
    height: width <= 800 ? 411 : 490,
    backgroundColor: colors.white,
    marginBottom: width <= 1000 ? 20 : 0,
    position: "relative",
    overflow: "hidden",
    marginRight: width <= 800 ? 0 : 20,
    alignSelf: "center",
  };
  const BoxButton = {
    width: "100%",
    alignItems: width <= 800 ? "center" : "flex-start",
    marginTop: 25,
    paddingLeft: width <= 800 ? 0 : 20,
  };
  const topCard = {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: width <= 800 ? 120 : "",
  };
  const ButtonPrimary = {
    width: width <= 800 ? '90%' : 249,
    height: 42,
  };
  return (
    <View style={card}>
      <View style={topCard}>
        {width <= 1000 ? <DemiCirclMob /> : <DemiCircl />}
        <View style={styles.image}>
          <Imge />
        </View>
      </View>

      <View style={styles.Body}>
        <View style={styles.BoxTitle}>
          <H7>{TitleCard}</H7>
        </View>

        <View
          style={{
            textAlign: "justify",
          }}
        >
          <LightTxt style={{ paddingHorizontal: 25 }}>{BodyText}</LightTxt>
        </View>

        <View style={BoxButton}>
          <PrimaryButton style={ButtonPrimary}     onPress={() => {
                    navigation.navigate(To);
                  }}>
            <SmallLightTxt>{ButtonText}</SmallLightTxt>
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default UseCoachingCards;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    flex: 1,
  },

  image: {
    width: 53,
    height: 53,
    position: "absolute",
    bottom: 45,
  },
  Body: {},
  BoxTitle: {
    marginVertical: 15,
    paddingLeft: 20,
  },
});
