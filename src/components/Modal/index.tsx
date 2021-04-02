import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean
  children: JSX.Element
  setIsOpen: () => void
}

function Modal ({ isOpen, children, setIsOpen }: ModalProps) {
  const [modalStatus, setModalStatus] = useState(isOpen)

  useEffect(() => {
    if (isOpen !== modalStatus) {
      setModalStatus(isOpen)
    }
  }, [isOpen, modalStatus])

  console.log(modalStatus)
  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;