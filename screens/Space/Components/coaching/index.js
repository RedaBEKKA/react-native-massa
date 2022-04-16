import { View, useWindowDimensions } from "react-native";
import React from "react";
import CoachingImg from "../../../../assets/Coaching.png";
import UseCard from "../GreenCard/UseCards";
import UseBigCards from "../GreenCard/UseBigCards";

const Coaching = ({ navigation }) => {
  const { width } = useWindowDimensions();
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
        {!LgScreen && (
          <UseCard
            title="Coaching"
            img={CoachingImg}
            isCoaching={true}
            CustomHeight={CustomHeight}
            ToCoaching={ToCoaching}
          />
        )}
        {LgScreen && (
          <UseBigCards
            title="Coaching"
            img={CoachingImg}
            isCoaching={true}
            CustomHeight={CustomHeight}
            ToCoaching={ToCoaching}
          />
        )}
      </View>
    </>
  );
};

export default Coaching;
