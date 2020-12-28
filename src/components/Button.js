import PropTypes from 'prop-types';
import styles from '../styles/button.module.css';

const Button = props => {
  const {
    name, processInput, color, wide,
  } = props;
  const buttonClasses = [
    styles.button,
    styles[`${color}_button`],
    wide ? styles.wide : ""
  ].join(" ");

  return (
    <button
      type="button"
      onClick={() => processInput(name)}
      className={buttonClasses}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  processInput: PropTypes.func.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
