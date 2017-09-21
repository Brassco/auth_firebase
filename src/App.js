import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spiner} from './components/common';
import {Config} from './config';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = {
        loggedId: null
    }

    componentWillMount(){
        firebase.initializeApp(Config())
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true})
            } else {
                this.setState({loggedIn: false})
            }
        })
    }

    renderContent(){
        switch(this.state.loggedIn) {
            case true:
                return (
                    <View style={{height: 50}}>
                        <Button onPress={() => firebase.auth().signOut()}> Log Out </Button>
                    </View>
                )
            case false:
                return <LoginForm/>
            default:
                return <Spiner size={'large'}/>
        }
    }

    render() {
        return (
            <View>
                <Header headerText={'This is header'}/>
                {this.renderContent()}
            </View>
        )
    }
}

export default App;