import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles";
import DimensionsHook from "../../../../hooks/DimensionsHook";
import { H6, H7, SmallBoldTxt } from "../../../../components/TextsComponents";
import CoachingImg from "../../../../assets/Coaching.png";

const Coaching = ({navigation}) => {

  const { isDesktop, isMobile, isTablet } = DimensionsHook();
  const ToCoaching = () => {
    navigation.navigate("Coaching");
  };
  return (
    <View style={isDesktop ? styles.coaching : styles.MobCotching}>
      <View style={isDesktop ? styles.DeskLeftBox : styles.LeftBox}>
        <View style={isDesktop ? styles.DesktopBoxImage : styles.BoxImage}>
          <Image source={CoachingImg} style={styles.image} />
        </View>

        <View>{isDesktop ? null : <H6>Coaching</H6>}</View>
      </View>
      {isDesktop && (
        <H7 style={{ position: "absolute", top: "50%", Left: "50%" }}>
          Coaching
        </H7>
      )}

      <TouchableOpacity
        style={isDesktop ? styles.DestTxt : styles.txt}
        onPress={ToCoaching}
      >
        <SmallBoldTxt>Go !</SmallBoldTxt>
      </TouchableOpacity>
    </View>
  );
};

export default Coaching;
