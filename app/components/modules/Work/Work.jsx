import React, { useState } from 'react';
import SectionTitle from '@/ui/SectionTitle/SectionTitle';
import styles from './styles.module.scss';

export default function Work({ workData }) {
  const [workName, setWorkName] = useState('Parque Explora');
  const { title, jobs } = workData;
  const works = jobs.map((job, i) => job.job.company);
  const workDescription = jobs.map((job, i) => job.job);

  console.log(workDescription);
  return (
    <div className="container">
      <SectionTitle title={title} number="02" />
      <div className={styles.work}>
        <div className={styles.workNames}>
          {works.map((work, index) => (
            <button
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className={
                workName === work
                  ? styles.workNamesSectionSelected
                  : styles.workNamesSection
              }
              type="button"
              onClick={() => setWorkName(work)}
            >
              {work}
            </button>
          ))}
        </div>
        {workDescription.map((work, index) => {
          if (workName === work.company)
            return (
              <div key={index} className={styles.workInfo}>
                <h3 className={styles.workInfoTitle}>
                  {work.position} <span className="bg-text-emp">@</span>
                  <span className="underline-crecent">{work.company}</span>
                </h3>
                <p className={styles.workInfoDates}>{work.dates}</p>
                <ul className={styles.workInfoDescription}>
                  {work?.activities.map((activity, i) => (
                    <li key={i}>{activity}</li>
                  ))}
                </ul>
              </div>
            );
        })}
      </div>
    </div>
  );
}
