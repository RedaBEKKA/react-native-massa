import { View, Text, Image } from "react-native";
import React from "react";
import DimensionsHook from "../../../../hooks/DimensionsHook";
import styles from "./styles";
import { H6 } from "../../../../components/TextsComponents";
import { colors } from "../../../../styles/GlobalStyle";
import RandImage from "../../../../assets/Espace/Emoji.png";
import RandImage2 from "../../../../assets/Espace/Union.png";

const Status = () => {
  const { isDesktop, isMobile, isTablet } = DimensionsHook();
  let Randonneur = [
    { isRand: true, id: 1 },
    { isRand: false, id: 2 },
  ];
  const Margin = isDesktop ? 15 : 0;
  const MarginTop = !isDesktop ? 15 : 0;

  return (
    <View
      style={[
        styles.status,
        { marginRight: Margin, marginVertical: MarginTop },
      ]}
    >
      <H6 style={{ color: colors.beige }}>Mon Status</H6>

      <View style={styles.statusItem}>
        {Randonneur.map((item) => {
          return (
            <View key={item.id} style={styles.item}>
              {item.isRand ? (
                <Image source={RandImage} style={styles.itemImage} />
              ) : (
                <Image source={RandImage2} style={styles.Image} />
              )}
            </View>
          );
        })}
      </View>

      <H6 style={{ color: colors.beige }}>Randonneur</H6>
    </View>
  );
};

export default Status;
