import React, {Component} from 'react';
import {TextInput} from 'react-native';
import {Button, Card, CardItem} from './common';

class LoginForm extends Component {
    render() {
        return(
            <Card>
                <CardItem>
                    <TextInput style={{height: 20, width: 50}}/>
                </CardItem>
                <CardItem>
                    <TextInput/>
                </CardItem>
                <CardItem>
                    <Button>
                        Login
                    </Button>
                </CardItem>
            </Card>
        )
    }
}

export default LoginForm;