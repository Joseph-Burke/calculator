import PropTypes from 'prop-types';
import styles from '../styles/display.module.css';

const Display = ({ result }) => <div className={styles.display} data-testid="display">{result}</div>;

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
