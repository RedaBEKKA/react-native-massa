import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import {
  GeneralIcon,
  PasswordIcon,
  PaymentIcon,
  GiftIcon,
  SettingsIcon,
  HelpIcon,
  MentionsIcon,
  ContactIcon,
  LogoutIcon,
} from "../../assets/svg/MyAccountIcons";
import { H3, Txt } from "../TextsComponents";
import { colors } from "../../styles/GlobalStyle";
import DimensionsHook from "../../hooks/DimensionsHook";

const NavigationMenu = ({ navigation, active }) => {
  const { isDesktop } = DimensionsHook();
  const routing = [
    { name: "Général", link: "AccountGeneral", icon: () => <GeneralIcon /> },
    {
      name: "Mot de passe",
      link: "AccountPassword",
      icon: () => <PasswordIcon />,
    },
    {
      name: "Mes informations de paiement",
      link: "AccountPayment",
      icon: () => <PaymentIcon />,
    },
    {
      name: "Offrir un cadeau / Parrainage",
      link: "AccountGift",
      icon: () => <GiftIcon />,
    },
    {
      name: "Paramètres",
      link: "AccountSettings",
      icon: () => <SettingsIcon />,
    },
    {
      name: "Aide",
      link: "AccountHelp",
      icon: () => <HelpIcon />,
    },
    {
      name: "Mentions légales",
      link: "AccountMentions",
      icon: () => <MentionsIcon />,
    },
    {
      name: "Nous contacter",
      link: "AccountContact",
      icon: () => <ContactIcon />,
    },
  ];

  return (
    <ScrollView>
      {!isDesktop && <H3 style={{ marginVertical: 15 }}>Mon Compte</H3>}
      {routing.map((r) => {
        const isActive = r.link === active;
        return (
          <TouchableOpacity
            key={r.link}
            onPress={() => navigation.replace(r.link)}
            style={[
              styles.linkContainer,
              {
                borderColor: isActive ? "transparent" : colors.grayBorder,
                backgroundColor: !isActive ? "transparent" : colors.green2,
                height: isDesktop ? 42 : 50,
              },
            ]}
          >
            <View style={{ paddingHorizontal: 20 }}>{r.icon()}</View>
            <Txt fontSize={16}>{r.name}</Txt>
          </TouchableOpacity>
        );
      })}
      <TouchableOpacity
        style={[
          styles.linkContainer,
          {
            borderColor: colors.grayBorder,
            height: isDesktop ? 42 : 50,
          },
        ]}
      >
        <View style={{ paddingHorizontal: 20 }}>
          <LogoutIcon />
        </View>
        <Txt fontSize={16}>Se déconnecter</Txt>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default NavigationMenu;

const styles = StyleSheet.create({
  linkContainer: {
    width: "100%",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 21,
  },
});
