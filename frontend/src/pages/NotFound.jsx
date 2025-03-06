import React from 'react';
import styles from '../styles/NotFound.module.css';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className={styles.notFoundWrapper}>
      <div className={styles.errorType}>404</div>
      <div className={styles.errorMessage}>Page Not Found</div>
      <div className={styles.errorDescription}>
        죄송합니다. 현재 찾을 수 없는 페이지를 요청하셨습니다.
      </div>
      <Link to="/">
        <div className={styles.homeButton}>Go Home!</div>
      </Link>
    </div>
  );
}
