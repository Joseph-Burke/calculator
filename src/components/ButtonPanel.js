import React, { Component } from 'react';
import Button from "./Button";

export default class ButtonPanel extends Component {
  constructor(props) {
    super(props)
  };

  render() {
    const [ data, inputHandler] = [ this.props ];
    const processInput = this.props.inputHandler;
    return (
      <div>
        <div>
          <Button name={"AC"} data={data} processInput = {processInput} />
          <Button name={"+/-"} data={data} processInput = {processInput} />
          <Button name={"%"} data={data} processInput = {processInput} />
          <Button name={"÷"} data={data} processInput = {processInput} />
        </div>
        <div>
          <Button name={"7"} data={data} processInput = {processInput} />
          <Button name={"8"} data={data} processInput = {processInput} />
          <Button name={"9"} data={data} processInput = {processInput} />
          <Button name={"X"} data={data} processInput = {processInput} />
        </div>
        <div>
          <Button name={"4"} data={data} processInput = {processInput} />
          <Button name={"5"} data={data} processInput = {processInput} />
          <Button name={"6"} data={data} processInput = {processInput} />
          <Button name={"-"} data={data} processInput = {processInput} />
        </div>
        <div>
          <Button name={"1"} data={data} processInput = {processInput} />
          <Button name={"2"} data={data} processInput = {processInput} />
          <Button name={"3"} data={data} processInput = {processInput} />
          <Button name={"+"} data={data} processInput = {processInput} />
        </div>
        <div>
          <Button name={"0"} data={data} processInput = {processInput} />
          <Button name={"."} data={data} processInput = {processInput} />
          <Button name={"="} data={data} processInput = {processInput} />
        </div >
      </div>

    )
  };
}