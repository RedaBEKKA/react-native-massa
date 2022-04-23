import { Text } from "react-native";
import React from "react";
import { colors } from "../styles/GlobalStyle";
import DimensionsHook from "../hooks/DimensionsHook";

export const H1 = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
}) => {
  const { isMobile, isTablet, isDesktop } = DimensionsHook();
  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      style={{
        fontSize: fontSize || isMobile ? 24 : isTablet ? 28 : 36,
        fontFamily: fontFamily || "Gotu",
        color: color || colors.blue3,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

export const H2 = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
}) => {
  const { isMobile, isTablet, isDesktop } = DimensionsHook();
  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      style={{
        fontSize: fontSize || isMobile ? 26 : 28,
        fontFamily: fontFamily || "Gotu",
        color: color || colors.blue3,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
export const H3 = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
}) => {
  const { isMobile, isTablet, isDesktop } = DimensionsHook();
  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      style={{
        fontSize: fontSize || isMobile ? 24 : 26,
        fontFamily: fontFamily || "Gotu",
        color: color || colors.blue3,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
export const H4 = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
}) => {
  const { isMobile, isTablet, isDesktop } = DimensionsHook();
  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      style={{
        fontSize: fontSize || isMobile ? 22 : 24,
        fontFamily: fontFamily || "Gotu",
        color: color || colors.blue3,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
export const H5 = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
}) => {
  const { isMobile, isTablet, isDesktop } = DimensionsHook();
  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      style={{
        fontSize: fontSize || isMobile ? 20 : 22,
        fontFamily: fontFamily || "Gotu",
        color: color || colors.blue3,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
export const H6 = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
}) => {
  const { isMobile, isTablet, isDesktop } = DimensionsHook();
  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      style={{
        fontSize: fontSize || isMobile ? 18 : 20,
        fontFamily: fontFamily || "Gotu",
        color: color || colors.blue3,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
export const H7 = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
}) => {
  const { isMobile, isTablet, isDesktop } = DimensionsHook();
  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      style={{
        fontSize: fontSize || isMobile ? 16 : 18,
        fontFamily: fontFamily || "Gotu",
        color: color || colors.blue3,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
export const Txt = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
}) => {
  const { isMobile, isTablet, isDesktop } = DimensionsHook();
  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      style={{
        fontSize: fontSize || isMobile ? 16 : 18,
        fontFamily: fontFamily || "OxygenRegular",
        color: color || colors.blue3,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

export const SmallTxt = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
}) => {
  const { isMobile, isTablet, isDesktop } = DimensionsHook();
  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      style={{
        fontSize: fontSize || isMobile ? 12 : 14,
        fontFamily: fontFamily || "OxygenRegular",
        color: color || colors.blue3,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
export const LightTxt = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
}) => {
  const { isMobile, isTablet, isDesktop } = DimensionsHook();
  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      style={{
        fontSize: fontSize || isMobile ? 14 : 17,
        fontFamily: fontFamily || "OxygenLight",
        color: color || colors.blue3,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
export const SmallLightTxt = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
}) => {
  const { isMobile, isTablet, isDesktop } = DimensionsHook();
  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      style={{
        fontSize: fontSize || isMobile ? 12 : 14,
        fontFamily: fontFamily || "OxygenLight",
        color: color || colors.blue3,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
export const SmallBoldTxt = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
}) => {
  const { isMobile, isTablet, isDesktop } = DimensionsHook();
  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      style={{
        fontSize: fontSize || isMobile ? 12 : 14,
        fontFamily: fontFamily || "OxygenBold",
        color: color || colors.blue3,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
export const BoldTxt = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
}) => {
  const { isMobile, isTablet, isDesktop } = DimensionsHook();
  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      style={{
        fontSize: fontSize || isMobile ? 14 : 17,
        fontFamily: fontFamily || "OxygenBold",
        color: color || colors.blue3,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
