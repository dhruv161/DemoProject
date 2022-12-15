import { StyleSheet, Dimensions} from "react-native";
import { verticalScale } from "react-native-size-matters";
import theme from "src/Utils/theme";
import fonts from "src/Utils/fonts";
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.BLACK,
  },
  footerContainer : {
    flex: 1,
    margin: verticalScale(20),
    marginTop: verticalScale(50),
  },
  title: {
    fontFamily: fonts.montserrat_Regular,
    color: theme.WHITE,
    fontWeight:'400',
    letterSpacing:0.5,
    fontSize: verticalScale(20),
    marginTop:verticalScale(15),
  },
  description:{
    fontFamily: fonts.montserrat_Regular,
    color: theme.WHITE,
    letterSpacing:0.5,
    fontSize: verticalScale(12),
    marginTop:verticalScale(15),
  },
  dateTxt:{
    fontFamily: fonts.montserrat_Regular,
    color: theme.WHITE,
    letterSpacing:0.5,
    fontSize: verticalScale(9),
    marginTop:verticalScale(15),
  },
  readmoreText:{
    fontFamily: fonts.montserrat_Regular,
    color: theme.Link,
    fontSize: verticalScale(12),
    marginTop:verticalScale(15),
    textDecorationLine:'underline'
  },
  icon:{
    alignSelf: 'flex-start', padding: verticalScale(10)
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    top:  height * 0.72,
  },
  pagination: {
    width: 40,
    height: verticalScale(2),
    marginHorizontal: 4,
  },
  image: {
    height: height * 0.65,
    width,
  },
  
});
export default styles;
