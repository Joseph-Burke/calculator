const Display = props => {
  return <div>{props.result}</div>;
}

Display.defaultProps = {
  result: '0',
};

export default Display;
