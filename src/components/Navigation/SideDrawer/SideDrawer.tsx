import React from 'react'; /* eslint-disable-line */
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.sass';

const SideDrawer = ({ show, clickBack }) => {
  return (
    <>
      <Backdrop show={show} clickBack={clickBack} />
      {show ? (
        <div className="SideDrawer open">
          <Logo size={false} />
          <nav>
            <NavigationItems />
          </nav>
        </div>
      ) : (
        <div className="SideDrawer close">
          <Logo size={false} />
          <nav>
            <NavigationItems />
          </nav>
        </div>
      )}
    </>
  );
};

export default SideDrawer;
