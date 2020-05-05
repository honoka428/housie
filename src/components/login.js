import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ImageBackground, View } from 'react-native';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require("../assets/images/base/login.png")} style={styles.background}>
          <View source={require("../assets/images/base/hamburger.png")} style={styles.hamburger} />
          <TouchableOpacity style={styles.row} onPress={ () => this.props.navigation.navigate('Home')}>
            <Text style={styles.text}> Login </Text>          
          </TouchableOpacity>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'stretch',
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: 'center',
  },
  hamburger: {
    flex: 1,
  },
  text: {
    alignSelf: 'center',  
    fontSize: 20,
    fontWeight: '400',
    color: '#EA5D31',   
  },
  row: {
  	flexDirection: 'row',
  },
});

export default LoginScreen;