import styles from '../styles/components/SetNotification.module.css';
import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor: 'rgba(255, 255, 255)',
  },
  overlay:{
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    position: 'fixed',
  }
};

export function SetNotification(){

  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#2e384d;';
  }
 
  function closeModal(){
    setIsOpen(false);
  }

  return(
    <div className={styles.container}>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div className={styles.content}>
            {/* <button onClick={closeModal}>X</button> */}
            <h2 ref={_subtitle => (subtitle = _subtitle)}>Por favor, permita as notificações para ser alertado sempre que surgir um novo desafio</h2>
          </div>
        </Modal>
      </div>
  );
}