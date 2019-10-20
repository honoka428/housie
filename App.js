import React from 'react';
import { StyleSheet, Text, View, Component } from 'react-native';
import { Container, Header, Content, Icon } from 'native-base';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import LoginScreen from './app/components/login';
import ProfileScreen from './app/components/profile';
import SettingScreen from './app/components/settings'
import DashboardNavigator from './app/components/dashboardNav';

// Navigation within 'Home'
const HomeStackNavigator = createStackNavigator(
  {
    HomeTabNavigator: DashboardNavigator
  },
  {
    // Instantiate drawer icon
    defaultNavigationOptions:({ navigation }) => {
      const {routeName} = navigation.state.routes[navigation.state.index];   
      return {
        headerLeft:(
          <Icon 
            style={styles.drawer}
            name="menu"
            size={30} 
            onPress={() => navigation.openDrawer()}
          />
        ),
        // Define header title
        headerTitle: routeName
      }
    }
  }
);

// Navigation within 'Profile'
const ProfileStackNavigator = createStackNavigator(
  {
    ProfileScreen
  },
  {
    defaultNavigationOptions:({ navigation }) => {
      return {
        headerLeft:(
          <Icon 
            style={styles.drawer}
            name="menu"
            size={30} 
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerTitle: 'Profile'
      }
    }
  }
);

// Navigation within 'Settings'
const SettingStackNavigator = createStackNavigator(
  {
    SettingScreen
  },
  {
    defaultNavigationOptions:({ navigation }) => {
      return {
        headerLeft:(
          <Icon 
            style={styles.drawer}
            name="menu"
            size={30} 
            onPress={() => navigation.openDrawer()}
          />
        ),
        headerTitle: 'Settings'
      }
    }
  }
);

// Drawer menu that can be accessed from all app routes
const AppDrawerNavigator = createDrawerNavigator(
  {
    Family: { screen: HomeStackNavigator },
    Profile: { screen: ProfileStackNavigator },
    Settings: { screen: SettingStackNavigator }
  },
  {
    drawerType: 'slide',
    drawerPosition: 'left',
    drawerWidth: 200,
    drawerBackgroundColor: 'white',
  }
);

// Navigation for before vs. after authentication
const AppSwitchNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen},
  Home: { screen: AppDrawerNavigator}
});

const AppContainer = createAppContainer(AppSwitchNavigator);

// Define styles:
const styles = StyleSheet.create({
  drawer: {
    paddingLeft: 10,
    color: '#FFAC4A'
  },
});

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}
