import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { Container, Content } from 'native-base';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import { Container, Content, Form, Item, Input, Label, ListItem, CheckBox } from 'native-base';
import { AuthContext, AuthProvider } from '../context/AuthContext';

let customFonts = {
    'Montserrat-Bold': require('../../../assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Medium': require('../../../assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Light': require('../../../assets/fonts/Montserrat-Light.ttf')
  };

class LoginScreen extends React.Component {
  state = {
    fontsLoaded: false,
    checked: true
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
  this._loadFontsAsync();
  }

  checkToggleSwitch() {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    if (this.state.fontsLoaded) {
        return (
          <AuthProvider>
            <AuthContext.Consumer>
              { value =>
                <Container style={styles.container}>
                    <Content>
                        <Text style={styles.headerText}> Login </Text>
                        <View style={styles.inputContentWrapper}>
                          <Form>
                              <Item stackedLabel style={styles.formItem}>
                                  <Label style={styles.formLabel}>Username</Label>
                                  <Input 
                                    style={styles.formInput}
                                    value={this.state.username}
                                    onChangeText={val => this.setState({ username: val })}
                                  />
                              </Item>
                              <Item stackedLabel last style={styles.formItem}>
                                  <Label style={styles.formLabel}>Password</Label>
                                  <Input 
                                    style={styles.formInput}
                                    value={this.state.password}
                                    onChangeText={val => this.setState({ password: val })}
                                  />
                              </Item>
                          </Form>
                          <ListItem style={styles.rememberMeWrapper}>
                            <CheckBox
                              color="#FAA465"
                              checked={this.state.checked}
                              onPress={() => this.checkToggleSwitch()}
                            />
                            <Text style={styles.rememberMeText}>Remember Me</Text>
                          </ListItem>
                          <TouchableOpacity onPress={ () => this.props.navigation.navigate('App')}>
                            <Text style={styles.passwordReset}>Forgot password?</Text>
                          </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => {
                          if (value.checkUser(this.state.username, this.state.password)) {
                            this.props.navigation.navigate('App');
                          } else {
                            alert("User does not exist")
                          }
                        }}>
                          <Text style={styles.button}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ () => this.props.navigation.navigate('Register')}>
                          <Text style={styles.subAnswer}>Create an Account</Text>
                        </TouchableOpacity>
                    </Content>
                </Container>
              }
            </AuthContext.Consumer>
          </AuthProvider>
        )
    } else {
        return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  headerText: {
    textAlign: 'center',
    marginTop: 120,
    // marginBottom: 50,
    fontFamily: 'Montserrat-Bold',
    fontSize: 35,
    fontWeight: '500',
    color: '#FAA465'
  },
  container: {
    marginLeft: 30,
    marginRight: 35
  },
  inputContentWrapper: {
    marginTop: 70,
    marginBottom: 150
  },
  formItem: {
      marginTop: 25
  },
  formLabel: {
      color: '#000000',
      fontFamily: 'Montserrat-Medium'
  },
  formInput: {
    fontFamily: 'Montserrat-Light'
  },
  rememberMeWrapper: {
    borderBottomWidth: 0,
    marginTop: 10
  },
  rememberMeText: {
    paddingLeft: 5,
    fontFamily: 'Montserrat-Regular'
  },
  passwordReset: {
    fontFamily: 'Montserrat-Bold',
    color: '#FAA465',
    marginLeft: 20
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
  subAnswer: {
    fontFamily: 'Montserrat-Bold',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 15,
    color: '#FAA465',
    textAlign: 'center'
  }

});

export default LoginScreen