import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Layout, { PureLayout } from './index';
import { SeoQuery } from '../../interfaces/seo';

beforeEach(() => {
  configure({adapter: new Adapter});
});

describe('Layout should render correctly', () => {
  it('should true', () => {
    const data: SeoQuery = {
      datoCmsSite: {
        name: 'Test',
        globalSeo: {
          siteName: 'Test',
        },
      },
    };
    const el = shallow(<PureLayout data={data}>test</PureLayout>);
    expect(el.contains('test')).toBeTruthy();
  });
});
