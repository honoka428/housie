import React from 'react';
import { StyleSheet, Component } from 'react-native';
import { Icon } from 'native-base';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './home';
import MealScreen from './meals';
import NoteScreen from './notes';

// Footer tabs navigation config 
const DashboardNavigator = createBottomTabNavigator(
  {
    Meals: { 
      screen: MealScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="restaurant"
            style={styles.icon}
            size={24}
          />
        )
      })
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="home"
            style={styles.icon}
            size={24}
          />
        )
      })
    },
    Notes: { 
      screen: NoteScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="create"
            style={styles.icon}
            size={24}
          />
        )
      })      
    }
  }, 
  {
    tabBarOptions: {
      showLabel: false,      
      activeTintColor: 'white',
      activeBackgroundColor: '#FC9A26',
      inactiveTintColor: 'white',
      inactiveBackgroundColor: '#FFAC4A',
      labelStyle: {
        fontSize: 12,
        fontWeight: '300'
      },
      labelPosition: 'below-icon',
      keyboardHidesTabBar: true
    }
  },
);

const styles = StyleSheet.create({
  icon: {
    color: 'white'
  }
})

export default DashboardNavigator