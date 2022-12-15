import React from 'react';
import {
	View,
	Modal,
	StatusBar,
	ActivityIndicator
} from 'react-native';
import theme from '../../Utils/theme';
import styles from "./style";

const FullScreenLoader = ({loading}) => {
	return (
		<Modal
			animationType='none'
			visible={loading}
			transparent
		>
			<StatusBar
				backgroundColor='rgba(52, 52, 52, 0.8)'
				barStyle='light-content'
			/>
			 <View style={styles.activityIndicatorWrapper}>
			<ActivityIndicator size="large" color={theme.WHITE}  />
			</View>
		</Modal>
	);
};

export default FullScreenLoader;
