import React from 'react';
import { Icon } from 'native-base';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../ios/src/components/home';
import NewReminderScreen from '../ios/src/components/reminder';
import NoteScreen from '../ios/src/components/notes';

// Footer tabs navigation config 
const HomeDashboardNavigator = createBottomTabNavigator(
  {
    Reminders: { 
      screen: NewReminderScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="Feather"
            name="plus-circle"  
            size={24}
            style={{color: tintColor}}
          />
        )
      })
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="Feather"
            name="home"  
            size={24}
            style={{color: tintColor}}
          />
        )
      })
    },
    Notes: { 
      screen: NoteScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon 
            type="Feather"
            name="clipboard"  
            style={{color: tintColor}}
            size={25}
          />
        )
      })      
    }
  }, 
  {
    tabBarOptions: {
      showLabel: false,     
      activeTintColor: '#FAA465',
      inactiveTintColor: '#DADADA',
      labelStyle: {
        fontSize: 12,
        fontWeight: '300'
      },
      labelPosition: 'below-icon',
      keyboardHidesTabBar: true
    }
  },
);

export default HomeDashboardNavigator