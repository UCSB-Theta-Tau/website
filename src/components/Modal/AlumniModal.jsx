import React from 'react';
import {
  Modal, ModalInner,
} from './Modal.styles';

const AlumniModal = (props) => (
  <Modal>
    <ModalInner>
      {props.hi}
    </ModalInner>
  </Modal>
);

export { AlumniModal };
