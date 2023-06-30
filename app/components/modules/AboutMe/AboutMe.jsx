import React from 'react';
import styles from './styles.module.scss';
import SectionTitle from '@/ui/SectionTitle/SectionTitle';
import Photo from '@/ui/Photo/Photo';

export default function AboutMe() {
  return (
    <section className={styles.aboutMe}>
      <div className={styles.aboutMeDescription}>
        <SectionTitle title="About Me" number="01" />
        <div>
          <p>
            Hello! My name is Brittany and I enjoy creating things that live on the
            internet. My interest in web development started back in 2012 when I decided
            to try editing custom Tumblr themes — turns out hacking together a custom
            reblog button taught me a lot about HTML & CSS!
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at an
            <span className="underline-crecent"> advertising agency</span>,{' '}
            <span className="underline-crecent">a start-up</span>,{' '}
            <span className="underline-crecent">a huge corporation</span>, and a
            student-led design studio. My main focus these days is building accessible,
            inclusive products and digital experiences at
            <span className="underline-crecent">Upstatement</span> for a variety of
            clients.
          </p>
          <p>
            I also recently <span className="underline-crecent">launched a course</span>{' '}
            that covers everything you need to build a web app with the Spotify API using
            Node & React. Here are a few technologies I’ve been working with recently:
          </p>
        </div>
        <ul className={styles.aboutMeTecnologies}>
          <div className={styles.aboutMeTecnologiesLeft}>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
          </div>
          <div className={styles.aboutMeTecnologiesRigth}>
            <li>TypeScript</li>
            <li>Sanity</li>
            <li>AWS (Some services)</li>
          </div>
        </ul>
      </div>
      <Photo image="/assets/aboutMe/me.jpg" width={250} height={250} alt="" />
    </section>
  );
}
