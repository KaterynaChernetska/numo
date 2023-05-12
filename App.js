/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './components/MyTabs/MyTabs';

export default function App() {
  console.log('fff');
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}
