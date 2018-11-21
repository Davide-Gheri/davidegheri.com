import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import Header from './index';

beforeEach(() => {
  configure({adapter: new Adapter});
});

describe('Navbar ', () => {
  describe('should set the state based on props', () => {
    it('should set transparent to false if props.transparent is false', () => {
      const el = mount(<Header siteTitle="test" transparent={false}/>);
      expect(el.state()).toEqual({transparent: false});
      el.unmount();
    });

    it('should set transparent to true if props.transparent is true', () => {
      const el = mount(<Header siteTitle="test" transparent={true}/>);
      expect(el.state()).toEqual({transparent: true});
      el.unmount();
    });
  });

  it('should change the transparent state on window scroll if scrolling is > than window.height (768px)', () => {
    const el = mount(<Header siteTitle="test" transparent={true}/>);
    expect(el.state()).toEqual({transparent: true});
    (global as any).pageYOffset = 1000;
    (el.instance() as any).handleScroll();
    expect(el.state()).toEqual({transparent: false});
    el.unmount();
  });

  it('should not change the transparent state on window scroll if scrolling is < than window.height (768px) - offset (100)', () => {
    const el = mount(<Header siteTitle="test" transparent={true}/>);
    expect(el.state()).toEqual({transparent: true});
    (global as any).pageYOffset = 500;
    (el.instance() as any).handleScroll();
    expect(el.state()).toEqual({transparent: true});
    el.unmount();
  });
});
