import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { PureFooter } from './index';
import { FooterQuery } from '../../interfaces';

beforeEach(() => {
  configure({adapter: new Adapter});
});

test('PureFooter should render passed data', () => {
  const data: FooterQuery = {
    datoCmsFooter: {},
  };
  const el = shallow(<PureFooter data={data}/>);
  expect(el.contains(<h3>davidegheri.com is built thanks to:</h3>)).toBeTruthy();
  expect(el.contains(<p>DavideGheri.com | Made with ♥ by Davide Gheri</p>)).toBeTruthy();
  expect(el.contains('ReactJs')).toBeFalsy();
});
