import { StyleSheet } from "react-native";
import { colors } from "../../../styles/GlobalStyle";

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.beige,
      flex: 1,
    },
    Image: {
      height: 304,
      width: 184,
      resizeMode: "contain",
      position: "absolute",
      right: 30,
      bottom: 61,
    },
    SelectTrail: {
      alignSelf: "center",
      marginTop: 20,
      zIndex: 5,
      elevation: 5,
    },
    Square: {
      marginTop: 40,
      height: 101,
      alignSelf: "center",
      flexDirection: "row",
      justifyContent: "space-around",
    },
    TextAppointment: {
      alignSelf: "center",
      overflow: "hidden",
      marginTop: 20,
      zIndex: -1,
    },
    SelectTrailRow: {
      alignSelf: "center",
      marginTop: 20,
      justifyContent: "space-between",
    },
  
    Col: {
      width: "48%",
    },
    TextArea: {
      borderRadius: 5,
      backgroundColor: colors.white,
      fontFamily: "OxygenRegular",
      color: colors.blue3,
      textAlignVertical: "top",
      borderWidth: 0.5,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderColor: colors.grayBorder,
    },
    textAreaContainer: {
      borderColor: colors.grayBorder,
      padding: 5,
      borderRadius: 5,
    },
  
    ButtonWrapper: {
      alignSelf: "center",
      marginTop: 20,
      height: 57,
      width: "100%",
      zIndex: -1,
    },
    conditions: {
      alignSelf: "center",
      marginTop: 15,
      flexDirection: "row",
      zIndex: -1,
      overflow: "hidden",
    },
  });

  export default styles