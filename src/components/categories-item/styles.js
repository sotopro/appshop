import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: height / 4,
      borderRadius: 6,
      margin: 15,
      justifyContent: "center",
    },
    containerTouchable: {
        flex: 1,
        borderRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        justifyContent: "center",
        alignItems: "center",
        padding: 8
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 18,
    }
  });


  export default styles;