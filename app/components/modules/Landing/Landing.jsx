import React from 'react';
import styles from './styles.module.scss';
import AboutMe from '../AboutMe/AboutMe';
import Work from '../Work/Work';
import Projects from '../Projects/Projects';
import SectionTitle from '@/ui/SectionTitle/SectionTitle';
import MyPortableTextComponents from '@/ui/PortableText/MyPortableTextComponents';

export default function Landing({ data }) {
  const { authorData, aboutData, workData, projectsData, contactData } = data;

  return (
    <div className="container">
      <section className={styles.section}>
        <p className={styles.sectionMeeting}>Hi, my name is</p>
        <h1 className={styles.sectionPresentation}>
          <span>{authorData.name}</span>
          <br /> I build things for the web.
        </h1>
        <p className={styles.sectionDescription}>
          <MyPortableTextComponents value={authorData.description} />
          {/* <span className="underline-crecent"> Upstatement.</span> */}
        </p>
        <a
          href={authorData.github}
          className={`btn-outline-green ${styles.sectionButton}`}
          type="button"
        >
          Check out my GitHub!
        </a>
      </section>
      <AboutMe aboutData={aboutData} />
      <Work workData={workData} />
      <Projects projectsData={projectsData} />
      <div className={styles.sectionContact} id="contact">
        <SectionTitle title={contactData.title} number="04" />
        <p className={styles.sectionContactDescription}>
          <MyPortableTextComponents value={contactData.description} />
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
