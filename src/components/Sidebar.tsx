import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import styles from '../styles/components/Sidebar.module.css';
import {Container} from '../styles/components/SidebarStyle';



export function Sidebar({toggleTheme}) : JSX.Element{

  const {title} = useContext(ThemeContext);

  return (
    <Container>
        <div className={styles.logo}>
          <img src="logo-2.png" alt="" className={styles.logoImg}/>
        </div>
        <nav className={styles.navbar}>
          <a href="#"><img src="/icons/home.svg" alt="Home"/></a>
          <a href="#"><img src="/icons/leaderboard.svg" alt="Leaderboard"/></a>
        </nav> 
        <div>
        <button type="button" className={styles.themeBtn} onClick={toggleTheme}>
          {title === 'dark' ? <img src={`/icons/moon.svg`} alt="" className={styles.themeBtnImgActive}/>
          : <img src={`/icons/moon.svg`} alt="" className={styles.themeBtnImgDisable}/>
          }
          </button>
        <div className={styles.logout}>
          <a href="#">
            <img src="/icons/logout.svg" alt="Home"/>
          </a>
        </div>
        </div>
    </Container>
  );
}