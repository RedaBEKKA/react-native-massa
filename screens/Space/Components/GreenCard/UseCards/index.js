import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import DimensionsHook from "../../../../../hooks/DimensionsHook";
import {
  H6,
  H7,
  SmallBoldTxt,
} from "../../../../../components/TextsComponents";
const UseCard = ({ navigation,img,title }) => {
  const { isDesktop, isMobile, isTablet } = DimensionsHook();
  const ToNav = () => {
    navigation.navigate({title});
  };
  return (
    <View style={isDesktop ? styles.ChatCard : styles.MobCotching}>
      <View style={isDesktop ? styles.DeskLeftBox : styles.LeftBox}>
        <View style={isDesktop ? styles.DesktopBoxImage : styles.BoxImage}>
          <Image source={img} style={styles.image} />
        </View>

        <View>{isDesktop ? <H7 style={{marginLeft:15}}>{title}</H7> : <H6>{title}</H6>}</View>
      </View>

      <TouchableOpacity
        style={isDesktop ? styles.DestTxt : styles.txt}
        onPress={()=>{}}
      >
        <SmallBoldTxt>Go !</SmallBoldTxt>
      </TouchableOpacity>
    </View>
  );
};

export default UseCard;
