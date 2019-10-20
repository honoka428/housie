import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon } from 'native-base';

class LoginScreen extends React.Component {
  render() {
    return (
      <ImageBackground source={require('../assets/images/base/login.png')} style={style.container}>
        <TouchableOpacity 
          style={style.row}
          onPress={ () => this.props.navigation.navigate('Home')}
        >
          <Text style={style.text}> Login </Text>          
          <Icon 
            name="arrow-round-forward"
            style={style.icon}
          /> 
        </TouchableOpacity>
      </ImageBackground>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  
  text: {
    textAlign: 'center',  
    fontSize: 20,
    fontWeight: '400',
    color: '#EA5D31',
  },

  icon: {
    color: '#EA5D31'
  },
  row: {
  	flexDirection: 'row',
  },
})

export default LoginScreen;