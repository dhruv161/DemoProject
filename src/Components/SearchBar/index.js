import React from 'react';
import {  View,  TextInput } from 'react-native'
import theme from '../../Utils/theme';
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from "./style";

const SearchBar = ({ 
	searchPhrase,
	setSearchPhrase,
	setClicked, }) => {
	return (
	  <View style={styles.container}>
		<View style={styles.searchBar}>
		  {/* search Icon */}
		  <Icon
			name="search"
			color={theme.SEARCH_ICON}
			size={22}
			style={{
			  paddingLeft: 0.5,
			  paddingTop: 0.5,
			  marginTop: 15,
			  marginLeft: 10,
			}}
		  />
		  {/* Input field */}
		  <TextInput
			style={styles.input}
			selectionColor={theme.SEARCH_ICON}
			returnKeyType="done"
			placeholder="Search Brand"
			value={searchPhrase}
			onChangeText={setSearchPhrase}
			onFocus={() => {
			  setClicked(true)
			}}
		  />
		</View>
	  </View>
	)
  }

export default SearchBar;
