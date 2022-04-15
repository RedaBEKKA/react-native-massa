import { View } from "react-native-animatable";
import { ActivityIndicator } from "react-native-paper";
import { colors } from "../styles/GlobalStyle";

// size = small || large
const Spinner = ({ color = colors.blue3, size }) => {
  return (
    <ActivityIndicator animating={true} color={color} size={size || "small"} />
  );
};

export default Spinner;
