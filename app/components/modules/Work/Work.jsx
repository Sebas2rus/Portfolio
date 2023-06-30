import React, { useState } from 'react';
import SectionTitle from '@/ui/SectionTitle/SectionTitle';
import styles from './styles.module.scss';

export default function Work() {
  const [workName, setWorkName] = useState('Upstatement');
  const works = ['Upstatement', 'Apple', 'Scout Studio', 'Starry', 'Mul'];
  return (
    <div className="container">
      <SectionTitle title="Where I’ve Worked" number="02" />
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

        {workName === 'Upstatement' && (
          <div className={styles.workInfo}>
            <h3 className={styles.workInfoTitle}>
              UI Engineer Co-op <span className="bg-text-emp">@</span>
              <span className="underline-crecent"> Apple</span>
            </h3>
            <p className={styles.workInfoDates}>July - December 2017</p>
            <ul className={styles.workInfoDescription}>
              <li>
                Developed and styled interactive web applications for Apple Music using
                Ember and SCSS
              </li>
              <li>
                Built and shipped the Apple Music Extension for Facebook Messenger
                leveraging third-party and internal API integrations
              </li>
              <li>
                Architected and implemented the user interface of Apple Music&rsquo;s
                embeddable web player widget for in-browser user authorization and full
                song playback
              </li>
              <li>
                Contributed extensively to the creation of MusicKit JS, a public-facing
                JavaScript SDK for embedding Apple Music players into web applications
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
