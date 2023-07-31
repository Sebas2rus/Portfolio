import React from 'react';
import styles from './styles.module.scss';
import SectionTitle from '@/ui/SectionTitle/SectionTitle';
import Photo from '@/ui/Photo/Photo';
import MyPortableTextComponents from '@/ui/PortableText/MyPortableTextComponents';

export default function AboutMe({ aboutData }) {
  // eslint-disable-next-line object-curly-newline
  const { title, technologies, description, photo } = aboutData;
  return (
    <section className={styles.aboutMe} id="about">
      <div className={styles.aboutMeDescription}>
        <SectionTitle title={title} number="01" />
        <div>
          <MyPortableTextComponents value={description} />
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
