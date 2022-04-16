import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { H7, SmallBoldTxt } from "../../../../../components/TextsComponents";
import { colors } from "../../../../../styles/GlobalStyle";
const UseBigCards = ({ img, ToCoaching }) => {
  const ChatCard = {
    backgroundColor: colors.yellow,
    borderRadius: 20,
    position: "relative",
    height: 238,
    overflow: "hidden",
  };
  const [isHovered, setHovered] = React.useState(false);
  const BacCustBtn = isHovered ? colors.beige : colors.white;
  const CustColor = isHovered ? colors.black : colors.yellow;

  return (
    <View style={ChatCard}>
      <View style={styles.DesktopBoxImage}>
        <Image source={img} style={styles.image} />
      </View>
      <H7 style={{ position: "absolute", top: "50%", alignSelf: "center" }}>
        Coaching
      </H7>
      <TouchableOpacity
        style={[styles.DestTxt, { backgroundColor: BacCustBtn }]}
        onPress={ToCoaching}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <SmallBoldTxt style={{ color: CustColor }}>Go !</SmallBoldTxt>
      </TouchableOpacity>
    </View>
  );
};

export default UseBigCards;
