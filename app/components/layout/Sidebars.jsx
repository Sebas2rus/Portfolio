import React from 'react';
import styles from './styles.module.scss';

export default function Sidebars({ authorData }) {
  // eslint-disable-next-line object-curly-newline
  const { twitter, github, instagram, linkedin } = authorData;
  return (
    <div className={styles.sidebar}>
      <ul className={styles.sidebarLeft}>
        <li>
          {instagram && (
            <a href={instagram} target="_blank" rel="noreferrer">
              <i className="bi bi-instagram" />
            </a>
          )}
        </li>
        <li>
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin" />
            </a>
          )}
        </li>
        <li>
          {twitter && (
            <a href={twitter} target="_blank" rel="noreferrer">
              <i className="bi bi-twitter" />
            </a>
          )}
        </li>
        <li>
          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              <i className="bi bi-github" />
            </a>
          )}
        </li>
        <li>
          <span />
        </li>
      </ul>
      <ul className={styles.sidebarRight}>
        <li>
          <p>sebas2rus@gmail.com</p>
        </li>
        <li>
          <span />
        </li>
      </ul>
    </div>
  );
}
