import {
  Dimensions,
  Pressable,
  StyleSheet,
  View,
  Platform,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { Modal, VStack } from "native-base";
import { colors } from "../../styles/GlobalStyle";
import { Txt, H5 } from "../TextsComponents";
import DimensionsHook from "../../hooks/DimensionsHook";
import { PrimaryButton } from "../Buttons";
import { ArrowBack } from "../../assets/svg/Icons";

const FirstVisitModal = ({
  isOpen,
  setIsOpen,
  navigation,
  setShowFirstVideo,
}) => {
  const { isDesktop, isMobile, isTablet } = DimensionsHook();
  const height = Dimensions.get("window").height;
  const closeHandler = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <Modal.Content
        style={[
          styles.container,
          {
            height:
              Platform.OS === "android"
                ? height - StatusBar.currentHeight
                : isMobile
                ? height
                : "auto",
            width: isMobile ? "100%" : "95%",
            borderRadius: isMobile ? 0 : 20,
          },
        ]}
      >
        {isMobile ? (
          <Pressable onPress={closeHandler} style={styles.backButton}>
            <View onPress={closeHandler} style={{ width: 24, height: 24 }}>
              <ArrowBack />
            </View>
          </Pressable>
        ) : (
          <Modal.CloseButton style={{ marginRight: isMobile ? 0 : 10 }} />
        )}
        <Modal.Body
          style={{
            backgroundColor: isMobile ? colors.beige : colors.white,
            height: isMobile ? height - 90 : "auto",
          }}
        >
          <VStack
            justifyContent="center"
            alignItems="center"
            style={{ marginVertical: !isMobile ? 30 : 0 }}
          >
            <View
              style={[
                styles.sectionContainer,
                {
                  backgroundColor: isMobile ? colors.white : colors.beige,
                  width: isDesktop ? "80%" : isTablet ? "90%" : "95%",
                  flexDirection: isMobile ? "column" : "row",
                  alignItems: isMobile ? "flex-start" : "center",
                  justifyContent: isMobile ? "flex-start" : "space-between",
                },
              ]}
            >
              <H5 style={{ paddingBottom: isMobile ? 12 : 0 }}>Préalable</H5>
              <View
                style={{
                  width: 100,

                  paddingTop: 0,
                }}
              >
                <PrimaryButton>Start</PrimaryButton>
              </View>
            </View>
            <View
              style={[
                styles.sectionContainer,
                {
                  backgroundColor: isMobile ? colors.white : colors.beige,
                  width: isDesktop ? "80%" : isTablet ? "90%" : "95%",
                  flexDirection: isMobile ? "column" : "row",

                  alignItems: isMobile ? "flex-start" : "center",
                  justifyContent: isMobile ? "flex-start" : "space-between",
                },
              ]}
            >
              <H5 style={{ paddingBottom: isMobile ? 12 : 0 }}>
                Votre premier épisode
              </H5>
              <View
                style={{
                  width: 100,

                  paddingTop: 0,
                }}
              >
                <PrimaryButton
                  onPress={() => {
                    closeHandler();
                    setShowFirstVideo(true);
                  }}
                >
                  Start
                </PrimaryButton>
              </View>
            </View>
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default FirstVisitModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    maxWidth: 1000,
    maxHeight: 5000,
  },
  sectionContainer: {
    marginTop: 40,
    padding: 16,
    borderRadius: 16,
    alignSelf: "center",
  },
  backButton: {
    height: 70,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
});
