import React, { useEffect, useState } from 'react'; /* eslint-disable-line */
import './withErrorHandler.sass';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';
import BurguerConstructor from '../../containers/BurgerConstructor/BurguerConstructor';
import Axios from 'axios';

function withErrorHandler(WrappedComponent, axios) {
	let error = null;

	useEffect(
		() => {
			axios.interceptors.request.use((req: object) => {
				error = null;
				return req;
			});
			axios.interceptors.response.use((res: object) => res, (err) => (error = err));
		},[]
	);

	const errorHandler = () => {
		error = null;
	};

	return (
		<Aux>
			<Modal show={error} modalClosed={errorHandler}>
				{error ? error : null}
			</Modal>
			<WrappedComponent props={WrappedComponent.props} />
		</Aux>
	);
}

export default withErrorHandler;
