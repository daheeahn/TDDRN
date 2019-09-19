import React from 'react';
import ToDoItem, { styles } from '../ToDoItem';
import { shallow } from 'enzyme';

describe('rendering', () => {
    let props;
    let wrapper;

    beforeEach(() => {
        props = {
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
        it('should have the default style', () => { // 스타일 정도만 체크
            expect(wrapper.prop('style')).toBe(styles.default);
        })
    })

    // describe('Uncompleted', () => { // describe 중첩 가능
    //     it('should have the default style', () => {

    //     })
    // })
})