import PropTypes from "prop-types";

const Button = props => {
  const name = props.name;
  const processInput = props.processInput;
  return (
    <button
      onClick={() => processInput(name)}
      >
      {props.name}
    </button>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  processInput: PropTypes.func.isRequired
};

export default Button;
