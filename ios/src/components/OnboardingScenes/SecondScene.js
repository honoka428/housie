import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import  Constants from 'expo-constants';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

let customFonts = {
  'Montserrat-Bold': require('../../../../assets/fonts/Montserrat-Bold.ttf'),
  'Montserrat-Medium': require('../../../../assets/fonts/Montserrat-Medium.ttf'),
  'Montserrat-Light': require('../../../../assets/fonts/Montserrat-Light.ttf')
};

export default class SecondScene extends Component {
  state = {
    fontsLoaded: false,
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
      return (
        <View style={styles.container}>
          <Text style={styles.title}>How it works</Text>
          <Text style={styles.subtitle}>Keep track of the important things. </Text>
          <Image 
              source={require('../../../../assets/images/onboarding/secondScene2.png')}
              style={{ width: 325, height: 400, alignSelf: 'center', marginTop: 50 }}
              />
        </View>
      );
    } else {
      return <AppLoading/>
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 35,
    color: '#FAA465',
    marginLeft: 30,

  },
  subtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    marginLeft: 30
  }
});
