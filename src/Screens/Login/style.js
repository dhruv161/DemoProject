import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import theme from "src/Utils/theme";
import fonts from "src/Utils/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.BACKGROUND,
    // alignItems: "center",
    paddingHorizontal: verticalScale(20)
    // paddingVertical:scale(70),
    // width: '100%'
  },
  textInputStyle: {
    fontFamily: fonts.montserrat_Regular,
    width: '100%',
    paddingLeft: verticalScale(15),
    backgroundColor: theme.WHITE,
    height: verticalScale(35),
    borderWidth: 1,
    borderColor: theme.BLACK,
    color: theme.BLACK,
    marginVertical: verticalScale(12),
    fontSize: verticalScale(14),
  },
  Logo: {
    height:scale(38),
    width:scale(98),
  },
  textContainer: {
    marginHorizontal:scale(10),
  },
  PwdView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontFamily: fonts.tfarrow_Medium,
    color: theme.BLACK,
    fontSize: verticalScale(40),
    marginTop:verticalScale(45),
    textAlign: "center",
  },
  DetailsContainer: {
    backgroundColor: "rgba(0,0,0,0.3)",
    marginHorizontal: scale(16),
    width: "93%",
    borderRadius: scale(15),
    marginTop:scale(20),
    paddingVertical: scale(33),
    paddingHorizontal: scale(20)
  },
  InputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  msgIcon:{ height:38
    ,width:45},
    passIcon:{ height:45
      ,width:40},
  PwdContainer: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  usernameTitle: {
    fontFamily: fonts.montserrat_Regular,
    fontSize:scale(12),
    color: theme.GRAY,
    lineHeight:scale(13),
  },
  usernameDetails: {
    fontFamily: fonts.montserrat_Regular,
    fontSize:scale(16),
    color: theme.WHITE,
    backgroundColor: 'red',
    lineHeight:scale(16),
    padding: 0,
    alignSelf: 'center'
  },
  forgetPwdText: {
    fontFamily: fonts.montserrat_Regular,
    fontSize: scale(16),
    color: theme.YELLOW,
    lineHeight: scale(16),
    padding: 0,
    textAlign: 'right',
    marginRight: scale(19),
    marginBottom: scale(25),
  },
  Line: {
    height: scale(1),
    width: "100%",
    backgroundColor: theme.WHITE,
    marginVertical: scale(10),
    marginBottom: scale(8),
    opacity: 0.1,
    alignSelf: "center",
  },
  passwordEye: {
    marginRight: scale(12),
  },
  BottomView: {
    backgroundColor: "rgba(0,0,0,0.3)",
    marginTop:scale(10),
    paddingVertical:scale(20),
    // borderRadius: scale(10),
    borderRadius:scale(10),
    width: "95%",
    paddingHorizontal: scale(25),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Container: {
    marginBottom:scale(18),
    justifyContent: 'center',
  },
});
export default styles;
