import React from 'react'/* eslint-disable-line */

import'./NavigationItem.sass';

const NavigationItem = ({link,children,active}) =>  <li className='NavigationItem'><a className={active ? 'NavigationItem__link--active' : 'NavigationItem__link'} href={link}>{children}</a></li>;

export default NavigationItem;