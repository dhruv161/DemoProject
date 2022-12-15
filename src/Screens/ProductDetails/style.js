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
  title: {
    fontFamily: fonts.montserrat_Regular,
    color: theme.WHITE,
    fontSize: verticalScale(14),
    marginTop:verticalScale(15),
  },
  description:{
    fontFamily: fonts.montserrat_Regular,
    color: theme.WHITE,
    fontSize: verticalScale(12),
    marginTop:verticalScale(15),
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    top:  height * 0.72,
    // bottom: height * 0.24,
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
