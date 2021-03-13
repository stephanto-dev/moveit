import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import { ContextCountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";


import Head from 'next/head';
import {GetServerSideProps} from 'next';
import React from "react";


import styles from '../styles/pages/Home.module.css';
import { Sidebar } from "../components/Sidebar";
import { AppProps } from "next/dist/next-server/lib/router/router";


interface HomeProps{
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

const Home: React.FC<AppProps> = ({...pageProps}, props: HomeProps) =>{
// export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider 
    level={props.level}
    currentExperience = {props.currentExperience}
    challengesCompleted ={props.challengesCompleted}
    {...pageProps}
    >
      <div className={styles.sidebar}>
          <Sidebar toggleTheme={pageProps.toggleTheme}/>
      </div>
      <div className={styles.container}>
        <Head>
          <title>Início | Move.it</title>
        </Head>
        
      <ExperienceBar/>

      <ContextCountdownProvider>

        <section>

          <div>
            <Profile/>
            <CompletedChallenges/>
            <Countdown/>
          </div>
          <div>
            <ChallengeBox/>
          </div>
        </section>
      </ContextCountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export default Home;

export const getServerSideProps:GetServerSideProps = async (ctx) =>{

  const { level, currentExperience, challengesCompleted} = ctx.req.cookies;

  return{
    props:{
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}
