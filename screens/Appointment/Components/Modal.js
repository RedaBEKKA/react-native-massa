import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { useDimensions } from "react-native-web-hooks";
import { CloseIcon } from "../../../assets/svg/Appointment";
import { PrimaryButton } from "../../../components/Buttons";
import ModalAppointment from "../../../components/modals/AppointmentModals/ModalAppointment";
import { H5, Txt } from "../../../components/TextsComponents";

const AppointmentModal = ({ CloseModal, visible, ToHome }) => {
  const { width } = useWindowDimensions();
  const MarginTop = width <= 800 ? 20 : 30;
  const MarginTop1 = width <= 800 ? 10 : 30;

  return (
    <ModalAppointment transparent visible={visible}>
      <View style={styles.header}>
        <TouchableOpacity onPress={CloseModal}>
          <View style={{ height: 24, width: 24 }}>
            <CloseIcon />
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.BoxTitle, { marginTop: MarginTop1 }]}>
        <H5 style={{ width: "70%", textAlign: "center" }}>
          Merci de votre confiance
        </H5>
      </View>
      <View style={styles.BoxTitle}>
        <Txt style={{ textAlign: "center" }}>
          Un expert vous recontactera dans un délai maximum de 5 jours.
        </Txt>
      </View>
      <View style={[styles.ButtonBox, { marginTop: MarginTop }]}>
        <PrimaryButton
          onPress={() => {
            CloseModal();
            ToHome();
          }}
        >
          Revenir à l’accueil
        </PrimaryButton>
      </View>
    </ModalAppointment>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    alignItems: "flex-end",
    marginTop:15,
    marginRight:25
  },
  BoxTitle: {
    alignSelf: "center",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  ButtonBox: {
    alignSelf: "center",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppointmentModal;
