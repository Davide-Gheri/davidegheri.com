import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Footer from './index';

beforeEach(() => {
  configure({adapter: new Adapter});
});

test('Footer should render passed children correctly', () => {
  const el = shallow(<Footer><span>Test</span></Footer>);
  expect(el.contains(<span>Test</span>)).toBeTruthy();
});
