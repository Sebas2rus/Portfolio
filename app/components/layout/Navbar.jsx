/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Link href="#" className={styles.headerLogo}>
        Logo
      </Link>
      <ul className={styles.headerList}>
        <li>
          <Link href="#" className={styles.headerListLink}>
            <span>01.</span>About
          </Link>
        </li>
        <li>
          <Link href="#" className={styles.headerListLink}>
            <span>02.</span>Experience
          </Link>
        </li>
        <li>
          <Link href="#" className={styles.headerListLink}>
            <span>03.</span>Work
          </Link>
        </li>
        <li>
          <Link href="#" className={styles.headerListLink}>
            <span>04.</span>Contact
          </Link>
        </li>
        <li>
          <button href="#" type="button" className="btn-outline-green a">
            Resume
          </button>
        </li>
      </ul>
    </header>
  );
}
