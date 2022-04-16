import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React from "react";
import styles from "./styles";
import DimensionsHook from "../../../../../hooks/DimensionsHook";
import {
  H6,
  H7,
  SmallBoldTxt,
} from "../../../../../components/TextsComponents";
import { colors } from "../../../../../styles/GlobalStyle";
const UseBigCards = ({ navigation, img, title, isCoaching, ToCoaching }) => {
  const ChatCard = {
    backgroundColor: colors.yellow,
    borderRadius: 20,
    position: "relative",
    height:238,
    overflow:'hidden'
  };

  return (
    <View style={ChatCard}>
      <View style={styles.DesktopBoxImage}>
        <Image source={img} style={styles.image} />
      </View>
      <H7 style={{ position: "absolute", top: "50%", alignSelf: "center" }}>
        Coaching
      </H7>
      <TouchableOpacity style={styles.DestTxt} onPress={ToCoaching}>
        <SmallBoldTxt>Go !</SmallBoldTxt>
      </TouchableOpacity>
    </View>
  );
};

export default UseBigCards;
