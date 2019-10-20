import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Content } from 'native-base';


class ProfileScreen extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Text style={styles.text}> Profile Dashboard: </Text>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',    
  },
  text: {
    textAlign: 'center',  
    fontSize: 20,
    fontWeight: '300',
    color: 'black',
  },
});

export default ProfileScreen