import React from 'react';
import { StyleSheet, Text, View, Component, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { createAppContainer, StackNavigator, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// Define styles:
const base = StyleSheet.create({
  whiteContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',    
  },
  text: {
    textAlign: 'center',  
    fontSize: 20,
    fontWeight: '300',
    color: 'black',
  },

  rowStyle: {
    flexDirection: 'row',
  },

  drawer: {
    paddingLeft: 10,
    color: '#FFAC4A'
  }
});


const login = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  
  text: {
    textAlign: 'center',  
    fontSize: 20,
    fontWeight: '400',
    color: '#EA5D31',
  },

  icon: {
    color: '#EA5D31'
  },

})

const footer = StyleSheet.create({
  icon: {
    color: 'white'
  }
});

const profileStyles = StyleSheet.create({
    
    container: {
      alignItems: 'center',
    },

    profiles: {
      flexDirection: 'row',
      paddingTop: 100,
    },

    parents: {
      flex: 1,
      height: 120,
      width: 120,
    },

    child: {
      flex: 1,
      height: 100,
      width: 100,
      margin: 10,
    },

    text: {
      textAlign: 'center',  
      fontSize: 15,
      fontWeight: '300',
      color: '#FFAC4A',      
    }
});


// Define screen specifications:
class LoginScreen extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./app/assets/images/base/login.png')} style={login.container}>
        <TouchableOpacity 
          style={base.rowStyle}
          onPress={ () => this.props.navigation.navigate('Home')}
        >
          <Text style={login.text}> Login </Text>          
          <Icon 
            name="arrow-round-forward"
            style={login.icon}
          /> 
        </TouchableOpacity>
      </ImageBackground>
    )
  }
}

class HomeScreen extends React.Component {
    render() {
    return (
      <Container navigation={this.props.navigation} style={base.whiteContainer}>
        <Content>
          <Profiles navigation={this.props.navigation}/>
        </Content>
      </Container>
    )
  }
}

class MealScreen extends React.Component {
  render() {
    return (
      <Container style={base.whiteContainer}>
        <Content>
          <Text style={base.text}> Meals: </Text>
        </Content>
      </Container>
    )
  }
}

class NoteScreen extends React.Component {
  render() {
    return (
      <Container style={base.whiteContainer}>
        <Content>
          <Text style={base.text}> Notes: </Text>
        </Content>
      </Container>
    )
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <Container style={base.whiteContainer}>
        <Content>
          <Text style={base.text}> Profile Dashboard: </Text>
        </Content>
      </Container>
    )
  }
}

class SettingScreen extends React.Component {
  render() {
    return (
      <Container style={base.whiteContainer}>
        <Content>
          <Text style={base.text}> Settings: </Text>
        </Content>
      </Container>
    )
  }
}

const Parents = ({ navigation }) => {
  return (
    <View style={ profileStyles.profiles }>
      <TouchableOpacity onPress={ () => navigation.navigate('Login')} >
        <Image
          style={profileStyles.parents}
          source={require('./app/assets/images/profiles/parent.png')}
        />
        <Text style={profileStyles.text}> Parents </Text>
      </TouchableOpacity> 
    </View>
  )
}

const Kids = ({ navigation }) => {
  return (
    <View style={profileStyles.profiles}>
      <TouchableOpacity onPress={ () => navigation.navigate('Login')} >
        <Image
          style={profileStyles.child}
          source={require('./app/assets/images/profiles/infant.png')}
        />
        <Text style={profileStyles.text}> Infant </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('Login')} >
        <Image
          style={profileStyles.child}
          source={require('./app/assets/images/profiles/toddler.png')}
        />
        <Text style={profileStyles.text}> Toddler </Text>
      </TouchableOpacity>        
      <TouchableOpacity onPress={ () => navigation.navigate('Login')} >
        <Image
          style={profileStyles.child}
          source={require('./app/assets/images/profiles/schoolage.png')}
        />
        <Text style={profileStyles.text}> School Age </Text>
      </TouchableOpacity>  
    </View>  
  )
}

const Profiles = ({ navigation }) => {
  return (
    <View style={profileStyles.container}>
      <Parents navigation={navigation}/>
      <Kids navigation={navigation} />
    </View>
  )
}

// Footer tabs navigation config 
const DashboardNavigator = createBottomTabNavigator(
  {
    Meals: { 
      screen: MealScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="restaurant"
            style={footer.icon}
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
            style={footer.icon}
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
            style={footer.icon}
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
    },

    // Match header to active tab
    navigationOptions: ({ navigation }) => {
      const {routeName} = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  },

);

// Stack navigation once inside login
const HomeStackNavigator = createStackNavigator(
  {
    HomeTabNavigator: DashboardNavigator
  },
  {
    defaultNavigationOptions:({ navigation }) => {
      return {
        headerLeft:(
          <Icon 
            style={base.drawer}
            name="menu"
            size={30} 
            onPress={() => navigation.openDrawer()}
          />
        )
      }
    }
  }
);

const ProfileStackNavigator = createStackNavigator(
  {
    ProfileScreen
  },
  {
    defaultNavigationOptions:({ navigation }) => {
      return {
        headerLeft:(
          <Icon 
            style={base.drawer}
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


const SettingStackNavigator = createStackNavigator(
  {
    SettingScreen
  },
  {
    defaultNavigationOptions:({ navigation }) => {
      return {
        headerLeft:(
          <Icon 
            style={base.drawer}
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

// Drawer menu configs (make available from Home)
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

const AppSwitchNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen},
  Home: { screen: AppDrawerNavigator}
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}
