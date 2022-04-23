import {
  StyleSheet,
  TouchableOpacity,
  View,
  Platform,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { ArrowBack } from "../assets/svg/Icons";
import { colors } from "../styles/GlobalStyle";
import { Txt } from "./TextsComponents";
import DimensionsHook from "../hooks/DimensionsHook";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Modal, VStack } from "native-base";
import NavigationMenu from "./myaccount/NavigationMenu";
import { CloseIcon, MTLogoGreen } from "../assets/svg/Logo";

const BackHeader = ({ navigation, myaccount, active }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onBackPress = () => navigation.goBack();
  const { height } = DimensionsHook();
  const closeHandler = () => {
    setIsOpen(false);
  };
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colors.beige,
        borderBottomColor: colors.grayBorder,
        borderBottomWidth: 1,
      }}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={onBackPress} style={styles.button}>
          <View style={{ width: 24, height: 24 }}>
            <ArrowBack />
          </View>
        </TouchableOpacity>
        <Txt style={{ marginLeft: 20 }}>Retour</Txt>
      </View>
      {/** open my account menu on small screens */}
      {myaccount && (
        <TouchableOpacity
          style={{ paddingRight: 10 }}
          onPress={() => setIsOpen(true)}
        >
          <MaterialCommunityIcons name="menu" size={30} color={colors.blue3} />
        </TouchableOpacity>
      )}
      <Modal size="full" isOpen={isOpen} onClose={closeHandler}>
        <Modal.Content
          style={[
            styles.modalContainer,

            {
              height:
                Platform.OS === "android"
                  ? height - StatusBar.currentHeight
                  : height,
            },
          ]}
        >
          <Modal.Body
            style={{
              backgroundColor: colors.beige,

              height:
                Platform.OS === "android"
                  ? height - StatusBar.currentHeight
                  : height,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 60,
                borderBottomWidth: 1,
                borderColor: colors.grayBorder,
              }}
            >
              <View style={styles.logoContainer}>
                <MTLogoGreen />
              </View>
              <TouchableOpacity onPress={closeHandler} style={styles.closeIcon}>
                <CloseIcon />
              </TouchableOpacity>
            </View>

            <NavigationMenu active={active} navigation={navigation} />
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </View>
  );
};

export default BackHeader;

const styles = StyleSheet.create({
  container: {
    height: 70,
    alignItems: "center",
    flexDirection: "row",
  },
  modalContainer: {
    backgroundColor: colors.white,
    maxWidth: 1000,
    maxHeight: 5000,
    borderRadius: 0,
  },
  button: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1B496515",
  },
  logoContainer: {
    width: 40,
    height: 40,
  },
  closeIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
});
