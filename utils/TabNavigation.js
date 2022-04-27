import Home from "../screens/Home";
import Espace from "../screens/Space";
import Trails from "../screens/Trails";
import Workshops from "../screens/Workshops";
import Communaute from "../screens/Communaute";
import TabBarComponent from "../components/TabBarComponent";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../redux/Actions";
import React, { useEffect } from "react";
import { View } from "react-native";
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  useEffect(() => {
    dispatch(setUserInfo());
  }, []);
  if (userInfo.name) {
    return (
      <Tab.Navigator
        screenOptions={{ headerShown: false, keyboardHidesTabBar: true }}
        tabBar={(props) => <TabBarComponent {...props} />}
      >
        <Tab.Screen
          options={{ tabBarLabel: "Acceuil", title: "Acceuil" }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{ tabBarLabel: "Mon Espace", title: "Mon Espace" }}
          name="Espace"
          component={Espace}
        />
        <Tab.Screen
          options={{ tabBarLabel: "Trails", title: "Trails" }}
          name="Trails"
          component={Trails}
        />
        <Tab.Screen
          options={{ tabBarLabel: "Workshops", title: "Aterliers" }}
          name="Workshops"
          component={Workshops}
        />
        <Tab.Screen
          options={{ tabBarLabel: "Communauté", title: "Communauté" }}
          name="Communaute"
          component={Communaute}
        />
      </Tab.Navigator>
    );
  } else {
    return <View></View>;
  }
};

export default TabNavigation;
