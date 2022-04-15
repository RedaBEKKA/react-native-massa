import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import ChatCard from "./UseCards";
import DimensionsHook from "../../../../hooks/DimensionsHook";
import UseCard from "./UseCards";
import chats from "../../../../assets/Espace/Vector4.png";
import play from "../../../../assets/Espace/Vector3.png";
import relaxer from "../../../../assets/Espace/Vector2.png";
import Dormir from "../../../../assets/Espace/Vector1.png";

const GrenCards = () => {
  const { isDesktop, isMobile, isTablet } = DimensionsHook();

  return (
    <>
      <View style={{ flexDirection: "column", marginHorizontal: 15 }}>
      <UseCard title="Parler" img={chats} />
      <UseCard title="Jouer" img={play} />
      </View>
      <View style={isDesktop && styles.secondCard}>
      <UseCard title="Se relaxer" img={relaxer} />
      <UseCard title="Dormir" img={Dormir} />

      </View>
    </>
  );
};

export default GrenCards;
