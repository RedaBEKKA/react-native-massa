import { StyleSheet } from "react-native";
import { colors } from "../../../../../styles/GlobalStyle";

const styles = StyleSheet.create({
  DesktopBoxImage: {
    backgroundColor: "#FBF6F360",
    borderBottomRightRadius: 80,
    borderBottomLeftRadius: 80,
    height: "40%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 40,
    height: 35,
    zIndex: 2,
  },

  DestTxt: {
    width: 60,
    height: 60,
    padding: 10,
    borderRadius: 90,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: colors.white,
  },
});
export default styles;
