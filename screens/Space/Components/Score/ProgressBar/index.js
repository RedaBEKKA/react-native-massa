import { View, Text, Animated, TurboModuleRegistry, useWindowDimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { colors } from "../../../../../styles/GlobalStyle";
import styles from "../styles";
import { useSelector } from "react-redux";
import { SmallBoldTxt } from "../../../../../components/TextsComponents";
import { BackgroundSource } from "../../../../../assets/svg/space";

const ProgressBare = ({ steps, step, height }) => {
  const [widthApp, setWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const Reactive = useRef(new Animated.Value(-1000)).current;
  const userInfo = useSelector((state) => state.userInfo);
  const { width } = useWindowDimensions();

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: Reactive,
      duration: 900,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    Reactive.setValue(-widthApp + (widthApp * step) / steps);
  }, [step, widthApp]);

  return (
    <>
      <View
        onLayout={(e) => {
          const newWidth = e.nativeEvent.layout.width;
          setWidth(newWidth);
        }}
        style={{
          backgroundColor: colors.beige,
          height: height,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          position: "absolute",
          top: "50%",
          width:"91%"
        
        }}
      >
          <View style={[styles.Points, { left: `${1}%` }]}></View>
          <SmallBoldTxt style={{ position: "absolute", top: 25, left: `${1}%`}}>
            0 pts
          </SmallBoldTxt> 
          <View style={[styles.Points, { left: `${25}%` }]}></View>
          <SmallBoldTxt style={{ position: "absolute", top: 25, left: `${25}%`}}>
            200 pts
          </SmallBoldTxt> 
          <View style={[styles.Points, { left: `${75}%` }]}></View>
          <SmallBoldTxt style={{ position: "absolute", top: 25, left: `${75}%`}}>
            800 pts
          </SmallBoldTxt> 
          <View style={{ position: "relative" }}>
            <View
              style={{
                position: "absolute",
                top: width <= 790 ? 32 : 55,
                left: 60,
                width: 190,
                height: 30,
              }}
            >
              <BackgroundSource />
            </View>
            <SmallBoldTxt
              style={{
                position: "absolute",
                top: width <= 790 ? 42 : 65,
                left: 80,
                width: 170,
              }}
            >
              Votre niveau ( {userInfo.total_points} pts )
            </SmallBoldTxt>
       
          </View> 
    
        <Animated.View
          style={{
            backgroundColor: colors.blue3,
            height: 20,
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            borderBottomRightRadius: 10,
            borderTopRightRadius: 10,
            transform: [
            {
              translateX: animatedValue,
            },
          ],
          }}
        />
      </View>
      <View style={styles.LineSmall}></View>
      <View style={[styles.LineSmall, { right: 11 }]}></View>
      <View style={[styles.LineSmall, { right: 3 }]}></View>
    </>
  );
};

export default ProgressBare;
