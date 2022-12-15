import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import theme from 'src/Utils/theme';
import fonts from 'src/Utils/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.BACKGROUND,
    paddingHorizontal: verticalScale(20),
  },
  innerContainer: {
    marginTop: verticalScale(60),
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    bottom: verticalScale(20),
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
  title: {
    fontFamily: fonts.tfarrow_Medium,
    color: theme.BLACK,
    fontSize: verticalScale(40),
    marginTop: verticalScale(60),
    textAlign: 'center',
  },
  usernameTitle: {
    fontFamily: fonts.montserrat_Regular,
    fontSize: scale(12),
    color: theme.GRAY,
    lineHeight: scale(13),
  },
  usernameDetails: {
    fontFamily: fonts.montserrat_Regular,
    fontSize: scale(16),
    color: theme.WHITE,
    backgroundColor: 'red',
    lineHeight: scale(16),
    padding: 0,
    alignSelf: 'center',
  },
});

export default styles;
