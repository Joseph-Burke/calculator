import styles from '../styles/header.module.css';

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>Math Magicians</h1>
    <nav>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a href="/">Home</a>
        </li>
        |
        <li className={styles.listItem}>
          <a href="/calculator">Calculator</a>
        </li>
        |
        <li className={styles.listItem}>
          <a href="/quote">Quote</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
