import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'

export default class AddToDo extends Component {
    render() {
        return ( // return 꼭 해주기 ㅋㅋ
            <View>
                <TextInput></TextInput>
                <Button title="A" // react는 button에 title이 있어야 함!
                />

            </View>
        )
    }
}