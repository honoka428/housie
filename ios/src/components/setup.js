import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import  Constants from 'expo-constants';
import { Container, Content, Form, Input, Label, ListItem, CheckBox, Item } from 'native-base';
import { AuthContext, AuthProvider } from '../context/AuthContext';
import { TextInput } from 'react-native-gesture-handler';

class SetUpScreen extends React.Component {
    state = {
        newMember: '',
        refresh: false
    };

    render() {
        const { newMember, refresh } = this.state;

        const renderItem = ({ item }) => (
            <View style={styles.item}>
                <Text style={styles.name}>{item.name}</Text>
            </View>
        )

        return (
            <AuthProvider>
                <AuthContext.Consumer>
                { value =>
                    <Container navigation={this.props.navigation} style={styles.container}>
                        <FlatList 
                            data={value.familyMembers}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            extraData={refresh}
                            ListHeaderComponent ={
                                <>
                                <Text style={styles.subtitle}>Create your</Text>
                                <Text style={styles.title}>family profile</Text>
                                <Form style={styles.inputContentWrapper}>                                        
                                    <Item stackedLabel style={styles.formItem}>
                                        <Label style={styles.formLabel}>Family Name</Label>
                                        <Input 
                                            style={styles.formInput}
                                            onChangeText={ (val) => 
                                                value.setFamilyName(val)
                                                }/>
                                    </Item>
                                    <Item stackedLabel style={styles.formItem}>
                                        <Label style={styles.formLabel}>Who's in your family?</Label>
                                        <Input 
                                            style={styles.formInput}
                                            placeholder={'Type a name here...'}
                                            onChangeText={ (val) => 
                                                this.setState({ newMember: val })
                                            }
                                        />
                                    </Item>
                                    <TouchableOpacity 
                                        onPress={ () => 
                                            value.addFamilyMember({name: newMember, id: Math.random().toString()},
                                            this.setState({ refresh: !refresh })
                                        )}>
                                        <Text style={styles.addButton}>Add To Family</Text>
                                    </TouchableOpacity>
                                </Form>
                                </>
                            }
                            ListFooterComponent = {
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('App')}>
                                    <Text style={styles.button}>Save</Text>
                                </TouchableOpacity>
                            }
                        />
                    </Container>
                    }
                </AuthContext.Consumer>
            </AuthProvider>
        )
  }
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 30,
        marginRight: 35,
        marginTop: 150
    },
    inputContentWrapper: {
        marginTop: 70,
        marginBottom: 150
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 35,
        color: '#FAA465',
    },
    subtitle: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 30
    },
    addMember: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 15
    },
    formItem: {
        marginTop: 25,
        alignItems: 'flex-start'
    },
    formLabel: {
        color: '#000000',
        fontFamily: 'Montserrat-Medium'
    },
    formInput: {
        fontFamily: 'Montserrat-Light'
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
    button: {
        fontSize: 20,
        fontFamily: 'Montserrat-Medium',
        color: 'white',
        backgroundColor: '#FAA465',
        height: 50,
        borderRadius: 5,
        textAlign: 'center',
        lineHeight: 50,
        overflow: 'hidden',  
        marginTop: 0, 
        marginBottom: 10, 
      },
})

export default SetUpScreen;

