import React, { useState } from "react";
import styles from '../styles/components/Sidebar.module.css';

export function Sidebar(){

  const [isDarkMode, setIsDarkMode] = useState(false);



  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="logo-2.png" alt="" className={styles.logoImg}/>
      </div>
      <nav className={styles.navbar}>
        <a href="#"><img src="/icons/home.svg" alt="Home"/></a>
        <a href="#"><img src="/icons/leaderboard.svg" alt="Leaderboard"/></a>
      </nav>
      <div>
      <button type="button" className={styles.themeBtn}>
        {isDarkMode ? <img src={`/icons/moon.svg`} alt="" className={styles.themeBtnImgActive}/>
         : <img src={`/icons/moon.svg`} alt="" className={styles.themeBtnImgDisable}/>
         }
        </button>
        <a href="#">
          <img src="/icons/logout.svg" alt="Home"/>
        </a>
      </div>
    </div>
  );
}