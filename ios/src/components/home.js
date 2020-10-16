import React from 'react';
import { StyleSheet, Text, Input, View, Component, TouchableOpacity, Image } from 'react-native';
import { Container, Content } from 'native-base';
import { AuthProvider, AuthContext } from '../context/AuthContext';

class HomeScreen extends React.Component {
  // Figure out how dynamically update the content based on user inputs
    // Grabs data from AuthContext.js but values are not updated from previous screen.
  render() {
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
                  <Text style={styles.remindersPlaceholder}> Click on the reminder tab below to add a new to do </Text>
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

