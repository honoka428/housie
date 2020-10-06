import React from 'react';
import OnboardingComponent from 'react-native-onboarding-animate';

import {
  FirstScene,
  SecondScene
} from './OnboardingScenes';

class OnboardingScreen extends React.Component {

_onBoardingCompleted = () => {
    this.props.navigation.navigate('App')
  }

  render() {
    let scenes = [
      {
        component: FirstScene,
        backgroundColor: '#512DA8',
      },
      {
        component: SecondScene,
        backgroundColor: '#388E3C',
      }
    ];

  return (
    <OnboardingComponent
    scenes={scenes}
    enableBackgroundColorTransition={true}
    onCompleted={this._onBoardingCompleted}
  />
  )}
}

export default OnboardingScreen