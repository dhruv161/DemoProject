import React, { useState } from "react";
import { View, Text, TextInput, Keyboard } from "react-native";
import theme from "src/Utils/theme";
import styles from "./style";
import Button from "src/Components/Button";
import * as Api from "src/Utils/Api";
import ApiConstants from "src/Utils/apiConstants";
import Loader from "src/Components/Loader";
import Snackbar from 'react-native-snackbar';

const Login = ({ navigation, route }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const userNamevalidation = () => {
    if (username === '') {
      Snackbar.show({
        text: 'User name can not be blank',
        duration: Snackbar.LENGTH_SHORT,
        textColor: theme.WHITE,
        backgroundColor: theme.RED,
      });
    } 
  }

  const onLoginSuccess = async () => {
    setLoading(false)
    navigation.navigate('ProductDetails', { data: route?.params?.data })
  };

  const onLoginError = async () => {
    setLoading(false)
    Snackbar.show({
      text: 'Enter Valid Username and password',
      duration: Snackbar.LENGTH_SHORT,
      textColor: theme.WHITE,
      backgroundColor: theme.RED,
    })
  };

  const onLoginSubmit = () => {
    setLoading(true)
    const params = {
      username,
      password,
    };
    {
      username?.length > 0 && password?.length > 0 ? (
        Api.postApicall(
          ApiConstants.BASE_URL + ApiConstants.LOGIN,
          params,
          onLoginSuccess,
          onLoginError
        )
      ) :
        Snackbar.show({
          text: 'Enter UserName Or Password',
          duration: Snackbar.LENGTH_SHORT,
          textColor: theme.WHITE,
          backgroundColor: theme.RED,
        })
      setLoading(false)
    }
  };

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <Text style={styles.title}>Login</Text>
      <View style={styles.innerContainer}>
      <Text style={styles.usernameTitle}>Username</Text>
      {/* Input field */}
      <TextInput
        selectionColor={theme.GRAY}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
        placeholderTextColor={theme.GRAY}
        style={styles.textInputStyle}
        returnKeyType="next"
        onSubmitEditing={() => { userNamevalidation(), Keyboard.dismiss() }}
        blurOnSubmit={false}
      />
      <Text style={styles.usernameTitle}>Password</Text>
      {/* Input field */}
      <TextInput
        selectionColor={theme.GRAY}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        placeholderTextColor={theme.GRAY}
        style={styles.textInputStyle}
        returnKeyType="next"
        onSubmitEditing={() => { onLoginSubmit(), Keyboard.dismiss() }}
        blurOnSubmit={false}
        secureTextEntry
      />
      </View>
      <View style={styles.bottomContainer}>
        <Button Title={"CONTINUE"} onPress={() => onLoginSubmit()} />
      </View>
    </View>
  );
};

export default Login;
