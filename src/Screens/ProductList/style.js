import {StyleSheet, Dimensions} from 'react-native';
import {verticalScale} from 'react-native-size-matters';
import theme from 'src/Utils/theme';
import fonts from 'src/Utils/fonts';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.BACKGROUND,
    paddingHorizontal: verticalScale(20),
  },
  titleDescContainer: {
    padding: 15,
  },
  title: {
    fontFamily: fonts.montserrat_Regular,
    color: theme.BLACK,
    marginBottom: verticalScale(6),
    fontWeight: 'bold',
    fontSize: verticalScale(18),
  },
  description: {
    fontFamily: fonts.montserrat_Regular,
    color: '#b9b8b8',
    fontSize: verticalScale(14),
  },
  noSearch: {
    fontFamily: fonts.montserrat_Bold,
    color: theme.BLACK,
    fontSize: verticalScale(18),
    marginTop: verticalScale(25),
    textAlign: 'center',
  },
  mainCardView: {
    height: verticalScale(300),
    backgroundColor: theme.WHITE,
    marginVertical: verticalScale(10),
  },
  subCardView: {
    backgroundColor: theme.WHITE,
    borderColor: theme.WHITE,
    borderWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: verticalScale(180),
    width: width,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    top: verticalScale(182),
  },
  pagination: {
    width: 40,
    height: verticalScale(2),
    marginHorizontal: 4,
  },
  emptyItemContainer: {marginTop: '45%', alignSelf: 'center'},
  emptyImage: {width: 200, height: 200},
});
export default styles;
