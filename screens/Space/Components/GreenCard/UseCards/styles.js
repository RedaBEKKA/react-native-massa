import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../../../styles/GlobalStyle";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  ChatCard: {
    position: "relative",
    height: "100%",
    borderRadius: 20,
    marginVertical: 8,
    overflow: "hidden",
  },
  MobCotching: {
    position: "relative",
    borderRadius: 20,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    alignItems: "center",
  },
  DeskLeftBox: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    width: "60%",
  },

  LeftBox: {
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    width: "60%",
  },

  DesktopBoxImage: {
    backgroundColor:colors.green2,
    opacity:0.25,
    borderBottomRightRadius: 80,
    borderTopRightRadius: 80,
    height: "100%",
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
    position:'relative'
  },
  BoxImage: {
    backgroundColor:colors.white,
    opacity:0.25,
    borderBottomRightRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "30%",
    marginRight: 15,
    position:'relative'
  },

  image: {
    width: 40,
    height: 35,
    zIndex: 2,
    position:'absolute',
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
    right: 5,
  },
  txt: {
    width: 60,
    height: 60,
    padding: 10,
    borderRadius: 90,
    backgroundColor: colors.green2,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
  },
});
export default styles;
