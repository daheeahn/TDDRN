/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View testID="welcome">
      <Text>ToDo TDD</Text>
      <AddToDo />
      <ToDoList />
    </View>
  );
};

export default App;
