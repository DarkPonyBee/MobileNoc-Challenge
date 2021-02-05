import React from 'react';
import {Divider} from './Divider';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

describe('Divider', () => {
  it('should render without issue', () => {
    const component = shallow(<Divider />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});

Enzyme.configure({adapter: new Adapter()});
