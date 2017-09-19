import React from 'react';
import {View, Text} from 'react-native';

const Header = (props) => {
    const {textStyle, viewStyle} = style;
    return (
        <View style = {viewStyle}>
            <Text style = {textStyle}> {props.headerText}</Text>
        </View>
    )
}

const style = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#9f9f96',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        paddingTop: 5,
        shadowColor: '#000',
        shadowOffset: {width:5, height: 25},
        shadowOpacity: 0.9
    }
}

export {Header};
