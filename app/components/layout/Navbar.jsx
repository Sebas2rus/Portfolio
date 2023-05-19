import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <a className={styles.headerLogo}>Logo</a>
      <ul className={styles.headerList}>
        <li>
          <Link href={"#"} className={styles.headerListLink}>
            <span>01.</span>About
          </Link>
        </li>
        <li>
          <Link href={"#"} className={styles.headerListLink}>
            <span>02.</span>Experience
          </Link>
        </li>
        <li>
          <Link href={"#"} className={styles.headerListLink}>
            <span>03.</span>Work
          </Link>
        </li>
        <li>
          <Link href={"#"} className={styles.headerListLink}>
            <span>04.</span>Contact
          </Link>
        </li>
        <li>
          <Link href={"#"} className={styles.headerListLink}>
            Resume
          </Link>
        </li>
      </ul>
    </header>
  );
}
