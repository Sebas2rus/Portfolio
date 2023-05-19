import React from 'react';
import styles from './styles.module.scss';

export default function Sidebars() {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.sidebarLeft}>
        <li>
          <i className="bi bi-instagram" />
        </li>
        <li>
          <i className="bi bi-linkedin" />
        </li>
        <li>
          <i className="bi bi-twitter" />
        </li>
        <li>
          <i className="bi bi-github" />
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
