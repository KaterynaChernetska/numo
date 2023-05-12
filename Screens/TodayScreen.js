import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {v4 as uuidv4} from 'uuid';
import getJoke from '../services/api';
import Fav from '../assets/icons/Fav.jsx';
import FavFilled from '../assets/icons/Fav-Filled.jsx';
import {
  cleanAsyncStorage,
  loadArrayFromStorage,
} from '../services/asyncStorage';
import {saveArrayToStorage} from '../services/asyncStorage';

const TodayScreen = () => {
  const getCurrentDate = () => {
    const date = new Date();
    return date.getDate();
  };
  const [todayJoke, setTodayJoke] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [currentDate, setCurrentDate] = useState(getCurrentDate());
  //   cleanAsyncStorage();

  useEffect(() => {
    const saveJokesArray = async () => {
      const storedArray = await loadArrayFromStorage();
      const existingJoke = storedArray.find(
        item => item.date === getCurrentDate(),
      );
      if (existingJoke) {
        setTodayJoke(existingJoke.joke);
        setIsClicked(existingJoke.flag);
      } else {
        const {joke} = await getJoke();
        const newJoke = {
          id: uuidv4(),
          joke: joke,
          date: getCurrentDate(),
          flag: false,
        };
        setTodayJoke(joke);
        setIsClicked(false);
        setCurrentDate(getCurrentDate());
        storedArray.unshift(newJoke);
        saveArrayToStorage(storedArray);
        setIsClicked(false);
      }
    };
    saveJokesArray();
  }, [currentDate]);

  const handleButtonClick = async () => {
    try {
      const storedArray = await loadArrayFromStorage();
      const existingJoke = storedArray.find(
        item => item.date === getCurrentDate(),
      );

      if (existingJoke) {
        existingJoke.flag = !existingJoke.flag;
        await saveArrayToStorage(storedArray);
        setIsClicked(existingJoke.flag);
      } else {
        setIsClicked(prevValue => !prevValue);
      }
    } catch (error) {
      console.log('Error handling button click:', error);
    }
  };

  return (
    <View style={styles.body}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.text}>{todayJoke}</Text>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: isClicked ? '#9763FF' : '#EAE0FF',
            },
          ]}
          onPress={handleButtonClick}>
          {isClicked ? <FavFilled /> : <Fav />}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default TodayScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingTop: 50,
  },
  text: {
    fontSize: 24,
    marginBottom: 16,
    color: '#000000',
    fontWeight: 'bold',
    lineHeight: 38,
  },
  button: {
    padding: 18,
    borderRadius: 50,
    width: 64,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
});
