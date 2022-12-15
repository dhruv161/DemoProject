import { StyleSheet } from 'react-native';
import {  verticalScale } from "react-native-size-matters";
import theme from "src/Utils/theme";
import fonts from "src/Utils/fonts";

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		// width: '97%',
		alignSelf: 'center'
	  },
	  searchBar: {
		height: verticalScale(45),
		flexDirection: 'row',
		width: '97%',
		backgroundColor: theme.SEARCH_BG,
	  },
	  searchBarClicked: {
		marginLeft: verticalScale(15),
		marginRight: verticalScale(10),
		height: verticalScale(45),
		flexDirection: 'row',
		width: '70%',
		backgroundColor: theme.GRAY,
		borderRadius: 10,
	  },
	  input: {
		alignSelf: 'center',
		width: '90%',
		color: theme.BLACK,
		fontFamily: fonts.montserrat_Medium,
		fontSize: verticalScale(15),
	  },
	  buttonStyle: {
		alignSelf: 'center',
	  },
});
