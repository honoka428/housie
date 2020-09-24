import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ImageBackground, View, Image } from 'react-native';
import { AppLoading } from 'expo';

import { useFonts, Montserrat_700Bold, Montserrat_500Medium, Montserrat_400Regular } from '@expo-google-fonts/montserrat';

export default function LandingScreen() {

  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_500Medium,
    Montserrat_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  return (
      <ImageBackground source={require("../assets/images/base/landing.png")} resizeMode= 'contain' style={styles.container}>        
        <View style={styles.middle}>
          <Text style={styles.boldTitle}>HOUSIE</Text>
          <TouchableOpacity onPress={ () => this.props.navigation.navigate('Home')}>
            <Text style={styles.button}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.subQuestion}>New here?</Text>
          <TouchableOpacity onPress={ () => this.props.navigation.navigate('Home')}>
            <Text style={styles.subAnswer}>Create an account.</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
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
    fontFamily: 'Montserrat_500Medium',
    color: 'white',
    backgroundColor: '#FAA465',
    width: 200,
    height: 50,
    borderRadius: 25,
    textAlign: 'center',
    lineHeight: 50,
    overflow: 'hidden',  
    marginTop: 20, 
    marginBottom: 20, 
  },
  boldTitle: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 60,
    lineHeight: 60,
    color: '#FAA465',
  },
  subQuestion: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 15,
    lineHeight: 30,
    color: '#3F3F3F',
  },
  subAnswer: {
    fontFamily: 'Montserrat_500Medium',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 15,
    color: '#FAA465',
  }
});