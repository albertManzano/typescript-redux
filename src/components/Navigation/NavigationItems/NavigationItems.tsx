import React from 'react';/* eslint-disable-line */
import './NavigationItems.sass'


import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = () =>{
    return (
        <ul className='NavigationItems'>
          <NavigationItem link='/' active={false} >Burguer Constructor</NavigationItem>
          <NavigationItem link='/orders' active={false} >Orders</NavigationItem>
        </ul>
    )

};

export default NavigationItems;