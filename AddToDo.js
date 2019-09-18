import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'

export default class AddToDo extends Component {

    state = {
        text: '',
    }

    _onChangeText = (text) => {
        this.setState({ text })
    }

    _onPress = () => {
        const { onAdded } = this.props;
        onAdded(this.state.text);
    }

    render() {
        return ( // return 꼭 해주기 ㅋㅋ
            <View>
                <TextInput onChangeText={this._onChangeText}></TextInput>
                <Button 
                    title="A" // react는 button에 title이 있어야 함!
                    onPress={this._onPress}
                />
            </View>
        )
    }
}