import React, {createContext} from 'react';

const AuthContext = createContext();

class AuthProvider extends React.Component {
    state = {
        username: '',
        password: ''
    }

    existingUsers = [{
        username: "Honoka",
        password: "Abc"
    }]

    setUsername = (username) => {
        this.setState(username);
    }

    setPassword = (password) => {
        this.setState(password);
    }

    setEmail = (email) => {
        this.setState(email);
    }

    setToken = (token) => {
        this.setState(token);
    }

    checkUser = (username, password) => {
        if (this.existingUsers[0].username == username && this.existingUsers[0].password == password) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        return (
            <AuthContext.Provider 
            value={{
                username: this.state.username,
                password: this.state.password,
                email: this.state.password,
                token: this.state.token,
                setUsername: this.setUsername,
                setEmail: this.setEmail,
                setPassword: this.setPassword,
                setToken: this.setToken,
                checkUser: this.checkUser
            }}
            >
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export {AuthContext, AuthProvider}