import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Platform } from 'react-native';
import { Container, Content, Input } from 'native-base';
import { AuthProvider, AuthContext } from '../context/AuthContext';
import * as ImagePicker from 'expo-image-picker';

export default function HomeScreen(){
  // Figure out how dynamically update the content based on user inputs
    // Grabs data from AuthContext.js but values are not updated from previous screen.
    state = {
      newReminder: '',
      refresh: false
    };

    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);

    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);
  

    function triggerImagePicker(imageNumber) {
      return pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
          allowsMultipleSelection: false
        });
    
        if (!result.cancelled) {
          if (imageNumber == 1) {
            setImage1(result.uri);
          } else setImage2( result.uri);
        }
      };
    }  
  
    const { newReminder, refresh } = this.state;
  
    return (
        <AuthProvider>
          <AuthContext.Consumer>
            { value => 
              <Container style={styles.container}>
                  <FlatList 
                      data={value.reminders}
                      renderItem={({ item }) => (
                        <Text>{item.reminder}</Text>
                      )}
                      keyExtractor={item => item.id}
                      extraData={refresh}
                      ListHeaderComponent={
                        <>
                        <Text style={styles.familyName}> { value.existingUsers[0].familyName } </Text>
                        <View style={styles.profileThumbnails}>
                          <TouchableOpacity style={styles.profileThumbnailInactive} onPress={triggerImagePicker(1)}>
                            {image1 && <Image source={{ uri: image1 }} style={{ width: 110, height: 80 }}/>}
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.profileThumbnailInactive} onPress={triggerImagePicker(2)}>
                            {image2 && <Image source={{ uri: image2 }} style={{ width: 110, height: 80 }} />}
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
                          </Content>
                        </View>
                        </>                          
                      }
                  />          
              </Container>
            }
          </AuthContext.Consumer>
        </AuthProvider>
    )
  }

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
  remindersTitle: {
    color: '#959090',
    fontFamily: 'Montserrat-Bold',
    marginTop: 20
  },
  remindersPlaceholder: {
    fontFamily: 'Montserrat-Regular',

  }
})

// export default HomeScreen;

