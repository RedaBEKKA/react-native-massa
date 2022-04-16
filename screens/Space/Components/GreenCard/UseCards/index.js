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
const UseCard = ({ navigation, img, title, isCoaching, CustomHeight,ToCoaching }) => {
  const { isDesktop, isMobile, isTablet } = DimensionsHook();
  const ToNav = () => {
    navigation.navigate({ title });
  };

  const { width } = useWindowDimensions();
  const SMWidth = width <= 790 ? "100%" : width <= 1300 ? "100%" : "100%";
  const BacCust = isCoaching ? colors.yellow : colors.green1;
  const BacCustBtn = isCoaching ? colors.white : colors.green2;
  return (
    <View
      style={
        isDesktop
          ? [
              styles.ChatCard,
              {
                width: SMWidth,
                backgroundColor: BacCust,
                height: CustomHeight,
              },
            ]
          : [
              styles.MobCotching,
              { backgroundColor: BacCust, height: CustomHeight },
            ]
      }
    >
      <View style={isDesktop ? styles.DeskLeftBox : styles.LeftBox}>
        <View style={isDesktop ? styles.DesktopBoxImage : styles.BoxImage}>
          <Image source={img} style={styles.image} />
        </View>

        <View>
          {isDesktop ? (
            <H7 style={{ marginLeft: 15 }}>{title}</H7>
          ) : (
            <H6>{title}</H6>
          )}
        </View>
      </View>

      <TouchableOpacity
        style={
          isDesktop
            ? [styles.DestTxt, { backgroundColor: BacCustBtn }]
            : [styles.txt, { backgroundColor: BacCustBtn }]
        }
        onPress={ToCoaching}
      >
        <SmallBoldTxt>Go !</SmallBoldTxt>
      </TouchableOpacity>
    </View>
  );
};

export default UseCard;
