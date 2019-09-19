import React from 'react';
import ToDoItem, { styles } from '../ToDoItem';
import { shallow } from 'enzyme';

describe('rendering', () => {
    let props;
    let wrapper;

    beforeEach(() => {
        props = {
            item: {}
        }
        wrapper = shallow(<ToDoItem {...props}></ToDoItem>);
    })

    it('should render a Text', () => {
        expect(wrapper.find('Text')).toHaveLength(1);
    })

    it('should render two buttons', () => {
        expect(wrapper.find('Button')).toHaveLength(2);
    })

    describe('Uncompleted', () => { // describe 중첩 가능
        it('should have the default style', () => { // 스타일 정도만 체크. default style을 꼭 가지게 되었다!
            expect(wrapper.prop('style')).toBe(styles.default);
        })
    })

    describe('Completed', () => { // describe 중첩 가능
        beforeEach(() => {
            // props = { // 이렇게 하면 새로 만들어지니
            //     completed: true
            // }
            props.item.completed = true; // !?
            wrapper = shallow(<ToDoItem {...props}></ToDoItem>)
        })
        it('should have the default style', () => { // 스타일이 바뀌니까 다시 beforeEach로 꺠끗하게 만들어줘야함
            expect(wrapper.prop('style')).toBe(styles.completed);
        })
    })
})