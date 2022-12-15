import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {verticalScale} from 'react-native-size-matters';
import theme from 'src/Utils/theme';

const Button = ({Title, ...props}) => {
  return (
    <Pressable style={styles.Button} {...props}>
      <Text style={styles.btnText}>{Title}</Text>
      <AntDesign
        name="arrowright"
        size={verticalScale(15)}
        color={theme.WHITE}
        style={styles.btnText}
      />
    </Pressable>
  );
};

export default Button;
