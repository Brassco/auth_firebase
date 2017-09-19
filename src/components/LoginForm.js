import React, {Component} from 'react';
import {Button, Card, CardItem, InputWithLabel} from './common';

class LoginForm extends Component {
    state = {
        text: ''
    }
    render() {
        return(
            <Card>
                <CardItem>
                    <InputWithLabel
                        label={'label for input'}
                        value={this.state.text}
                        onChangeText={text => this.setState({text: text})}
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