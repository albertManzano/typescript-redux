import React, { FunctionComponent } from 'react'; /* eslint-disable-line */
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';
import './SideDrawer.sass';

const SideDrawer = ({ show, clickBack }) => {
	return (
		<Aux>
			<Backdrop show={show} clickBack={clickBack} />
			{show ? <div className="SideDrawer open">
				<Logo size={false} />
				<nav>
					<NavigationItems />
				</nav>
			</div>
			:
			<div className="SideDrawer close">
			<Logo size={false} />
			<nav>
				<NavigationItems />
			</nav>
		</div>}
		</Aux>
	);
};

export default SideDrawer;
