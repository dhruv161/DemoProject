import React from "react";
import { View, StatusBar, StyleSheet, Platform } from "react-native";
import Navigation from "./src/Navigations";
import theme from "./src/Utils/theme";
import DeviceInfo from 'react-native-device-info';

const hasNotch = DeviceInfo.hasNotch();
export default function App() {
  return (
    <View style={{flex:1}}>
      <View style={styles.statusBar}>
			<StatusBar backgroundColor={theme.BACKGROUND} barStyle='light-content' />
		  </View>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
	statusBar: {
		height: Platform.OS === 'ios' && hasNotch ? 50 : null,
    backgroundColor: theme.BACKGROUND
	}
});
