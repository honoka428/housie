import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import AppDrawerNavigator from './navigators/AppDrawerNavigator';
import AuthSwitchNavigator from './navigators/AuthSwitchNavigator';
import OnboardingScreen from './ios/src/components/onboarding';

let customFonts = {
  'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf')
};

// Navigation for before vs. after authentication
const RootSwitchNavitagor = createSwitchNavigator({
  Auth: { screen: AuthSwitchNavigator },
  App: { screen: AppDrawerNavigator},
  Onboard: { screen: OnboardingScreen }
});

const AppContainer = createAppContainer(RootSwitchNavitagor);

class App extends React.Component  {
    state = {
      fontsLoaded: false
    };

    async _loadFontsAsync() {
      await Font.loadAsync(customFonts);
      this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
      this._loadFontsAsync();
    }

    render() {
      if (this.state.fontsLoaded) {
        return <AppContainer/>
      } else {
        return <AppLoading />;
      }
    }
}

export default App