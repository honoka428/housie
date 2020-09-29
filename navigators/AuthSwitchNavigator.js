import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import { createSwitchNavigator } from 'react-navigation';

import RegisterScreen from '../ios/src/components/register';
import LoginScreen from '../ios/src/components/login';


const AuthSwitchNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen}
});


export default AuthSwitchNavigator;