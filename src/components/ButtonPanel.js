import PropTypes from 'prop-types';
import Button from './Button';
import styles from '../styles/button_panel.module.css';

const ButtonPanel = props => {
  const { data, inputHandler } = props;
  return (
    <div className={styles.button_panel} data-testid="button-panel">
      <div className={styles.row}>
        <Button
          name="AC"
          data={data}
          processInput={inputHandler}
          color="grey"
        />
        <Button
          name="+/-"
          data={data}
          processInput={inputHandler}
          color="grey"
        />
        <Button name="%" data={data} processInput={inputHandler} color="grey" />
        <Button name="÷" data={data} processInput={inputHandler} />
      </div>
      <div className={styles.row}>
        <Button name="7" data={data} processInput={inputHandler} color="grey" />
        <Button name="8" data={data} processInput={inputHandler} color="grey" />
        <Button name="9" data={data} processInput={inputHandler} color="grey" />
        <Button name="X" data={data} processInput={inputHandler} />
      </div>
      <div className={styles.row}>
        <Button name="4" data={data} processInput={inputHandler} color="grey" />
        <Button name="5" data={data} processInput={inputHandler} color="grey" />
        <Button name="6" data={data} processInput={inputHandler} color="grey" />
        <Button name="-" data={data} processInput={inputHandler} />
      </div>
      <div className={styles.row}>
        <Button name="1" data={data} processInput={inputHandler} color="grey" />
        <Button name="2" data={data} processInput={inputHandler} color="grey" />
        <Button name="3" data={data} processInput={inputHandler} color="grey" />
        <Button name="+" data={data} processInput={inputHandler} />
      </div>
      <div className={styles.row}>
        <Button
          name="0"
          data={data}
          processInput={inputHandler}
          wide
          color="grey"
        />
        <Button name="." data={data} processInput={inputHandler} color="grey" />
        <Button name="=" data={data} processInput={inputHandler} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  data: PropTypes.shape({
    next: PropTypes.string,
    total: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
  inputHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
