import React from 'react';
import {View, TextInput} from 'react-native';
import theme from '../../Utils/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';

const SearchBar = ({searchPhrase, setSearchPhrase, setClicked}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        {/* search Icon */}
        <Icon
          name="search"
          color={theme.SEARCH_ICON}
          size={22}
          style={styles.iconStyle}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          selectionColor={theme.SEARCH_ICON}
          returnKeyType="done"
          placeholder="Search Brand"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onBlur={()=> {
            setClicked(false);
          }}
          onFocus={() => {
            setClicked(true);
          }}
        />
      </View>
    </View>
  );
};

export default SearchBar;
