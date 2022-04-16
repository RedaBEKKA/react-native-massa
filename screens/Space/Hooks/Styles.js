import { Dimensions, StyleSheet } from "react-native";
import DimensionsHook from "../../../hooks/DimensionsHook";
import { colors } from "../../../styles/GlobalStyle";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    flex: 1,
  },
  status: {
    position: "relative",
    height: 236,
    width: 343,
    borderRadius: 20,
    backgroundColor: colors.red1,
  },

  desktopContent: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-evenly",
    backgroundColor:'#ccc',
    marginBottom:10
  },
  MobileContent: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  score: {
    position: "relative",
    height: 236,
    width: 343,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: colors.blue1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  greenCard: {
    position: "relative",
    height: windowWidth > 500 ? 112 : 78,
    width: windowWidth > 500 ? 258 : 343,
    borderRadius: 20,
    backgroundColor: colors.green1,
    marginBottom: 10,
  },
  coaching: {
    position: "relative",
    height: 234,
    width: 183,
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
    width: 183,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    position: "absolute",
    top: -67,
  },
  MobCotching: {
    position: "relative",
    height: 78,
    width: 343,
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
