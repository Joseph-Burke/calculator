import React from 'react';
import styles from '../styles/quote.module.css';

const Quote = () => (
  <blockquote className={styles.quote}>
    Mathematics is not about numbers, equations, computations or algorithms:
    {' '}
    <em>it is about understanding.</em>
    {' '}
    - William Paul Thurston
  </blockquote>
);

export default Quote;
