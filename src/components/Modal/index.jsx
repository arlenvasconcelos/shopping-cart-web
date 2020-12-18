import React from 'react';
import PropTypes, { func, string } from 'prop-types';
import { FiAlertTriangle, FiCheckCircle, FiX } from 'react-icons/fi';

import { Container, ModalBody, ModalHeader } from './styles';

export default function Modal({
  type, action, message, btnTitle, handleClose,
}) {
  return (
    <>
      <Container>
        <div>
          <ModalHeader>
            <div>
              <button type="button" aria-label="Fechar" onClick={handleClose}>
                <FiX />
              </button>
            </div>
          </ModalHeader>
          <ModalBody>
            <div>
              {
                type === 'success' && (
                  <FiCheckCircle size={60} color="#04D361" />
                )
              }
              {
                type === 'warning' && (
                  <FiAlertTriangle size={60} color="#FDC230" />
                )
              }

            </div>
            <p>
              {message}
            </p>
            <button type="button" aria-label={btnTitle} onClick={action}>
              {btnTitle}
            </button>

          </ModalBody>
        </div>
      </Container>
    </>
  );
}

Modal.defaultProps = {
  type: 'success',
  btnTitle: 'ok',
};

Modal.propTypes = {
  type: PropTypes.string,
  action: func.isRequired,
  btnTitle: string,
  message: string.isRequired,
  handleClose: func.isRequired,
};
