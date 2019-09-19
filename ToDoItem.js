import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
export default class ToDoItem extends Component {
    render() {
        return (
            <View style={styles.default}>
                <Text></Text>
                <Button title="C" />
                <Button title="D" />
            </View>
        )
    }
}

export const styles = StyleSheet.create({
    default: {
        backgroundColor: 'white',
    }
})