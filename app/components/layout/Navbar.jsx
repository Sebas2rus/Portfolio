/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

export default function Navbar() {
  const [display, setDisplay] = useState('noVisible');
  const [clientWindowHeight, setClientWindowHeight] = useState();

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  console.log(clientWindowHeight);
  return (
    <div>
      <header className={styles.header}>
        <Link href="#" className={styles.headerLogo}>
          S
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
      <header className={styles.mobile}>
        <div className={styles.mobileHeader}>
          <a href="#" className={styles.headerLogo}>
            S
          </a>
          <button
            type="button"
            onClick={() => setDisplay('visible')}
            className="btn-menu"
          >
            <i className="bi bi-list" />
          </button>
        </div>
        <div
          role="button"
          className={`${
            display === 'noVisible' ? styles.invisible : styles.mobileNavbar
          } ? `}
          onClick={() => setDisplay('noVisible')}
        >
          <ul className={styles.mobileNavbarList}>
            <li>
              <Link href="#" className={styles.mobileNavbarListLink}>
                <span>01.</span> <br />
                About
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.headerListLink}>
                <span>02.</span> <br />
                Experience
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.headerListLink}>
                <span>03.</span> <br />
                Work
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.headerListLink}>
                <span>04.</span>
                <br />
                Contact
              </Link>
            </li>
            <li>
              <button href="#" type="button" className="btn-outline-green a">
                Resume
              </button>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
