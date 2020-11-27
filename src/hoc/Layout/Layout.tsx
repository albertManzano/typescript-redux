import React, { FunctionComponent, ReactChildren, useState } from 'react'; /* eslint-disable-line */
import './Layout.sass';

import Navigator from '../../components/Navigation/Navigator/Navigator';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

interface ILayout {
  children: JSX.IntrinsicAttributes;
}

const Layout = ({ children }: ILayout) => {
  const [show, setShown] = useState<boolean>(false);

  function toggleDrawer() {
    setShown(!show);
  }

  return (
    <>
      <Navigator clicked={toggleDrawer} />
      <SideDrawer show={show} clickBack={toggleDrawer} />
      <main className="container">{children}</main>
    </>
  );
};

export default Layout;
