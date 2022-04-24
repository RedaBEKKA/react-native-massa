import {
  View,
  Animated,
  Modal,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { useDimensions } from "react-native-web-hooks";

const ModalAppointment = ({ visible, children }) => {
  const [ShowModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  const { width } = useWindowDimensions();

  const modalContainer = {
    backgroundColor: "white",
    paddingHorizontal: width <= 800 ? 10 : 20,
    paddingVertical: width <= 800 ? 10 : 20,
    borderRadius: 20,
    elevation: 20,
    position: "absolute",
    width: width <= 800 ? "92%" : "36%",
    height: width <= 800 ? 274 : 342,
  };

  return (
    <Modal transparent visible={ShowModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[
            modalContainer,
            {
              transform: [{ scale: scaleValue }],
            },
          ]}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default ModalAppointment;

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 20,
    elevation: 20,
    position: "absolute",
    alignItems:'center',
    justifyContent:'center'
  },
});
