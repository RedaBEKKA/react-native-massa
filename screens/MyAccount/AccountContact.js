import { StyleSheet, View, ScrollView, Platform, Button } from "react-native";
import React from "react";
import DimensionsHook from "../../hooks/DimensionsHook";
import BackHeader from "../../components/BackHeader";
import { colors } from "../../styles/GlobalStyle";
import HeaderComponent from "../../components/HeaderComponent";
import NavigationMenu from "../../components/myaccount/NavigationMenu";
import { H3, Txt } from "../../components/TextsComponents";

const AccountContact = ({ navigation }) => {
  const { isDesktop } = DimensionsHook();
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={Platform.OS === "web"}>
        {isDesktop ? (
          <HeaderComponent myaccount={true}  navigation={navigation} />
        ) : (
          <BackHeader
            navigation={navigation}
            myaccount={true}
            active="AccountContact"
          />
        )}
        <View style={styles.contentContainer}>
          {isDesktop && <H3 style={{ marginBottom: 20 }}>Mon Compte</H3>}

          <View style={{ flexDirection: "row" }}>
            {isDesktop ? (
              <View style={{ width: 300 }}>
                <NavigationMenu
                  navigation={navigation}
                  active="AccountContact"
                />
              </View>
            ) : (
              <></>
            )}
            {/** contect screen */}
            <View
              style={[
                styles.screenContainer,
                {
                  backgroundColor: isDesktop ? colors.white : "transparent",
                  paddingHorizontal: isDesktop ? 20 : 10,
                  marginHorizontal: isDesktop ? 20 : 0,
                  paddingVertical: isDesktop ? 20 : 0,
                },
              ]}
            >
              <Txt>Account Contact Screen</Txt>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AccountContact;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    flex: 1,
  },
  contentContainer: { marginHorizontal: "2%", marginTop: 10 },
  screenContainer: {
    flex: 1,
    borderRadius: 20,
  },
});
