import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeDashboardNavigator from './HomeDashboardNavigator';

import LandingScreen from '../ios/src/components/landing';
import SettingScreen from '../ios/src/components/settings'
import CalendarScreen from '../ios/src/components/calendar';
import AddMemberScreen from '../ios/src/components/addMember';


// Navigation for HomeScreen
const HomeStackNavigator = createStackNavigator(
    {
      HomeTabNavigator: HomeDashboardNavigator
    },
    {
      // Instantiate drawer icon
      defaultNavigationOptions:({ navigation }) => {
        const {routeName} = navigation.state.routes[navigation.state.index];   
        return {
          headerLeft:(
            <Icon 
              style={styles.drawer}
              type="Feather"
              name="menu"
              size={70} 
              onPress={() => navigation.openDrawer()}
            />
          ),
          // Define header title
          headerTitle: routeName
        }
      }
    }
  );
  
// Navigation for Calendarscreen
const CalendarStackNavigator = createStackNavigator(
    {
      CalendarScreen
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
          headerTitle: 'Calendar'
        }
      }
    }
  );
  
// Navigation for AddMemberScreen
const AddMemberStackNavigator = createStackNavigator(
    {
      AddMemberScreen
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
          headerTitle: 'Add Family Member'
        }
      }
    }
  );
  
  
// Navigation for SettingsScreen
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
  
  // Drawer menu that can be accessed from all screens
  const AppDrawerNavigator = createDrawerNavigator(
    {
      Home: { screen: HomeStackNavigator },
      Calendar: { screen: CalendarStackNavigator },
      'Add Family Member': { screen: AddMemberStackNavigator },
      Settings: { screen: SettingStackNavigator },
      Logout: { screen: LandingScreen }
    },
    {
      drawerType: 'front',
      drawerPosition: 'left',
      drawerWidth: 250,
      overlayColor: "transparent",
      drawerBackgroundColor: '#FFFFFF',
      contentOptions: {
        labelStyle: {
          color: '#FAA465',
          fontSize: 15,
          fontWeight: '700',
          paddingTop: 5,
          paddingLeft: 15,
          fontFamily: 'Montserrat-Bold',
          height: 30
        },
      }
    }
  );

  // Define styles:
    const styles = StyleSheet.create({
        drawer: {
        paddingLeft: 30,
        color: '#FAA465'
        },
    });  

export default AppDrawerNavigator;