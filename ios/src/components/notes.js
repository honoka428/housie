import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Container, Form, Input, Item } from 'native-base';
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
              <FlatList 
                  data={value.notes}
                  renderItem={({ item }) => (
                    <Text>{item.note}</Text>
                  )}
                  keyExtractor={item => item.id}
                  extraData={refresh}
                  ListHeaderComponent={
                    <View>
                      <Text style={styles.remindersTitle}> Use this page to jot down your thoughts! </Text>
                      <Form>
                        <Item>
                          <Input 
                            style={styles.remindersPlaceholder}
                            onChangeText={ (val) => this.setState({ newNote: val })}                            />
                        </Item>
                      </Form>                    
                      <TouchableOpacity 
                        onPress={ () =>
                          value.addNote({note: newNote, id: Math.random().toString()},
                          this.setState({ refresh: !refresh })
                        )}>
                        <Text style={styles.addButton}> Add Note </Text>
                      </TouchableOpacity>
                    </View>
                  }
              />          
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
    marginLeft: 10,
    marginRight: 20,
    marginTop: 30    
  },
  remindersTitle: {
    color: '#959090',
    fontFamily: 'Montserrat-Bold',
    marginTop: 20,
    alignSelf: 'center'
  },
  remindersPlaceholder: {
    fontFamily: 'Montserrat-Regular',
    alignItems: 'center'
  },
  addButton: {
    fontSize: 15,
    fontFamily: 'Montserrat-Medium',
    color: 'white',
    backgroundColor: '#FFC194',
    height: 30,
    width: 150,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'center',
    lineHeight: 30,
    textAlign: 'center',
    marginTop: 10    
},
});

export default NoteScreen