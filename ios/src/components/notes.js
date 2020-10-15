import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Container, Content, Input } from 'native-base';
import { AuthProvider, AuthContext } from '../context/AuthContext';

class NoteScreen extends React.Component {
  state = {
    newNote: '',
    refresh: false
  };

  render() {

    const { newNote, refresh } = this.state;

    return (
      <AuthProvider>
        <AuthContext.Consumer>
          { value =>
            <Container style={styles.container}>
              <Content>
              <Input 
                  placeholder={'Type your note here ...'}
                  onChangeText={ (val) => this.setState({ newNote: val })}
              />

              <TouchableOpacity 
                onPress={ () =>
                  value.addNote({note: newNote, id: Math.random().toString()},
                  this.setState({ refresh: !refresh })
                )}>
                <Text style={styles.addButton}> Add Note </Text>
              </TouchableOpacity>

              <FlatList 
                  data={value.notes}
                  renderItem={({ item }) => (
                    <Text>{item.note}</Text>
                  )}
                  keyExtractor={item => item.id}
                  extraData={refresh}
              />          
              </Content>
            </Container>
          }
          </AuthContext.Consumer>          
      </AuthProvider> 
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
  addButton: {
    fontSize: 15,
    fontFamily: 'Montserrat-Medium',
    color: 'white',
    backgroundColor: '#FFC194',
    height: 30,
    borderRadius: 5,
    lineHeight: 30,
    textAlign: 'center'
},
});

export default NoteScreen