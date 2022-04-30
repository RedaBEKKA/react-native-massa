import { View, Image, useWindowDimensions } from "react-native";
import React from "react";
import styles from "./styles";
import { H6, SmallBoldTxt } from "../../../../components/TextsComponents";
import { colors } from "../../../../styles/GlobalStyle";

import { BackgroundSource } from "../../../../assets/svg/space";
import { useSelector } from "react-redux";
import ProgressBare from "./ProgressBar";

const Score = () => {
  const { width } = useWindowDimensions();
  const SMWidth = width <= 790 ? "100%" : width <= 1300 ? "49%" : "49%";
  const userInfo = useSelector((state) => state.userInfo);


  const StepFromBac = userInfo.total_points*100/10000
  return (
    <View
      style={[
        styles.score,
        {
          width: SMWidth,
          marginBottom: width <= 790 ? 20 : 0,
          height: width <= 790 ? 165 : 236,
        },
      ]}
    >
      <H6 style={{ color: colors.beige, alignSelf: "center", marginTop: 30 }}>
        Score
      </H6>
      <ProgressBare step={StepFromBac}  steps={10} height={20}/>
    </View>
  );
};

export default Score;


   