import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base';

class NoteScreen extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <TouchableOpacity>
            <Text style={styles.text}> Add Note </Text>
        </TouchableOpacity>
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
    fontWeight: '500',
    color: 'black',
  },
});

export default NoteScreen