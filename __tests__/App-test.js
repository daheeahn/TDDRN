/**
 * @format
 */

import 'react-native';
import {Text} from 'react-native';
import React from 'react';
import App from '../App';
import {shallow} from 'enzyme';

describe('App', () => {
  const wrapper = shallow(<App></App>);
  it('is Text visible?', () => { // RDD describe it!
    expect(wrapper.find('Text').contains('ToDo TDD')).toBe(true);
  })

  it('is AddToDo visible?', () => { // 이거만 만들고 yarn test하면 실패하겠지
    expect(wrapper.find('AddToDo')).toHaveLength(1); // toBeVisible 은 Jest에서 제공하는 함수가 아니다 toHave로~
  })

  it('is ToDoList visible?', () => {
    expect(wrapper.find('ToDoList')).toHaveLength(1);
  })
})