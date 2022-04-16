import { View, Text, Image, useWindowDimensions } from "react-native";
import React from "react";
import DimensionsHook from "../../../../hooks/DimensionsHook";
import styles from "./styles";
import {
  BoldTxt,
  H6,
  SmallBoldTxt,
} from "../../../../components/TextsComponents";
import { colors } from "../../../../styles/GlobalStyle";
import ViewImage from "../../../../assets/Espace/Group41.png";
const Score = () => {
  const { width } = useWindowDimensions();
  const SMWidth = width <= 790  ?  '100%' :  width <= 1300 ? '49%' : '49%' 
const MDMargin  = width <= 790  ?  0 :  width <= 1300 ? 5 : 0
  return (
    <View style={[styles.score,{width:SMWidth,}]}>
      <H6 style={{ color: colors.beige, alignSelf: "center" }}>
        Score
      </H6>
      <View style={styles.Line}>
        <View style={styles.Line2}>
          <View style={styles.Points}></View>
          <View style={[styles.Points, { left: 95 }]}></View>
          <SmallBoldTxt style={{ position: "absolute", top: 30, left: 5 }}>
            1 000pts
          </SmallBoldTxt>
          <View style={[styles.Points, { left: 100 * 2 }]}></View>
          <SmallBoldTxt style={{ position: "absolute", top: 30, left: 90 }}>
            2000pts
          </SmallBoldTxt>
          <View style={{ position: "relative" }}>
            <Image
              source={ViewImage}
              style={{
                position: "absolute",
                top: 50,
                left: 20,
                width: 190,
                height: 36,
              }}
            />

            <SmallBoldTxt
              style={{
                position: "absolute",
                top: 65,
                left: 30,
                width: 170,
              }}
            >
              Votre niveau ( 2 006pts )
            </SmallBoldTxt>
          </View>

          <View style={[styles.Points, { left: 95 * 3 }]}></View>
          <SmallBoldTxt style={{ position: "absolute", top: 30, left: 190 }}>
            3000pts
          </SmallBoldTxt>
          <SmallBoldTxt style={{ position: "absolute", top: 30, left: 280 }}>
            4000pts
          </SmallBoldTxt>
        </View>
      </View>
      <View style={styles.LineSmall}></View>
      <View style={[styles.LineSmall, { right: 11 }]}></View>
      <View style={[styles.LineSmall, { right: 3 }]}></View>
    </View>
  );
};

export default Score;
