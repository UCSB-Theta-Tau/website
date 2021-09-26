import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: left;
  background: rgba(0, 0, 0, 0.9);
  transition: opacity 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Raleway,sans-serif;
`;

export const ModalCloseContainer = styled.div`
  display: flex;
  align-items: right;
  justify-content: right;
  width: 100%;
  padding-bottom: 0.75em;
`;

export const ModalClose = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

export const LinkedinButton = styled(FontAwesomeIcon)`
  padding-top: 0.5em;
  cursor: pointer;
  font-size: 1.5em;
  color: #333;
`;

export const ModalInner = styled.div`
  transition: top 0.25s ease;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 40%;
  margin: auto;
  background: white;
  border-radius: 5px;
  padding: 2em 4em 4em 4em;
  overflow-y: scroll !important;
  max-height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    width: 70%;
    padding: 1em 2em 2em 2em;
  }
`;

export const ModalSubtitle = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 1.25em;
  padding-top: 0.25em;
  padding-bottom: 0.1em;
`;

export const ModalText = styled.div`
  width: 100%;
  font-size: 1em;
`;

export const ModalProfile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 480px) {
    flex-direction: column-reverse;
    justify-content: left;
    align-items: left;
  }
`;

export const ModalProfileImage = styled.img`
  width: 30%;
  border: 1px solid black;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
