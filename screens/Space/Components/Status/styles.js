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
  },
  itemImage: {
    width: 36,
    height: 38,
  },
  Image: {
    width: 87,
    height: 38,

  },
});
export default styles;
