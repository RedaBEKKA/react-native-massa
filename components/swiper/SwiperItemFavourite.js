import {
    StyleSheet,
    View,
    Image,
    Pressable,
    Animated,
    Easing,
    useWindowDimensions,
  } from "react-native";
  import React, { useEffect, useRef, useState } from "react";
  import { BoldTxt, H6, Txt } from "../TextsComponents";
  import { colors } from "../../styles/GlobalStyle";
  import DimensionsHook from "../../hooks/DimensionsHook";
  import { MTLogoWhite } from "../../assets/svg/Logo";
  import { LinearGradient } from "expo-linear-gradient";
  import { useDisclose } from "native-base";
  import RolloverSmall from "../rollover/RolloverSmall";
  import { useSelector } from "react-redux";
  
  const SwiperItemFavourite = ({
    item,
    type,
    navigation,
    showStateBar,
    SwiperItem,
  }) => {
    const { isDesktop, isMobile } = DimensionsHook();
    const { isOpen, onOpen, onClose } = useDisclose();
    // generate a random progress
    const pourcentage = Math.floor(Math.random() * (90 - 40 + 1) + 40) / 100;
    const progress = pourcentage * 240;
    const barWidth = useRef(new Animated.Value(0)).current;
  
    const navigationHandler = () => {
      if (isMobile) {
        onOpen();
      } else {
        if (type === "Trail") {
          navigation.navigate("Trail", { id: item[0].ressourceCode });
        }else if( type === "Favourite"){
          navigation.navigate("Trail", { id: item[0].ressourceCode });
        }
        else {
          navigation.navigate("Workshop");
        }
      }
    };
  
    useEffect(() => {
      // console.log(item,'  item')
      Animated.timing(barWidth, {
        toValue: progress,
        duration: 1000,
        delay: 300,
  
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    }, []);
  
    // fix Width
    const { width } = useWindowDimensions();
  
  
    return (
      <View
        style={{
          width: width >= 1300 ? (SwiperItem ? "49%" : 369) : 270,
          alignItems: "center",
          marginHorizontal: 5,
        }}
      >
        <Pressable
          onPress={navigationHandler}
          style={[styles.container, { width: "99%" }]}
        >
          <Image source={{ uri: item[0].poster_link }} style={styles.image} />
         
          <LinearGradient
            colors={["#1B496500", "#1B496566"]}
            style={styles.image}
          />
  
          <View style={styles.row}>
            <View style={styles.logoContainer}>
              <MTLogoWhite />
            </View>
            {item[0].new ? (
              <View style={styles.newButton}>
                <Txt fontSize={13}>Nouveau</Txt>
              </View>
            ) : (
              <></>
            )}
          </View>
          <View style={styles.textsContainer}>
            <BoldTxt color={colors.white}>{type}</BoldTxt>
            {/* <H6 color={colors.white}>{item.ressourceTitle}</H6> */}
            {/** progress bar */}
            {showStateBar && !SwiperItem && (
              <View
                style={{
                  width: 240,
                  alignSelf: "center",
                  height: 3,
                  borderRadius: 20,
                  overflow: "hidden",
                  justifyContent: "center",
                  backgroundColor: colors.grayBorder,
                }}
              >
                <Animated.View
                  style={{
                    height: 3,
                    backgroundColor: colors.green2,
  
                    width: barWidth,
                  }}
                ></Animated.View>
              </View>
            )}
          </View>
  
          {isMobile && isOpen && (
            <RolloverSmall
              type={type}
              item={item[0]}
              navigation={navigation}
              isOpen={isOpen}
              onClose={onClose}
            />
          )}
        </Pressable>
        {/** progress bar for trails */}
  
        {showStateBar && SwiperItem && (
          <View
            style={{
              width: 240,
              alignSelf: "center",
              height: 3,
              borderRadius: 20,
              overflow: "hidden",
              justifyContent: "center",
              backgroundColor: colors.grayBorder,
              position: "absolute",
              bottom: 10,
            }}
          >
            <Animated.View
              style={{
                height: 3,
                backgroundColor: colors.green2,
  
                width: barWidth,
              }}
            ></Animated.View>
          </View>
        )}
      </View>
    );
  };
  
  export default SwiperItemFavourite;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.grayBackground,
      height: 240,
      borderRadius: 20,
      marginRight: 15,
      marginBottom: 20,
      overflow: "hidden",
    },
    logoContainer: {
      width: 30,
      height: 30,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 12,
    },
    newButton: {
      backgroundColor: colors.white,
      paddingHorizontal: 8,
      borderRadius: 100,
    },
    image: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
      position: "absolute",
    },
    textsContainer: {
      alignItems: "center",
      width: "100%",
      position: "absolute",
      bottom: 20,
    },
  });
  