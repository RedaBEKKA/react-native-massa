import { View, useWindowDimensions } from "react-native";
import React from "react";
import UseCard from "./UseCards";

import { ImgDormir } from "../../../../assets/svg/space";
import { ImgJouer } from "../../../../assets/svg/space";
import { ImgParler } from "../../../../assets/svg/space";
import { ImgSeRelaxer } from "../../../../assets/svg/space";


const GrenCards = () => {
  const { width } = useWindowDimensions();
  const CustomHeight = width <= 790 ? 74 : width <= 1300 ? 108 : 108;
  const SMWidth = width <= 790 ? "100%" : width <= 1300 ? "49%" : "49%";
  const Mr = width >= 1300 ? 10 : 0;
  const BoxB1A = {
    flexDirection: width <= 790 ? "column" : "row",
    width: width <= 790 ? "100%" : width <= 1300 ? "100%" : "80%",
    justifyContent: "space-evenly",
    alignSelf: "center",
    alignItems: "center",
    marginLeft:Mr
    
  };


  return (
    <View style={BoxB1A}>
      <View
        style={{ flexDirection: "column", width: SMWidth, marginRight: Mr }}
      >

        <UseCard
          title="Parler"
          Img={ImgParler}
          isCoaching={false}
          CustomHeight={CustomHeight}
        />
        <UseCard
          title="Jouer"
          Img={ImgJouer}
          isCoaching={false}
          CustomHeight={CustomHeight}
        />
      </View>

      <View style={{ flexDirection: "column", width: SMWidth }}>
        <UseCard
          title="Se relaxer"
          Img={ImgSeRelaxer}
          isCoaching={false}
          CustomHeight={CustomHeight}
        />
        <UseCard
          title="Dormir"
          Img={ImgDormir}
          isCoaching={false}
          CustomHeight={CustomHeight}
        />
      </View>
    </View>
  );
};

export default GrenCards;
