import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.getElementById('modal-root');

function Modal({ children }) {
  return createPortal(children, modalRoot);
}

export default Modal;
