import React, { ReactElement } from 'react'; /* eslint-disable-line */
import './App.css';
import Layout from './hoc/Layout/Layout';
import BurguerConstructor from './containers/BurgerConstructor/BurguerConstructor';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

import { Route, Switch } from 'react-router-dom';

function App(): ReactElement {
	return (
		<div>
			<Switch>
				<Layout>
					<Route path="/" exact component={BurguerConstructor} />
					<Route path="/orders" component={Orders} />
					<Route path="/checkout" component={Checkout} />
				</Layout>
			</Switch>
		</div>
	);
}

export default App;
