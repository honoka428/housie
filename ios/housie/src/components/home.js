import React from 'react';
import { StyleSheet, Text, View, Component, TouchableOpacity, Image } from 'react-native';
import { Container, Content } from 'native-base';

const Parents = ({ navigation }) => {
  return (
    <View style={ styles.profiles }>
      <TouchableOpacity onPress={ () => navigation.navigate('Login')} >
        <Image
          style={styles.parents}
          source={require('../assets/images/profiles/parent.png')}
        />
        <Text style={styles.text}> Parents </Text>
      </TouchableOpacity> 
    </View>
  )
};

const Kids = ({ navigation }) => {
  return (
    <View style={styles.profiles}>
      <TouchableOpacity onPress={ () => navigation.navigate('Login')} >
        <Image
          style={styles.child}
          source={require('../assets/images/profiles/infant.png')}
        />
        <Text style={styles.text}> Infant </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('Login')} >
        <Image
          style={styles.child}
          source={require('../assets/images/profiles/toddler.png')}
        />
        <Text style={styles.text}> Toddler </Text>
      </TouchableOpacity>        
      <TouchableOpacity onPress={ () => navigation.navigate('Login')} >
        <Image
          style={styles.child}
          source={require('../assets/images/profiles/schoolage.png')}
        />
        <Text style={styles.text}> School Age </Text>
      </TouchableOpacity>  
    </View>  
  )
};

const Profiles = ({ navigation }) => {
  return (
    <View style={styles.profilesContainer}>
      <Parents navigation={navigation}/>
      <Kids navigation={navigation} />
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
  profilesContainer: {
    alignItems: 'center',
  },

  profiles: {
    flexDirection: 'row',
    paddingTop: 100,
  },

  parents: {
    flex: 1,
    height: 120,
    width: 120,
  },

  child: {
    flex: 1,
    height: 100,
    width: 100,
    margin: 10,
  },

  text: {
    textAlign: 'center',  
    fontSize: 15,
    fontWeight: '300',
    color: '#FFAC4A',      
  }  
})

export default HomeScreen;

