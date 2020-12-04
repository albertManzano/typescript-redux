import React, { ReactElement } from 'react'; /* eslint-disable-line */
import Layout from './hoc/Layout/Layout';
import BurgerConstructor from './containers/BurgerConstructor/BurgerConstructor';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

import { Route, Switch } from 'react-router-dom';

function App(): ReactElement {
  return (
    <div>
      <Switch>
        <Layout>
          <>
            <Route path="/" exact component={BurgerConstructor} />
            <Route path="/orders" component={Orders} />
            <Route path="/checkout" component={Checkout} />
          </>
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
