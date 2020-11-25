import React from 'react'; /* eslint-disable-line */
import Backdrop from '../Backdrop/Backdrop';
import './Modal.sass';

const Modal = ({ children, show, modalClosed }) => {
  return (
    <>
      <Backdrop show={show} clickBack={modalClosed} />
      <div
        className="modal"
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
