import React from 'react';
import styles from './styles.module.scss';
import AboutMe from '../AboutMe/AboutMe';

export default function Landing() {
  return (
    <div className="container">
      <section className={styles.section}>
        <p className={styles.sectionMeeting}>Hi, my name is</p>
        <h1 className={styles.sectionPresentation}>
          <span>Sebastián González</span>
          <br /> I build things for the web.
        </h1>
        <p className={styles.sectionDescription}>
          I’m a software engineer specializing in building (and occasionally designing)
          exceptional digital experiences. Currently, I’m focused on building accessible,
          human-centered products at
          <span className="underline-crecent"> Upstatement.</span>
        </p>
        <button className={`btn-outline-green ${styles.sectionButton}`} type="button">
          Check out my GitHub!
        </button>
      </section>
      <AboutMe />
    </div>
  );
}
