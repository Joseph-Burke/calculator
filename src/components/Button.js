import PropTypes from 'prop-types';

const Button = props => {
  const { name } = props;
  const { processInput } = props;
  return (
    <button
      type="button"
      onClick={() => processInput(name)}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  processInput: PropTypes.func.isRequired,
};

export default Button;
