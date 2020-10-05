import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import LandingScreen from './ios/src/components/landing';
import AppDrawerNavigator from './navigators/AppDrawerNavigator';
import AuthSwitchNavigator from './navigators/AuthSwitchNavigator';

let customFonts = {
  'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf')
};

// Navigation for before vs. after authentication
const RootSwitchNavitagor = createSwitchNavigator({
  Root: { screen: LandingScreen },
  Home: { screen: AppDrawerNavigator},
  Auth: { screen: AuthSwitchNavigator}
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