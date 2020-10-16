import React from 'react';
import { Icon } from 'native-base';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../ios/src/components/home';
import CalendarScreen from '../ios/src/components/calendar';
import NoteScreen from '../ios/src/components/notes';

// Footer tabs navigation config 
const HomeDashboardNavigator = createBottomTabNavigator(
  {
    Calendar: { 
      screen: CalendarScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="Feather"
            name="calendar"  
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