import React from 'react';
import styles from './styles.module.scss';
import AboutMe from '../AboutMe/AboutMe';
import Work from '../Work/Work';
import Projects from '../Projects/Projects';
import SectionTitle from '@/ui/SectionTitle/SectionTitle';
import { PortableText } from '@portabletext/react';

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
          {/* {authorData.description} */}
          <PortableText value={authorData.description} />
          <span className="underline-crecent"> Upstatement.</span>
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
      <div className={styles.sectionContact}>
        <SectionTitle title={contactData.title} number="04" />
        <PortableText
          value={contactData.description}
          className={styles.sectionContactDescription}
        />
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
