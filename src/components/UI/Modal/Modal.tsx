import React from 'react';/* eslint-disable-line */
import './Modal.sass';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({ children, show, modalClosed }) => {
	return (
		<Aux>
			<Backdrop show={show} clickBack={modalClosed} />
			<div
				className="modal"
				style={{
					transform: show ? 'translateY(0)' : 'translateY(-100vh)',
					opacity: show ? '1' : '0'
				}}
			>
				{children}
			</div>
		</Aux>
	);
};

export default Modal;
