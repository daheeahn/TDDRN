import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
export default class ToDoItem extends Component {
    _onCompleted = () => {
        const { onCompleted, index } = this.props;
        onCompleted(index);
    }
    
    _onDeleted = () => {
        const { onDeleted, index } = this.props;
        onDeleted(index);
    }

    render() {
        const { item } = this.props;
        return (
            <View style={item.completed ? styles.completed : styles.default}>
                <Text></Text>
                <Button title="C" onPress={this._onCompleted} />
                <Button title="D" onPress={this._onDeleted}/>
            </View>
        )
    }
}

export const styles = StyleSheet.create({
    default: {
        backgroundColor: 'white',
    },
    completed: {
        backgroundColor: 'red',
    }
})