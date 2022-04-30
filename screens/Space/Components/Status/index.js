import { View, useWindowDimensions } from "react-native";
import React from "react";
import styles from "./styles";
import { H6 } from "../../../../components/TextsComponents";
import { colors } from "../../../../styles/GlobalStyle";
import { ImgStatusBadge, ImgUnion, RandonneurGroupSvg } from "../../../../assets/svg/space";
import { useSelector } from "react-redux";

const Status = () => {

  const { width } = useWindowDimensions();
  const CustHeight = width <= 790 ? 165 : 236;

  const MarginBottom = width <= 790 ? 20 : 0;
  const SMWidth = width <= 790 ? "100%" : width <= 1300 ? "49%" : "49%";
  const Mr = width >= 1300 ? 5 : 0;
  const userInfo = useSelector((state) => state.userInfo);

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
        <View style={styles.item}>
          {userInfo.rank === "Randonneur" && (
            <>
              <View style={styles.Image}>
                <RandonneurGroupSvg />
              </View>
            </>
          )}
          {userInfo.rank === "Explorateur" && (
            <>
              <View style={styles.itemImage}>
                <ImgUnion />
              </View>
              <View style={styles.itemImage}>
                <ImgUnion />
              </View>
            </>
          )}
          {userInfo.rank === "Sherpa" && (
            <>
              <View style={styles.itemImage}>
                <ImgUnion />
              </View>
              <View style={styles.itemImage}>
                <ImgUnion />
              </View>
              <View style={styles.itemImage}>
                <ImgUnion />
              </View>
            </>
          )}
        </View>
      </View>

      <H6 style={{ color: colors.beige }}>{userInfo?.rank}</H6>
    </View>
  );
};

export default Status;

{
  /* <Image source={RandImage} /> */
}
// <Image source={RandImage2} style={styles.Image} />
