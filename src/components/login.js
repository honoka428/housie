import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ImageBackground, View, Image } from 'react-native';

class LoginScreen extends React.Component {
  render() {
    return (
      <ImageBackground source={require("../assets/images/base/login.png")} resizeMode= 'contain' style={styles.container}>
        <View style={styles.top}>
          <Image source={require("../assets/images/base/hamburger.png")} style={styles.hamburger} />
        </View>
        
        <View style={styles.middle}>
          <Text style={styles.lightTitle}>Welcome to</Text>
          <Text style={styles.boldTitle}>Housie</Text>
          <TouchableOpacity onPress={ () => this.props.navigation.navigate('Home')}>
            <Text style={styles.header}>L O G I N</Text>
          </TouchableOpacity>
          <Text style={styles.subQuestion}>Don't have an account yet?</Text>
          <TouchableOpacity onPress={ () => this.props.navigation.navigate('Home')}>
            <Text style={styles.subAnswer}>Sign up here</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '97%',

  },
  top: {
    height: '20%',
    alignItems: 'flex-start',
    marginLeft: 30,
  },
  hamburger: {
    flex: 1,
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  middle: {
    height: '65%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 60,
  },  
  header: {
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
    backgroundColor: '#F4A4AB',
    shadowOffset:{  width: 0,  height: 1,  },
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: 0.8,    
    borderRadius: 25,
    paddingLeft: 45,
    paddingRight: 45,
    paddingTop: 10,
    paddingBottom: 10,
    overflow: 'hidden',  
    marginTop: 20, 
    marginBottom: 20, 
  },
  lightTitle: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '100',
    fontSize: 45,
    lineHeight: 60,
    color: '#000000',
  },
  boldTitle: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 45,
    lineHeight: 60,
    color: '#000000',
  },
  subQuestion: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 30,
    color: '#3F3F3F',
  },
  subAnswer: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 15,
    color: '#FAA465',
  }
});

export default LoginScreen;