import React, { FunctionComponent, useState } from 'react'; /* eslint-disable-line */
import Aux from '../Aux/Aux';
import Navigator from '../../components/Navigation/Navigator/Navigator';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import './Layout.sass';

const Layout: FunctionComponent = ({ children }) => {
	let [ show, setShown ] = useState<boolean>(false);

	function toggleDrawer() {
		setShown(() => {
			return !show;
		});
	}

	return (
		<Aux>
			<Navigator clicked={toggleDrawer} />
			<SideDrawer show={show} clickBack={toggleDrawer} />
			<main className="container">{children}</main>
		</Aux>
	);
};

export default Layout;
