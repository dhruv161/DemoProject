import AsyncStorage from "@react-native-community/async-storage";

export const setSessionData = async (key, value) => {
  try {
    await AsyncStorage.setItem(`@${key}`, value);
  } catch (error) {
    console.log(error);
  }
};

export const removeItemValue = async (key) => {
  try {
    await AsyncStorage.removeItem(`@${key}`);
  } catch (error) {
    console.log(error);
  }
};

export const getSessionData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(`@${key}`);
    return value !== null ? value : null;
  } catch (error) {
    console.log(error);
  }
};

export const clearSession = () => {
  AsyncStorage.clear();
};
