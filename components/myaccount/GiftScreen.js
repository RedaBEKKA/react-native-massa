import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { H3, H6, H7, SmallTxt, Txt } from "../TextsComponents";
import DimensionsHook from "../../hooks/DimensionsHook";
import { colors } from "../../styles/GlobalStyle";
import { PrimaryButton } from "../Buttons";
import { ScoreBook, ScoreShake, ScoreGift } from "../../assets/svg/Icons";

const GiftScreen = () => {
  const { isDesktop, width } = DimensionsHook();
  const isBig = width > 1100;

  return (
    <View style={{ marginTop: isDesktop ? 0 : 20 }}>
      <H3 style={{ fontSize: isDesktop ? 26 : 22 }}>Offrir un cadeau</H3>
      <Txt style={{ marginVertical: 20 }}>
        Vous souhaitez offrir un cadeau à l'un de vos proches pour une occasion
        particulière.
      </Txt>
      {/** cards */}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: isBig ? "flex-start" : "space-between",
        }}
      >
        {/** card 1 */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: isDesktop ? colors.beige : colors.white,
              width: isBig ? "30%" : "48%",
              marginRight: isBig ? 20 : 0,
              maxWidth: isDesktop ? 300 : "auto",
            },
          ]}
        >
          <View style={{ height: 80 }} />
          <View style={styles.circle}>
            <ScoreGift />
          </View>
          <H7
            style={{
              textAlign: "center",
              marginHorizontal: isBig ? 40 : 10,
            }}
          >
            Offrir abonnement à quelqu’un
          </H7>

          <PrimaryButton style={{ marginBottom: 20 }}>
            Sélectionner
          </PrimaryButton>
        </View>
        {/** card 2 */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: isDesktop ? colors.beige : colors.white,
              width: isBig ? "30%" : "48%",
              marginRight: isBig ? 20 : 0,
              maxWidth: isDesktop ? 300 : "auto",
            },
          ]}
        >
          <View style={styles.circle}>
            <ScoreBook />
          </View>
          <View style={{ height: 80 }} />
          <H7
            style={{
              textAlign: "center",
              marginHorizontal: isBig ? 40 : 10,
            }}
          >
            Offrir un ebook
          </H7>

          <PrimaryButton style={{ marginBottom: 20 }}>
            Sélectionner
          </PrimaryButton>
        </View>
        {/** card 3 */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: isDesktop ? colors.beige : colors.white,
              width: isBig ? "30%" : "48%",
              marginRight: isBig ? 20 : 0,
              maxWidth: isDesktop ? 300 : "auto",
            },
          ]}
        >
          <View style={styles.circle}>
            <ScoreShake />
          </View>
          <View style={{ height: 80 }} />
          <H7
            style={{
              textAlign: "center",
              marginHorizontal: isBig ? 40 : 10,
            }}
          >
            Offrir un flash coaching
          </H7>

          <PrimaryButton style={{ marginBottom: 20 }}>
            Sélectionner
          </PrimaryButton>
        </View>
      </View>
      <View style={styles.divider} />
      {/** parrainage  */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: isDesktop ? 0 : 30,
        }}
      >
        <H6>Parrainage</H6>
        <PrimaryButton>Parrainer</PrimaryButton>
      </View>
    </View>
  );
};

export default GiftScreen;

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: colors.grayBorder,
    marginVertical: 20,
  },
  circle: {
    width: 150,
    height: 150,
    paddingBottom: 30,
    borderRadius: 75,
    backgroundColor: "#C9DCC525",
    position: "absolute",
    top: -75,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  card: {
    height: 280,
    borderRadius: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
    overflow: "hidden",
  },
});
