import React, { Component } from 'react';
import { Text, View, Animated, StyleSheet, Dimensions } from 'react-native';
import  Constants from 'expo-constants';

const { width, height } = Dimensions.get('window');

export default class SecondScene extends Component {
  render() {
    
    let { animatedValue } = this.props
    , halfWWidth = width / 2
    , animateInputRange = [ -1 * halfWWidth, 0, halfWWidth ]
    , paragraphAnimateStyle = [
      styles.paragraph,
      {
        transform: [{
          translateX: animatedValue.interpolate({
            inputRange: animateInputRange,
            outputRange: [ halfWWidth + 10, 0, -1 * halfWWidth - 10 ],
            extrapolate: 'clamp'
          })
        }],
        opacity: animatedValue.interpolate({
          inputRange: animateInputRange,
          outputRange: [0, 1, 0]
        })
      }
    ];
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Second Scene</Text>
        <Animated.Text style={paragraphAnimateStyle}>
          Change code in the editor and watch it change on your phone!
          Save to get a shareable url.
        </Animated.Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgba(255,255,255,0.7)'
  },
});
