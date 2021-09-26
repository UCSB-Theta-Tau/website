import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  Modal, ModalInner, ModalCloseContainer, ModalClose, ModalSubtitle, ModalText, LinkedinButton,
  ModalProfile, ModalProfileImage,
} from './Modal.styles';

const ActiveModal = (props) => {
  const hideModal = () => {
    props.setShow(false);
  };

  return (
    <Modal>
      <ModalInner>
        <ModalCloseContainer>
          <ModalClose icon={faTimes} onClick={hideModal} />
        </ModalCloseContainer>
        <ModalProfile>
          <div style={{ width: '100%' }}>
            <ModalSubtitle>Name</ModalSubtitle>
            <ModalText>{props.name}</ModalText>
            <ModalSubtitle>Year/Major</ModalSubtitle>
            <ModalText>{props.year}</ModalText>
            <ModalSubtitle>Pledge Class</ModalSubtitle>
            <ModalText>
              {props.pledgeClass.charAt(0).toUpperCase() + props.pledgeClass.slice(1)}
            </ModalText>
            <ModalSubtitle>Hometown</ModalSubtitle>
            <ModalText>{props.hometown}</ModalText>
          </div>
          <ModalProfileImage src={`${process.env.PUBLIC_URL}/static/profiles/${props.pledgeClass}/${props.img}`} alt={props.name} />
        </ModalProfile>
        <ModalSubtitle>Why I joined Theta Tau</ModalSubtitle>
        <ModalText>{props.why}</ModalText>
        <ModalSubtitle>What I enjoy about Theta Tau</ModalSubtitle>
        <ModalText>{props.what}</ModalText>
        <ModalSubtitle>About me</ModalSubtitle>
        <ModalText>{props.about}</ModalText>
        <a target="_blank" href={props.linkedin} rel="noreferrer">
          <LinkedinButton icon={faLinkedin} />
        </a>
      </ModalInner>
    </Modal>
  );
};

export { ActiveModal };
