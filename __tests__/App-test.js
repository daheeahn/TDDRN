/**
 * @format
 */

import 'react-native';
import {Text} from 'react-native';
import React from 'react';
import App from '../App';
import {shallow} from 'enzyme';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });


describe('Jest', () => {
  it('is it working?', () => {
    const a = 1;
    expect(a + 1).toBe(2);
  });
});

describe('Enzyme', () => {
  it('is it working?', () => {
    const text = 'some text';
    const wrapper = shallow(<Text>{text}</Text>);
    expect(wrapper.text()).toBe(text);
  });
});
