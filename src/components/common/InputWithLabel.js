import React from 'react';
import {View, Text, TextInput} from 'react-native';

const InputWithLabel = (props) => {
    return (
        <View>
            <Text>
                {props.label}
            </Text>
            <TextInput
                value={props.value}
                onChangeText={props.onChangeText}
                style={{height: 30, width: 250}}/>
        </View>
    )
}

export {InputWithLabel};