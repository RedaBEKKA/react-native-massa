import { View, useWindowDimensions } from "react-native";
import React from "react";
import styles from "./styles";
import { H6 } from "../../../../components/TextsComponents";
import { colors } from "../../../../styles/GlobalStyle";
import { ImgStatusBadge, ImgUnion } from "../../../../assets/svg/space";

const Status = () => {
  let Randonneur = [
    { isRand: true, id: 1 },
    { isRand: false, id: 2 },
  ];
  const { width } = useWindowDimensions();
  const CustHeight = width <= 790 ? 165 : 236;

  const MarginBottom = width <= 790 ? 20 : 0;
  const SMWidth = width <= 790 ? "100%" : width <= 1300 ? "49%" : "49%";
  const Mr = width >= 1300 ? 5 : 0;

  return (
    <View
      style={[
        styles.status,
        {
          marginBottom: MarginBottom,
          width: SMWidth,
          marginRight: Mr,
          height: CustHeight,
        },
      ]}
    >
      <H6 style={{ color: colors.beige }}>Mon Status</H6>

      <View style={styles.statusItem}>
        {Randonneur.map((item) => {
          return (
            <View key={item.id} style={styles.item}>
              {item.isRand ? (
                <View style={styles.itemImage}>
                  <ImgUnion />
                </View>
              ) : (
                <View style={styles.Image}>
                  <ImgStatusBadge />
                </View>
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

{
  /* <Image source={RandImage} /> */
}
// <Image source={RandImage2} style={styles.Image} />
