import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import DimensionsHook from "../hooks/DimensionsHook";
import { colors } from "../styles/GlobalStyle";
import {
  HomeIcon,
  FocusedHomeIcon,
  EspaceIcon,
  FocusedEspaceIcon,
  TrailIcon,
  FocusedTrailIcon,
  WorkshopIcon,
  FocusedWorkshopIcon,
  CommunauteIcon,
  FocusedCommunauteIcon,
} from "../assets/svg/TabBarIcons";

const TabBarComponent = ({ state, descriptors, navigation }) => {
  const { isDesktop } = DimensionsHook();

  const renderIcon = (routeName, isFocused) => {
    if (routeName === "Home") {
      if (isFocused) {
        return <FocusedHomeIcon />;
      } else {
        return <HomeIcon />;
      }
    }
    if (routeName === "Espace") {
      if (isFocused) {
        return <FocusedEspaceIcon />;
      } else {
        return <EspaceIcon />;
      }
    }
    if (routeName === "Trails") {
      if (isFocused) {
        return <FocusedTrailIcon />;
      } else {
        return <TrailIcon />;
      }
    }
    if (routeName === "Workshops") {
      if (isFocused) {
        return <FocusedWorkshopIcon />;
      } else {
        return <WorkshopIcon />;
      }
    }
    if (routeName === "Communaute") {
      if (isFocused) {
        return <FocusedCommunauteIcon />;
      } else {
        return <CommunauteIcon />;
      }
    }
  };

  // footer for big screens
  if (isDesktop) {
    return <></>;
  }
  return (
    <View>
      <View style={[styles.container, { width: isDesktop ? "85%" : "95%" }]}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel;
          const isFocused = state.index === index;
          const name = route.name;
          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={label}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={styles.tab}
            >
              {renderIcon(name, isFocused)}
              <Text numberOfLines={1} style={styles.tabLabel}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default TabBarComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.beige,
    height: 60,
    borderTopWidth: 1,
    borderTopColor: colors.grayBorder,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  tab: {
    flex: 1,
    height: 56,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  tabLabel: {
    color: colors.blue3,
    textAlign: "center",
    fontSize: 11,
    lineHeight: 20,
    fontFamily: "OxygenLight",
  },
});
