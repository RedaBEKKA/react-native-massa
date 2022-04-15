import * as Font from "expo-font";

const UseFonts = async () => {
  await Font.loadAsync({
    Gotu: require("../fonts/Gotu.ttf"),
    OxygenLight: require("../fonts/Oxygen-Light.ttf"),
    OxygenRegular: require("../fonts/Oxygen-Regular.ttf"),
    OxygenBold: require("../fonts/Oxygen-Bold.ttf"),
  }).catch((err) => console.log(err));
};

export default UseFonts;
