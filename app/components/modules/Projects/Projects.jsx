import React from 'react';
import SectionTitle from '@/ui/SectionTitle/SectionTitle';
import FeaturesProject from '@/ui/Cards/FeaturesProject';
import OtherProjects from '@/ui/Cards/OtherProjects';
import styles from './styles.module.scss';

export default function Projects({ projectsData }) {
  const { others, featured, title } = projectsData;
  console.log(projectsData);

  return (
    <div className="container">
      <SectionTitle number="03" title={title} />
      <FeaturesProject data={featured} />
      <h2 className={styles.ProjectsTitle}>Other Noteworthy Projects</h2>
      <p className={styles.ProjectsTitleSecondary}>
        <span className=" underline-crecent">view the archive</span>
      </p>

      <OtherProjects data={others} />
    </div>
  );
}
