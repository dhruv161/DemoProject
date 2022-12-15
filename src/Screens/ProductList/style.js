import { StyleSheet, Dimensions } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import theme from "src/Utils/theme";
import fonts from "src/Utils/fonts";
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.BACKGROUND,
    paddingHorizontal: verticalScale(20),
  },
  title: {
    fontFamily: fonts.montserrat_Regular,
    color: theme.BLACK,
    fontSize: verticalScale(16),
  },
  description: {
    fontFamily: fonts.montserrat_Regular,
    color: '#737171',
    fontSize: verticalScale(14),
  },
  noSearch:{
    fontFamily: fonts.montserrat_Bold,
    color: theme.BLACK,
    fontSize: verticalScale(18),
    marginTop:verticalScale(25),
    textAlign: "center",
  },
  mainCardView: {
    height: verticalScale(300),
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: theme.WHITE,
    marginVertical: verticalScale(10)
  },
  subCardView: {
    // height: 50,
    // width: 50,
    // borderRadius: 25,
    backgroundColor:theme.WHITE,
    borderColor:theme.WHITE,
    borderWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
image:{
  height: verticalScale(180), 
  width: width ,
},
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    top:  verticalScale(182), 
  },
  pagination: {
    width: 40,
    height: verticalScale(2),
    marginHorizontal: 4,
  },
  
});
export default styles;
