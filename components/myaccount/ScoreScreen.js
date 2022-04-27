import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { H2, H3, H7, SmallTxt, Txt } from "../TextsComponents";
import DimensionsHook from "../../hooks/DimensionsHook";
import { colors } from "../../styles/GlobalStyle";
import { ScoreCup, ScoreFestival } from "../../assets/svg/MyAccountIcons";
import scoreSki from "../../assets/scoreski.png";
import { PrimaryButton } from "../Buttons";
import { ScoreBook, ScoreHand, ScoreShake } from "../../assets/svg/Icons";
const ScoreScreen = ({ navigation }) => {
  const { width, isDesktop, isTablet } = DimensionsHook();
  const isDesktopCustom = width > 1100;
  return (
    <View style={{ marginTop: isDesktopCustom ? 0 : 20 }}>
      <H3 style={{ fontSize: isDesktop ? 26 : 22 }}>Votre Score</H3>
      <Txt style={{ marginVertical: 20 }}>
        Votre navigation sur l’application, vos chemins, vos activités, vous
        rapportent des jetons et vous permettent de progresser dans les statuts
        proposés. Quand vous utilisez vos jetons, vous gardez le statut acquis.
      </Txt>
      {/** cards */}
      <View style={styles.cardsContainer}>
        {/** jetons card */}
        <View
          style={[
            styles.card,
            {
              width: isDesktopCustom ? "49%" : "100%",
              backgroundColor: colors.green0,
            },
          ]}
        >
          <View style={styles.festivalContainer}>
            <ScoreFestival />
          </View>
          <View
            style={{
              position: "absolute",
              right: 14,
              height: isDesktopCustom ? 200 : 150,
              width: isDesktopCustom ? 200 : 150,
              top: isDesktopCustom ? -8 : 17,
            }}
          >
            <ScoreCup />
          </View>
          <View style={{ marginLeft: isTablet ? 40 : isDesktop ? 40 : 10 }}>
            <Txt>Vous avez</Txt>
            <View
              style={[styles.textContainer, { backgroundColor: colors.green1 }]}
            >
              <H2>120 jetons</H2>
            </View>
          </View>
        </View>
        {/** status card */}
        <View
          style={[
            styles.card,
            {
              width: isDesktopCustom ? "49%" : "100%",
              backgroundColor: colors.blue1,
            },
          ]}
        >
          <View style={styles.festivalContainer}>
            <ScoreFestival />
          </View>
          <View
            style={{
              position: "absolute",
              right: 14,
              height: isDesktopCustom ? 200 : 150,
              width: isDesktopCustom ? 200 : 150,
              top: isDesktopCustom ? -8 : 17,
            }}
          >
            <Image
              source={scoreSki}
              style={{
                height: isDesktopCustom ? 200 : 150,
                width: isDesktopCustom ? 200 : 150,
              }}
            />
          </View>

          <View style={{ marginLeft: isTablet ? 40 : isDesktop ? 40 : 10 }}>
            <Txt>Votre Statut</Txt>
            <View
              style={[styles.textContainer, { backgroundColor: colors.white }]}
            >
              <H2>Randonneur</H2>
            </View>
          </View>
        </View>
        {/** use jetons */}
      </View>
      <Txt style={{ marginTop: 30, marginBottom: 10 }}>
        Utilisez vos jetons pour faire un cadeau à vous-même ou à un ami :
      </Txt>
      {/** use jetons options */}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: isDesktopCustom ? "flex-start" : "space-between",
        }}
      >
        {/** card 1 */}
        <View
          style={[
            styles.useCard,
            {
              backgroundColor: isDesktop ? colors.beige : colors.white,
              width: isDesktopCustom ? "30%" : "48%",
              marginRight: isDesktopCustom ? 20 : 0,
              maxWidth: isDesktopCustom ? 300 : "auto",
            },
          ]}
        >
          <View style={styles.circle}>
            <ScoreBook />
          </View>
          <H7
            style={{
              textAlign: "center",
              marginHorizontal: isDesktopCustom ? 40 : 10,
            }}
          >
            Un e-book de notre bibliothèque
          </H7>
          <View style={styles.badge}>
            <SmallTxt>12€ soit 125 jetons</SmallTxt>
          </View>
          <PrimaryButton style={{ marginBottom: 20 }}>
            Sélectionner
          </PrimaryButton>
        </View>
        {/** card 2 */}
        <View
          style={[
            styles.useCard,
            {
              backgroundColor: isDesktop ? colors.beige : colors.white,
              width: isDesktopCustom ? "30%" : "48%",
              marginRight: isDesktopCustom ? 20 : 0,
              maxWidth: isDesktopCustom ? 300 : "auto",
            },
          ]}
        >
          <View style={styles.circle}>
            <ScoreHand />
          </View>
          <H7
            style={{
              textAlign: "center",
              marginHorizontal: isDesktopCustom ? 40 : 10,
            }}
          >
            Faire un don à une association de votre choix
          </H7>
          <View style={styles.badge}>
            <SmallTxt>24€ soit 250 jetons</SmallTxt>
          </View>
          <PrimaryButton style={{ marginBottom: 20 }}>
            Sélectionner
          </PrimaryButton>
        </View>
        {/** card 3 */}
        <View
          style={[
            styles.useCard,
            {
              backgroundColor: isDesktop ? colors.beige : colors.white,
              width: isDesktopCustom ? "30%" : "48%",
              marginRight: isDesktopCustom ? 20 : 0,
              maxWidth: isDesktopCustom ? 300 : "auto",
            },
          ]}
        >
          <View style={styles.circle}>
            <ScoreShake />
          </View>
          <H7
            style={{
              textAlign: "center",
              marginHorizontal: isDesktopCustom ? 40 : 10,
            }}
          >
            Prendre rendez-vous avec un de nos experts
          </H7>
          <View style={styles.badge}>
            <SmallTxt>48€ soit 500 jetons</SmallTxt>
          </View>
          <PrimaryButton style={{ marginBottom: 20 }}>
            Sélectionner
          </PrimaryButton>
        </View>
      </View>
      <Txt style={{ marginTop: 20, marginBottom: isDesktop ? 0 : 20 }}>
        Merci de votre fidélité et de votre engagement !
      </Txt>
    </View>
  );
};

export default ScoreScreen;

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  card: {
    height: 184,
    marginTop: 20,
    borderRadius: 20,
    justifyContent: "center",
  },
  festivalContainer: { position: "absolute", width: "90%", height: "100%" },
  textContainer: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    borderRadius: 100,
    marginTop: 10,
  },
  useCard: {
    height: 280,
    borderRadius: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 20,
    overflow: "hidden",
  },
  badge: {
    backgroundColor: colors.green1,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginVertical: 10,
    borderRadius: 30,
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
});
