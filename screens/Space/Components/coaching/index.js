import {
  View,
  Text,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import styles from "./styles";
import DimensionsHook from "../../../../hooks/DimensionsHook";
import { H6, H7, SmallBoldTxt } from "../../../../components/TextsComponents";
import CoachingImg from "../../../../assets/Coaching.png";
import UseCard from "../GreenCard/UseCards";
import UseBigCards from "../GreenCard/UseBigCards";

const Coaching = ({ navigation }) => {
  const { width } = useWindowDimensions();

  const { isDesktop, isMobile, isTablet } = DimensionsHook();
  const ToCoaching = () => {
    navigation.navigate("Coaching");
  };

  const widthCust = width <= 790 ? "100%" : width <= 1300 ? "49%" : "18%";
  const CUstumPosition =
    width <= 790 ? "center" : width <= 1300 ? "flex-start" : "center";
  const CustomHeight = width <= 790 ? 75 : width <= 1300 ? 108 : 238;
  const CustomHLeft = width <= 790 ? 0 : width <= 1300 ? 5 : 0;

  const BoxCoaching = {
    width: widthCust,
    alignSelf: CUstumPosition,
    marginLeft: CustomHLeft,
  };

  const LgScreen = width <= 1300 ? false : true;

  return (
    <>
      <View style={BoxCoaching}>
{      !LgScreen && <UseCard title="Coaching" img={CoachingImg} isCoaching={true} CustomHeight={CustomHeight} ToCoaching={ToCoaching} />}
{      LgScreen && <UseBigCards title="Coaching" img={CoachingImg} isCoaching={true} CustomHeight={CustomHeight} ToCoaching={ToCoaching} />}


      </View>
    </>
  );
};

export default Coaching;
{
  /* <View
style={
  isDesktop
    ? [
        styles.coaching,
        {
          width: widthCust,
          alignSelf: CUstumPosition,
          height: CustomHeight,
          marginLeft: CustomHLeft,

        },
      ]
    : [
        styles.MobCotching,
        {
          width: widthCust,
          alignSelf: CUstumPosition,
          marginLeft: CustomHLeft,
          height: CustomHeight,
        },
      ]
}
>
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
</View> */
}
