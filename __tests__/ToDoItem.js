import React from 'react';
import ToDoItem from '../ToDoItem';
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
})