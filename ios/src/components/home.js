import React from 'react';
import { StyleSheet, Text, View, Component, TouchableOpacity, FlatList } from 'react-native';
import { Container, Content, Input } from 'native-base';
import { AuthProvider, AuthContext } from '../context/AuthContext';

class HomeScreen extends React.Component {
  // Figure out how dynamically update the content based on user inputs
    // Grabs data from AuthContext.js but values are not updated from previous screen.
    state = {
      newReminder: '',
      refresh: false
    };
  
    render() {
  
    const { newReminder, refresh } = this.state;
  
    return (
        <AuthProvider>
          <AuthContext.Consumer>
            { value => 
              <Container style={styles.container}>
                <Text style={styles.familyName}> { value.existingUsers[0].familyName } </Text>
                <View style={styles.profileThumbnails}>
                  <TouchableOpacity style={styles.profileThumbnailInactive}>
                    <Text style={styles.thumbnailText}> Person 1: click to add picture </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.profileThumbnailInactive}>
                    <Text style={styles.thumbnailText}> Person 2: click to add picture </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.reminders}>
                  <Text style={styles.remindersTitle}> Upcoming To-do's </Text>
                  <Content>
                    <Input 
                        placeholder={'Add a new reminder ...'}
                        onChangeText={ (val) => this.setState({ newReminder: val })}
                    />

                    <TouchableOpacity 
                      onPress={ () =>
                        value.addReminder({reminder: newReminder, id: Math.random().toString()},
                        this.setState({ refresh: !refresh })
                      )}>
                      <Text style={styles.addButton}> Set Reminder </Text>
                    </TouchableOpacity>

                    <FlatList 
                        data={value.reminders}
                        renderItem={({ item }) => (
                          <Text>{item.reminder}</Text>
                        )}
                        keyExtractor={item => item.id}
                        extraData={refresh}
                    />          
                    </Content>
                </View>
              </Container>
            }
          </AuthContext.Consumer>
        </AuthProvider>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30
  },
  familyName: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 35,
    color: '#FAA465'
  },
  profileThumbnails: {
    flexDirection: 'row',
    marginTop: 20
  },
  profileThumbnailInactive: {
    backgroundColor: '#ECECEC',
    borderRadius: 10,
    width: 110,
    height: 80,
    marginRight: 20
  },
  thumbnailText: {
    padding: 10
  },
  remindersTitle: {
    color: '#959090',
    fontFamily: 'Montserrat-Bold',
    marginTop: 20
  },
  remindersPlaceholder: {
    fontFamily: 'Montserrat-Regular',

  }
})

export default HomeScreen;

