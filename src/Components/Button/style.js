import { StyleSheet } from "react-native";
import {  verticalScale } from "react-native-size-matters";
import theme from "src/Utils/theme";
import fonts from "src/Utils/fonts";

const styles = StyleSheet.create({
  Button: {
    backgroundColor: theme.BUTTON_BG,
    alignItems: "center",
    height: verticalScale(48),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  btnText: {
    color: theme.WHITE,
    fontSize: verticalScale(16),
    fontFamily: fonts.montserrat_Medium,
    textAlign: "center",
    marginRight: verticalScale(10)
  },
});
export default styles;
