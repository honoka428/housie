import { createSwitchNavigator } from 'react-navigation';
import RegisterScreen from '../ios/src/components/register';
import LoginScreen from '../ios/src/components/login';
import LandingScreen from '../ios/src/components/landing';


const AuthSwitchNavigator = createSwitchNavigator({
  Root: { screen: LandingScreen},
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen}
});


export default AuthSwitchNavigator;