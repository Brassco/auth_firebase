import React, {Component} from 'react';
import {Button, Card, CardItem, InputWithLabel} from './common';

class LoginForm extends Component {
    state = {
        email: ''
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
                    <InputWithLabel/>
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