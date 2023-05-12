import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {
  loadArrayFromStorage,
  saveArrayToStorage,
} from '../services/asyncStorage';
import Fav from '../assets/icons/Fav';
import FavFilled from '../assets/icons/Fav-Filled';
const HistoryScreen = () => {
  const [jokes, setJokes] = useState([]);

  const getAllJokes = async () => {
    const loadedJokes = await loadArrayFromStorage();
    setJokes(loadedJokes);
  };

  useEffect(() => {
    getAllJokes();
  }, [jokes]);

  const handleToggleFlag = async item => {
    const updatedJokes = jokes.map(joke => {
      if (joke.id === item.id) {
        return {
          ...joke,
          flag: !joke.flag,
        };
      }
      return joke;
    });

    setJokes(updatedJokes);
    await saveArrayToStorage(updatedJokes);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={jokes}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.content} key={item.id}>
            <Text style={styles.text}>{item.joke}</Text>
            <TouchableOpacity
              style={[
                styles.button,
                {backgroundColor: item.flag ? '#9763FF' : '#EAE0FF'},
              ]}
              onPress={() => handleToggleFlag(item)}>
              {item.flag ? <FavFilled /> : <Fav />}
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default HistoryScreen;
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 20,
    width: 259,
  },
  button: {
    padding: 12,
    borderRadius: 50,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});
