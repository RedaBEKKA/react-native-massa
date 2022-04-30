import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../../styles/GlobalStyle";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  status: {
    position: "relative",
    height: 236,
    width: 343,
    borderRadius: 20,
    backgroundColor: colors.red1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  statusItem: {
    flexDirection: "row",
  },
  item: {
    marginHorizontal: 10,
    flexDirection: "row",

  },
  itemImage: {
    width: 36,
    height: 38,
    marginRight:5

  },
  Image: {
    width: 136,
    height: 38,

  },
});
export default styles;
