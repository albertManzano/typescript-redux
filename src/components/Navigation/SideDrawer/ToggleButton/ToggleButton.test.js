import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ToggleButton from './ToggleButton';

configure({ adapter: new Adapter() });

describe('<ToggleButton /> ', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ToggleButton/>)
    });

    it('should exist',()=>{
        expect(wrapper.html()).toBeDefined()
    });

    it('should render always',()=>{
        expect(wrapper).toMatchSnapshot()
    })
})
