/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './NavBar.module.css';
import logo from '../../public/images/logo.png';
import { signOut } from '../../utils/auth';

export default function NavBar() {
  return (
    <nav className={`navbar navbar-expand-md ${styles.navbar}`}>
      <div className={`container-fluid ${styles.navContainer}`}>
        <Link passHref href="/">
          <a className={`navbar-brand ${styles.navbarBrand}`}>
            <Image src={logo} height={60} width={60} className={styles.logo} />
            {/* 📒 PROject Planner */}
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className={`navbar-nav me-auto ${styles.navbarNav}`}>
            <div className={`nav-links ${styles.navLinks}`}>
              <li className="nav-item">
                <Link passHref href="/">
                  <a className={`${styles.navLink} nav-link`}>
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link passHref href="/project/new">
                  <a className={`${styles.navLink} nav-link`}>
                    Add New Project
                  </a>
                </Link>
              </li>
            </div>
            {/* <SearchBar /> */}
            <button type="button" className={styles.signOutBtn} onClick={signOut}>
              Sign Out
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
