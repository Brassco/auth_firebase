import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import {Config} from './config';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount(){
        firebase.initializeApp(Config())
    }

    render() {
        return (
            <View>
                <Header headerText={'This is header'}/>
                <LoginForm/>
            </View>
        )
    }
}

export default App;