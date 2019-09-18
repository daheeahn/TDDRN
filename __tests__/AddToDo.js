/**
 * @format
 */
// same with App-test.js but see here!!!
import 'react-native';
import {Text} from 'react-native';
import React from 'react';
import AddToDo from '../AddToDo'; // here!
import {shallow} from 'enzyme';

describe('Rendering', () => { // rendering!! // here!
  let wrapper = shallow(<AddToDo></AddToDo>); // here!

  beforeEach(() => {
    wrapper = shallow(<AddToDo></AddToDo>) // 테스트 구문이 새로 돌아갈 때 마다 (it 돌아갈 때마다) 새로 렌더링을 해서 깨끗한 상태에서 테스트 돌리겠다!
  })

  it('is TextInput visible?', () => { // 이거만 만들고 yarn test하면 실패하겠지
    expect(wrapper.find('TextInput')).toHaveLength(1); // toBeVisible 은 Jest에서 제공하는 함수가 아니다 toHave로~
  })

  it('is Button visible?', () => {
    expect(wrapper.find('Button')).toHaveLength(1);
  })
})