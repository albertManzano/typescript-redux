import React from 'react'; /* eslint-disable-line */
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleButton from '../SideDrawer/ToggleButton/ToggleButton';
import './Navigator.sass';

const Navigator = ({ clicked }: { clicked: MutationCallback }) => {
  return (
    <header className="Navigator">
      <ToggleButton clicked={clicked} />
      <Logo size />
      <nav className="Navigator--mvl">
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Navigator;
