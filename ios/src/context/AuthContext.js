import React, {createContext} from 'react';

const AuthContext = createContext();

class AuthProvider extends React.Component {
    state = {
        username: '',
        password: '',
        familyName: '',
    }

    existingUsers = [{
        username: "Honoka",
        password: "Abc"
    }]

    familyMembers = []

    notes = []

    setUsername = (username) => {
        this.setState(username);
    }

    setPassword = (password) => {
        this.setState(password);
    }

    setFamilyName = (familyName) => {
        this.setState(familyName);
    }

    addFamilyMember = (familyMember) => {
        this.familyMembers.push(familyMember)
    }

    addNote = (note) => {
        this.notes.push(note)
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
                familyName: this.state.familyName,
                setUsername: this.setUsername,
                setPassword: this.setPassword,
                checkUser: this.checkUser,
                setFamilyName: this.setFamilyName,
                addFamilyMember: this.addFamilyMember,
                familyMembers: this.familyMembers,
                notes: this.notes,
                addNote: this.addNote
            }}
            >
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export {AuthContext, AuthProvider}