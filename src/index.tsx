import * as React from 'react'; /* eslint-disable-line */
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import burguerConstructorReducer from './store/reducers/burguerConstructor';
import orderReducer from './store/reducers/order';

const composeEnhancers = (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

const rootReducer = combineReducers({
	burguerConstructor: burguerConstructorReducer,
	order: orderReducer
})

const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(thunk)
));

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
