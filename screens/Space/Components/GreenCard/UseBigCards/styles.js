import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../../../styles/GlobalStyle";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  ChatCard: {
    position: "relative",
    height: '100%',
    borderRadius: 20,
    // backgroundColor: colors.green1,
    marginVertical: 8,
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
    borderBottomRightRadius: 80,
    borderBottomLeftRadius:80,
    height: "40%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  MobCotching: {
    position: "relative",
    // height: '100%',
    borderRadius: 20,
    // backgroundColor: colors.green1,
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
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    width: "60%",
  },
  image: {
    width: 40,
    height: 35,
    zIndex: 2,
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
    alignSelf:'center',
    backgroundColor:colors.white
  },
});
export default styles;
