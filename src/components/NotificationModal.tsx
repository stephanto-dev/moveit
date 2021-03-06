import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/NotificationModal.module.css';

export function NotificationModal(){
  const {closeNotificationModal} = useContext(ChallengesContext);

  return(
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>Seja alertado quando surgir um novo desafio!</header>
        <br/>
        <strong>Permita o envio de notificações em seu navegador</strong>

        {/* <button type="button" onClick={closeNotificationModal}>
          <img src="/icons/close.svg" alt="Fechar modal"/>
        </button> */}
      </div>
    </div>
  );
}