import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ImageBackground, View, Image } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

let customFonts = {
  'Montserrat-Bold': require('../../../assets/fonts/Montserrat-Bold.ttf'),
  'Montserrat-Medium': require('../../../assets/fonts/Montserrat-Medium.ttf'),
  'Montserrat-Regular': require('../../../assets/fonts/Montserrat-Regular.ttf')
};

class LandingScreen extends React.Component {
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
          <ImageBackground source={require("../../../assets/images/base/landing.png")} resizeMode= 'contain' style={styles.container}>        
            <View style={styles.middle}>
              <Text style={styles.boldTitle}>HOUSIE</Text>
              <TouchableOpacity onPress={ () => this.props.navigation.navigate('Login')}>
                <Text style={styles.button}>Login</Text>
              </TouchableOpacity>
              <Text style={styles.subQuestion}>New here?</Text>
              <TouchableOpacity onPress={ () => this.props.navigation.navigate('Register')}>
                <Text style={styles.subAnswer}>Create an account.</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        );
      } else {
        return <AppLoading />;
      }
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '97%',

  },
  hamburger: {
    flex: 1,
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  middle: {
    height: '105%',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  button: {
    fontSize: 20,
    fontFamily: 'Montserrat-Medium',
    color: 'white',
    backgroundColor: '#FAA465',
    width: 200,
    height: 50,
    borderRadius: 5,
    textAlign: 'center',
    lineHeight: 50,
    overflow: 'hidden',  
    marginTop: 20, 
    marginBottom: 20, 
  },
  boldTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 60,
    lineHeight: 60,
    color: '#FAA465',
  },
  subQuestion: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    lineHeight: 30,
    color: '#3F3F3F',
  },
  subAnswer: {
    fontFamily: 'Montserrat-Bold',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 15,
    color: '#FAA465',
  }
});

export default LandingScreen;