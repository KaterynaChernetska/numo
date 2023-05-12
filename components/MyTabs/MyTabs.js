import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from "react";
import TodayScreen from '../../Screens/TodayScreen';
import Today from '../../assets/icons/Today.jsx';
import History from '../../assets/icons/History.jsx';
import HistoryScreen from '../../Screens/HistoryScreen';
// import Svg, { G, Path } from 'react-native-svg';
const Tab = createBottomTabNavigator();


const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Today"
      screenOptions={{
        headerStyle: {
          height: 136,
        },
        tabBarActiveTintColor: '#9763FF',
        tabBarInactiveTintColor: '#C1C3C6',
        tabBarStyle: [
          {
            display: 'flex',
            justifyContent: 'center',
            height: 102,
            paddingBottom: 34,
            paddingHorizontal: 114,
          },
          null,
        ],
      }}>
      <Tab.Screen
        name="Today"
        component={TodayScreen}
        options={{
          title: 'Today',
          headerTitleStyle: {
            fontWeight: 700,
            fontSize: 36,
          },
          tabBarIcon: ({color, size}) => (
            <Today stroke={color} size={size} />
          ),
          tabBarShowLabel: true,
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          title: 'History',

          headerTitleStyle: {
            fontWeight: 700,
            fontSize: 36,
          },
          tabBarIcon: ({color, size}) => (
            <History stroke={color} size={size} />
          ),
          tabBarShowLabel: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
