import React from 'react';
import { StyleSheet, Text, View, Component, TouchableOpacity, Image } from 'react-native';
import { Container, Content } from 'native-base';

const Profiles = ({ navigation }) => {
  return (
    <View style={styles.profilesContainer}>
    </View>
  )
};

class HomeScreen extends React.Component {
    render() {
    return (
      <Container navigation={this.props.navigation} style={styles.container}>
        <Content>
          <Profiles navigation={this.props.navigation}/>
        </Content>
      </Container>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',  
    fontSize: 15,
    fontWeight: '300',
    color: '#FFAC4A',      
  }  
})

export default HomeScreen;

