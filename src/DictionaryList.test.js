import React from 'react';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import App from './App';
import Word from './word.json'
configure({ adapter: new Adapter() });

it('should render a list of dictionary ', () => {
  const mockProducts = Word.words;
  const wrapper = shallow(<App />);
  expect(wrapper.find('#img').length).toEqual(mockProducts.length); 
});