import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import { Container, Content, Form, Item, Input, Label, ListItem, CheckBox } from 'native-base';

let customFonts = {
  'Montserrat-Bold': require('../../../assets/fonts/Montserrat-Bold.ttf'),
  'Montserrat-Medium': require('../../../assets/fonts/Montserrat-Medium.ttf'),
  'Montserrat-Light': require('../../../assets/fonts/Montserrat-Light.ttf')
};

class RegisterScreen extends React.Component {
  state = {
    fontsLoaded: false,
    };

    async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <Container style={styles.container}>
          <Content>
            <Text style={styles.headerText}> Register </Text>
            <Form style={styles.inputContentWrapper}>
              <Item stackedLabel style={styles.formItem}>
                  <Label style={styles.formLabel}>Username</Label>
                  <Input style={styles.formInput} />
              </Item>
              <Item stackedLabel last style={styles.formItem}>
                  <Label style={styles.formLabel}>Password</Label>
                  <Input style={styles.formInput} />
              </Item>
              <Item stackedLabel last style={styles.formItem}>
                  <Label style={styles.formLabel}>Email</Label>
                  <Input style={styles.formInput} />
              </Item>
          </Form>
          <TouchableOpacity onPress={ () => this.props.navigation.navigate('Home')}>
            <Text style={styles.button}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => this.props.navigation.navigate('Login')}>
            <Text style={styles.subAnswer}>Already have an account? Login.</Text>
          </TouchableOpacity>
          </Content>
        </Container>
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
    marginBottom: 40,
    fontFamily: 'Montserrat-Bold',
    fontSize: 35,
    fontWeight: '500',
    color: '#FAA465'
  },
  container: {
    marginLeft: 30,
    marginRight: 35
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
  inputContentWrapper: {
    marginTop: 70,
    marginBottom: 110
  },
  button: {
    fontSize: 20,
    fontFamily: 'Montserrat-Medium',
    color: 'white',
    backgroundColor: '#FAA465',
    height: 50,
    borderRadius: 25,
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

export default RegisterScreen