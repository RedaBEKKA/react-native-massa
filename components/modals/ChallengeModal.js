import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Modal, VStack } from "native-base";
import { colors } from "../../styles/GlobalStyle";
import { H2, Txt, H3 } from "../TextsComponents";
import DimensionsHook from "../../hooks/DimensionsHook";
import { PrimaryButton, SecondaryButton } from "../Buttons";
import mascotte from "../../assets/mascotte.png";
import { EmojiHappy, EmojiLove, EmojiSad } from "../../assets/svg/Emojis";
import { Surface } from "react-native-paper";

const ChallengeModal = ({ isOpen, setIsOpen, navigation }) => {
  const { isDesktop, isMobile } = DimensionsHook();
  const [challengeCompleted, setChallengeCompleted] = useState("");
  const [selectedFeedback, setSelectedFeedback] = useState({ id: 0, name: "" });
  const feedbackOptions = [
    { id: 1, name: "Pas Facile" },
    { id: 2, name: "Facile" },
    { id: 3, name: "Très facile" },
  ];

  const closeHandler = () => {
    setIsOpen(false);
    setChallengeCompleted("");
    setSelectedFeedback({ id: 0, name: "" });
  };

  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <Modal.Content style={styles.container}>
        <Modal.CloseButton  style={{ marginRight: isMobile ? 0 : 10 }} />
        <Modal.Body
          style={{
            marginTop: 20,
          }}
        >
          <VStack justifyContent="center" alignItems="center">
            <View style={{ marginTop: isMobile ? 15 : 0 }}>
              <H2
                style={{
                  textAlign: "center",
                  lineHeight: 30,
                }}
              >
                Avez-vous réalisé le défi ?
              </H2>
            </View>
            <View style={styles.buttonsContainer}>
              <View style={{ width: 130 }}>
                <TouchableOpacity
                  onPress={() => setChallengeCompleted(false)}
                  style={[
                    styles.button,
                    {
                      backgroundColor:
                        challengeCompleted === false
                          ? colors.green2
                          : "transparent",
                      borderColor:
                        challengeCompleted === false
                          ? "transparent"
                          : colors.grayBorder,
                    },
                  ]}
                >
                  <Txt>Non</Txt>
                </TouchableOpacity>
              </View>
              <View style={{ width: 130 }}>
                <TouchableOpacity
                  onPress={() => setChallengeCompleted(true)}
                  style={[
                    styles.button,
                    {
                      backgroundColor:
                        challengeCompleted === true
                          ? colors.green2
                          : "transparent",
                      borderColor:
                        challengeCompleted === true
                          ? "transparent"
                          : colors.grayBorder,
                    },
                  ]}
                >
                  <Txt>Oui</Txt>
                </TouchableOpacity>
              </View>
            </View>

            {/** check if user select yes || no  */}
            {challengeCompleted === "" ? (
              <></>
            ) : challengeCompleted === true ? (
              <VStack
                justifyContent="center"
                alignItems="center"
                style={{
                  width: isDesktop ? 600 : "100%",
                  marginTop: 30,
                  marginBottom: isDesktop ? 70 : 0,
                }}
              >
                <H2 style={{ textAlign: "center", lineHeight: 30 }}>
                  Comment avez-vous perçu l’exercice ?
                </H2>
                {/** feedback  */}
                <View style={styles.rowButtons}>
                  {feedbackOptions.map((option) => {
                    return (
                      <Surface
                        style={[
                          styles.feedbackButton,
                          {
                            borderColor:
                              selectedFeedback.id === option.id
                                ? colors.green2
                                : colors.grayBorder,
                          },
                        ]}
                        key={option.id}
                      >
                        <TouchableOpacity
                          onPress={() => {
                            setSelectedFeedback(option);
                          }}
                          style={styles.feedbutton}
                        >
                          <View style={{ width: 40, height: 40 }}>
                            {option.id === 1 ? (
                              <EmojiSad />
                            ) : option.id === 2 ? (
                              <EmojiHappy />
                            ) : (
                              <EmojiLove />
                            )}
                          </View>
                          <Txt style={{ marginTop: 20 }}>{option.name}</Txt>
                        </TouchableOpacity>
                      </Surface>
                    );
                  })}
                </View>
                <View style={{ width: 200, marginBottom: 30, marginTop: 20 }}>
                  <PrimaryButton onPress={closeHandler}>Valider</PrimaryButton>
                </View>
              </VStack>
            ) : (
              <VStack
                justifyContent="center"
                alignItems="center"
                style={{ width: isDesktop ? 600 : "100%", marginTop: 30 }}
              >
                <Txt style={{ textAlign: "center", marginBottom: 20 }}>
                  Ne vous inquiétez pas, c’est tout à fait normal. Parfois, le
                  temps nous manque, parfois, ce n’est pas le bon moment,
                  parfois, on l’a fait de façon inconsciente sans s’en rendre
                  compte.
                </Txt>
                <Txt style={{ textAlign: "center", marginBottom: 20 }}>
                  Vous pouvez suspendre votre progression jusqu’à demain et vous
                  donner encore un jour pour faire ce défi. Dans ce cas, suivez
                  plutôt un des ateliers recommandés dans le trail.
                </Txt>
                <Txt style={{ textAlign: "center", marginBottom: 20 }}>
                  Si vous êtes impatients de suivre le prochain épisode, prenez
                  une profonde respiration, puis pendant une minute de silence,
                  centrez votre attention sur vos pieds, ce que vous ressentez
                  dans les pieds. Quand la minute est passée, vous savez ce qui
                  est bon pour vous. Attendre demain ou continuer ?
                </Txt>
                <H3 style={{ textAlign: "center", marginBottom: 20 }}>
                  Faites-vous confiance.
                </H3>
                <View style={[styles.buttonsContainer, { width: 320 }]}>
                  <View style={{ width: 150 }}>
                    <SecondaryButton
                      onPress={() => navigation.navigate("Home")}
                    >
                      Retour
                    </SecondaryButton>
                  </View>
                  <View style={{ width: 150 }}>
                    <PrimaryButton>Continuer</PrimaryButton>
                  </View>
                </View>
              </VStack>
            )}
          </VStack>
          {isDesktop && (
            <Image
              source={mascotte}
              style={{
                width: challengeCompleted === "" ? 100 : 120,
                height: challengeCompleted === "" ? 162 : 200,
                position: "absolute",
                bottom: 0,
                right: challengeCompleted === "" ? 40 : 20,
              }}
            />
          )}
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default ChallengeModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: "95%",

    maxWidth: 1000,
    maxHeight: 5000,
  },
  button: {
    height: 57,
    width: "100%",
    borderRadius: 5000,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 280,
    marginVertical: 20,
  },
  rowButtons: {
    width: "100%",
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  feedbackButton: {
    width: "30%",

    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    elevation: 3,
    borderWidth: 2,
  },
  feedbutton: {
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
