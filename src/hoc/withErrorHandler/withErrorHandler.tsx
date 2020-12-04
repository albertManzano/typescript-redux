/* eslint-disable react/display-name */
import './withErrorHandler.sass';

import React from 'react'; /* eslint-disable-line */
import useHttpErrorHandler from '../../hooks/http-error-handler';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, api) => {
  return (props) => {
    const [error, clearError] = useHttpErrorHandler(api);

    return (
      <>
        <Modal show={error} modalClosed={clearError}>
          {error ? error : null}
        </Modal>
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default withErrorHandler;
