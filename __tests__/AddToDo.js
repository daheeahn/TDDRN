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

describe('Interaction', () => {
    let wrapper; // here!
    let props;
    const text = 'some ToDo';
  
    beforeEach(() => {
      props = {
          onAdded: jest.fn(), // 이 함수가 몇 번 호출되었는지 등등을 확인 가능!
      }
      wrapper = shallow(<AddToDo {...props}></AddToDo>);
    //   wrapper = shallow(<AddToDo onAdded={jest.fn()}></AddToDo>); // 이 onAdded를 접근을 아래 it에서 해야하는게 이렇게하면 아래서 onAdded 못써. 그래서 위에 props로!

      // Button을 한 번 클릭해야하는거잖아!
      wrapper.find('TextInput').simulate('changeText', text);
      wrapper.find('Button').prop('onPress')(); // 버튼 눌린 것과 같은 동작 가능!
    })

    it('should call the onAdded callback with input text', () => {
        expect(props.onAdded).toHaveBeenCalledTimes(1); // 버튼을 눌렀을 때 콜백이 불리고
        expect(props.onAdded).toHaveBeenCalledWith(text); // 이 text가 전달되는가?
    })
})