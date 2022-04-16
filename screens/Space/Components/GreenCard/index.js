import { View, useWindowDimensions } from "react-native";
import React from "react";
import UseCard from "./UseCards";
import chats from "../../../../assets/Espace/Vector4.png";
import play from "../../../../assets/Espace/Vector3.png";
import relaxer from "../../../../assets/Espace/Vector2.png";
import Dormir from "../../../../assets/Espace/Vector1.png";

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
          img={chats}
          isCoaching={false}
          CustomHeight={CustomHeight}
        />
        <UseCard
          title="Jouer"
          img={play}
          isCoaching={false}
          CustomHeight={CustomHeight}
        />
      </View>

      <View style={{ flexDirection: "column", width: SMWidth }}>
        <UseCard
          title="Se relaxer"
          img={relaxer}
          isCoaching={false}
          CustomHeight={CustomHeight}
        />
        <UseCard
          title="Dormir"
          img={Dormir}
          isCoaching={false}
          CustomHeight={CustomHeight}
        />
      </View>
    </View>
  );
};

export default GrenCards;
