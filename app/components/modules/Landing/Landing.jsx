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
        </p>
        <a
          href={authorData.github}
          className={`btn-outline-green ${styles.sectionButton}`}
          type="button"
          target="_blank"
          rel="noreferrer"
        >
          Check out my GitHub!
        </a>
      </section>
      <AboutMe aboutData={aboutData} />
      <Work workData={workData} />
      <Projects projectsData={projectsData} />
      <div className={styles.sectionContact} id="contact">
        <SectionTitle title={contactData.title} number="04" />
        <div className={styles.sectionContactDescription}>
          <MyPortableTextComponents value={contactData.description} />
        </div>
        <a
          href={`mailto:${contactData.email}`}
          className={`btn-outline-green ${styles.sectionContactButton}`}
          type="button"
        >
          Say Hello !!
        </a>
      </div>
    </div>
  );
}
