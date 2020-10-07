import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import  Constants from 'expo-constants';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

let customFonts = {
  'Montserrat-Bold': require('../../../../assets/fonts/Montserrat-Bold.ttf')
};

export default class FirstScene extends Component {
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
            <Text style={styles.subtitle}>Add your family members.</Text>
            <Image 
              source={require('../../../../assets/images/onboarding/firstScene.png')}
              style={{ width: 370, height: 470, alignSelf: 'center'}}
              />
        </View>
        );
    } else {
        return <AppLoading />;
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
