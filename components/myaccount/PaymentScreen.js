import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { H3, Txt } from "../TextsComponents";
import DimensionsHook from "../../hooks/DimensionsHook";
import { colors } from "../../styles/GlobalStyle";
import { PrimaryButton, SecondaryButton } from "../Buttons";

const PaymentScreen = () => {
  const { width } = DimensionsHook();
  const isDesktop = width > 1000;
  return (
    <View>
      {/** status abonnement */}
      <View
        style={[
          styles.container,
          {
            marginTop: isDesktop ? 0 : 20,
          },
        ]}
      >
        <H3 style={{ fontSize: isDesktop ? 26 : 18 }}>
          Votre abonnement - Annuel
        </H3>
        <View style={[styles.badge, { marginLeft: isDesktop ? 20 : 10 }]}>
          <Txt>Actif</Txt>
        </View>
      </View>
      {/** next paiement */}

      <Txt style={{ marginTop: 20 }}>
        Le prochain paiement de 95,88€ sera le 11 Janvier 2023.
      </Txt>
      <Txt style={{ marginTop: 20 }}>
        Votre abonnement est reconduit automatiquement tous les ans.
      </Txt>
      <View style={styles.divider} />
      {/** buttons */}
      <View
        style={{
          width: "100%",
          flexDirection: isDesktop ? "row-reverse" : "column",
          alignItems: isDesktop ? "center" : "flex-end",
          justifyContent: isDesktop ? "flex-start" : "center",
        }}
      >
        <PrimaryButton style={{ marginLeft: isDesktop ? 15 : 0 }}>
          Modifier les informations de paiement{" "}
        </PrimaryButton>
        <SecondaryButton style={{ marginTop: isDesktop ? 0 : 15 }}>
          Se désabonner
        </SecondaryButton>
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  badge: {
    backgroundColor: colors.green2,
    paddingHorizontal: 10,
    borderRadius: 100,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: colors.grayBorder,
    marginVertical: 20,
  },
});
