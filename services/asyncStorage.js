import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveArrayToStorage = async array => {
  try {
    await AsyncStorage.setItem('jokesArray', JSON.stringify(array));
  } catch (error) {
    console.log('Error saving array to local storage:', error);
  }
};

export const loadArrayFromStorage = async () => {
  try {
    const storedArray = await AsyncStorage.getItem('jokesArray');
    //   console.log(storedArray);
    return storedArray !== null ? JSON.parse(storedArray) : [];
  } catch (error) {
    console.log('Error loading array from local storage:', error);
    return [];
  }
};
// in case to clean AsyncStorage
export const cleanAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('AsyncStorage cleared successfully.');
  } catch (error) {
    console.error('Error clearing AsyncStorage:', error);
  }
};
