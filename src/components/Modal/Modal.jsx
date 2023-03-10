import propTypes from 'prop-types';
import { ModalWindow, Overlay } from './Modal.styled';

export const Modal = ({ src, alt, handleClose }) => (
    <Overlay onClick={handleClose}>
        <ModalWindow>
            <img src={src} alt={alt} />
        </ModalWindow>
    </Overlay>
);

Modal.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  handleClose: propTypes.func.isRequired,
};
