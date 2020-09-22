import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import LandingScreen from './src/components/landing';
import SettingScreen from './src/components/settings'
import DashboardNavigator from './src/components/dashboardNav';
import CalendarScreen from './src/components/calendar';
import AddMemberScreen from './src/components/addMember';

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

// Navigation within 'Calendar'
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

// Navigation within 'Add Member'
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
        fontSize: 20,
        fontWeight: '700',
        marginTop: 20
      },
    }
  }
);

// Navigation for before vs. after authentication
const AppSwitchNavigator = createSwitchNavigator({
  Landing: { screen: LandingScreen},
  Home: { screen: AppDrawerNavigator}
});

const AppContainer = createAppContainer(AppSwitchNavigator);

// Define styles:
const styles = StyleSheet.create({
  drawer: {
    paddingLeft: 30,
    color: '#FAA465'
  },
});

class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}
export default App