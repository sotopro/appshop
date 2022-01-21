import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height / 4,
    borderRadius: 6,
    margin: 15,
  },
  containerTouchable: {
      flex: 1,
      borderRadius: 6,
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 1 },
      shadowRadius: 3,
      elevation: 3,
      justifyContent: "center",
      alignItems: "center",
      padding: 8
  },
  name: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
    },
    details: {
      fontFamily: 'OpenSans-Regular',
      fontSize: 18,
  }
  });


  export default styles;