import { useWindowDimensions } from "react-native";

const DimensionsHook = () => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  return {
    width: windowWidth,
    height: windowHeight,
    isMobile: windowWidth <= 500 ? true : false,
    isTablet: windowWidth > 500 && windowWidth <= 800 ? true : false,
    isDesktop: windowWidth > 800  ? true : false,
    isBigScreen: windowWidth > 1200 ? true : false,
  };
};

export default DimensionsHook;
