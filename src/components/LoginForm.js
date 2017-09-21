import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardItem, InputWithLabel, ErrorText, Spiner} from './common';

class LoginForm extends Component {
    state = {
        email: 'test@mail.com',
        password: 'password',
        error: '',
        loading: false
    }

    onButtonPres() {
        const {email, password} = this.state;

        this.setState({error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch((error) => {
                        this.setState({error: 'Auth error'});
                    })
            })
    }

    renderButton() {
        if(this.state.loading) {
            return <Spiner size={"small"}/>
        }

        return (
            <Button onPress={this.onButtonPres.bind(this)}>
                Login
            </Button>
        )
    }

    render() {
        return(
            <Card>
                <CardItem>
                    <InputWithLabel
                        placeholder={'test@mail.com'}
                        label={'Email'}
                        value={this.state.email}
                        onChangeText={email => this.setState({email: email})}
                    />
                </CardItem>
                <CardItem>
                    <InputWithLabel
                        secureTextEntry
                        placeholder={'password'}
                        label={'Password'}
                        value={this.state.password}
                        onChangeText={password => this.setState({password: password})}
                    />
                </CardItem>
                <ErrorText>
                    {this.state.error}
                </ErrorText>
                <CardItem>
                    {this.renderButton()}
                </CardItem>
            </Card>
        )
    }
}

export default LoginForm;