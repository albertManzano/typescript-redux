import React from 'react';

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import jest from '@testing-library/jest-dom'
import Sidedrawer from './SideDrawer';
import ToggleButton from './ToggleButton/ToggleButton';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo'
import Aux from '../../../hoc/Aux/Aux'

configure({ adapter: new Adapter() });

describe('<SideDrawer />', () => {
    let wrapper;
    // const clicFn = jest.fn()

    describe('<SideDrawer show/>', () => {
        beforeEach(() => {
            wrapper = shallow(<Sidedrawer show={true} />)
        });

        it('should exist <div class="close">', () => {
            expect(wrapper.html('div.SideDrower')).toContain('open')
        });

        it('should render open drawer', () => {
            expect(wrapper).toMatchSnapshot()
        });

        it('should render the logo and NavigationItems if show is true', () => {
            expect(wrapper.find(<Logo />)).toBeDefined
        });
    });

    describe('<SideDrawer show={false}/>', () => {
        beforeEach(() => {
            wrapper = shallow(<Sidedrawer show={false} />)
        });

        it('should exist <div class="close">', () => {
            expect(wrapper.html('div.SideDrower')).toContain('close')
        });

        it('should render close drawer', () => {
            expect(wrapper).toMatchSnapshot()
        });

    }); 
    
}); 