// pages/404.tsx
import React from 'react';
import styles from './404.module.css'; // Import CSS module for styles

const Custom404: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Oops! 😔</h1>
        <h2 className={styles.subtitle}>We can't seem to find the page you're looking for.</h2>
        <img
          src="/images/404-illustration.png" // Add a fun illustration or image here
          alt="404 Not Found"
          className={styles.image}
        />
        <p className={styles.description}>
          The page you were looking for has either been removed or doesn't exist.
        </p>
        <p className={styles.inquiry}>
          If you have any questions, feel free to reach out at: 
          <a href="mailto:layek@tuta.io" className={styles.email}> layek@tuta.io</a>
        </p>
        <div className={styles.buttons}>
          <a href="/" className={styles.button}>
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
