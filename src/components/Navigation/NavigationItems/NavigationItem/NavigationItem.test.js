import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItem from './NavigationItem';

configure({ adapter: new Adapter })

describe('<NavigationItem />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<NavigationItem />)
    })

    it('should exist', () => {
        expect(wrapper.html()).toBeDefined()
    })

    it('should be one component', () => {
        expect(wrapper).toHaveLength(1)
    })

    it('should be represent props passed', () => {
        wrapper.setProps({ link: '/', children: 'Burguer' });
        expect(wrapper.contains(<li className='NavigationItem'><a className={'NavigationItem__link'} href='/'>Burguer</a></li>)).toEqual(true)
    })

    it('should change styles toggled by active prop',()=>{
        wrapper.setProps({ link: '/', children: 'Burguer' ,active: true })
        
    })
})

