import './withErrorHandler.sass';

import React, { useEffect, useState } from 'react';

import Modal from '../../components/UI/Modal/Modal';

function withErrorHandler(WrappedComponent, axios) {
  let error = null;

  useEffect(() => {
    axios.interceptors.request.use((req: object) => {
      error = null;
      return req;
    });
    axios.interceptors.response.use(
      (res: object) => res,
      (err) => (error = err),
    );
  }, []);

  const errorHandler = () => {
    error = null;
  };

  return (
    <>
      <Modal show={error} modalClosed={errorHandler}>
        {error ? error : null}
      </Modal>
      <WrappedComponent props={WrappedComponent.props} />
    </>
  );
}

export default withErrorHandler;
