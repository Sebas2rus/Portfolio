import React from 'react';
import styles from './styles.module.scss';
import AboutMe from '../AboutMe/AboutMe';
import Work from '../Work/Work';
import Projects from '../Projects/Projects';
import SectionTitle from '@/ui/SectionTitle/SectionTitle';

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
      <Work />
      <Projects />
      <div className={styles.sectionContact}>
        <SectionTitle title="What’s Next?" number="04" />
        <p className={styles.sectionContactDescription}>
          Although I’m not currently looking for any new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I’ll try my best to
          get back to you!
        </p>
        <button
          className={`btn-outline-green ${styles.sectionContactButton}`}
          type="button"
        >
          Say Hello !!
        </button>
      </div>
    </div>
  );
}
