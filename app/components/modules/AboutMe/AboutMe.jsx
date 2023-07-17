import React from 'react';
import styles from './styles.module.scss';
import SectionTitle from '@/ui/SectionTitle/SectionTitle';
import Photo from '@/ui/Photo/Photo';
import { PortableText } from '@portabletext/react';

export default function AboutMe({ aboutData }) {
  const { title, technologies, description, photo } = aboutData;
  return (
    <section className={styles.aboutMe}>
      <div className={styles.aboutMeDescription}>
        <SectionTitle title={title} number="01" />
        <div>
          <PortableText value={description} />
        </div>
        <ul className={styles.aboutMeTecnologies}>
          {technologies?.map((technology, index) => (
            <li key={index}>{technology}</li>
          ))}
        </ul>
      </div>
      <Photo image={photo} width={250} height={250} alt="" />
    </section>
  );
}
