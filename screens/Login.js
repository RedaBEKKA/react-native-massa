import { StyleSheet, View, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors } from "../styles/GlobalStyle";
import { H2 } from "../components/TextsComponents";
import SignIn from "../components/login/SignIn";
import SignUp from "../components/login/SignUp";
import DimensionsHook from "../hooks/DimensionsHook";
import { GreenLogo } from "../assets/svg/Logo";
const Login = ({ navigation }) => {
  const { isMobile, isTablet } = DimensionsHook();
  const [signIn, setSignIn] = useState(true);
  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            alignSelf: "center",
            marginTop: 40,
            width: 200,
            height: 100,
          }}
        >
          <GreenLogo />
        </View>
        {/** SignIn & Signup Buttons */}
        <View style={styles.linksButton}>
          <Pressable onPress={() => setSignIn(true)}>
            <H2 style={{ opacity: signIn ? 1 : 0.5 }}>Connexion</H2>
          </Pressable>
          <View style={styles.divider} />
          <Pressable onPress={() => setSignIn(false)}>
            <H2 style={{ opacity: signIn ? 0.5 : 1 }}>Inscription</H2>
          </Pressable>
        </View>
        <View
          style={{
            alignSelf: "center",
            width: isMobile ? "90%" : isTablet ? "80%" : 500,
          }}
        >
          {signIn ? (
            <SignIn navigation={navigation} />
          ) : (
            <SignUp navigation={navigation} />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    flex: 1,
  },
  linksButton: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  divider: {
    backgroundColor: colors.grayBorder,
    width: 2,
    height: "80%",
    marginHorizontal: 10,
  },
});
