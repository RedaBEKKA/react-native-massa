import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../../styles/GlobalStyle";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  coaching: {
    position: "relative",
    height: 238,
    borderRadius: 20,
    backgroundColor: colors.yellow,
    marginVertical: 5,
    alignItems: "center",
  },
  BoxImage: {
    backgroundColor: "#FBF6F360",
    borderBottomRightRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "30%",
    marginRight: 15,
  },
  DesktopBoxImage: {
    backgroundColor: "#FBF6F360",
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    position: "absolute",
    top: -67,
  },
  MobCotching: {
    position: "relative",
    height: 78,
    borderRadius: 20,
    backgroundColor: colors.yellow,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    alignItems: "center",
  },
  LeftBox: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    width: "60%",
  },
  DeskLeftBox: {
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: 40,
    height: 40,
    zIndex: 2,
    marginTop: windowWidth > 500 ? 50 : 0,
  },
  txt: {
    width: 60,
    height: 60,
    padding: 10,
    borderRadius: 90,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
  },
  DestTxt: {
    width: 60,
    height: 60,
    padding: 10,
    borderRadius: 90,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
    position: "absolute",
    bottom: 20,
  },
});
export default styles;
