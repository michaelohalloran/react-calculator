import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import Display from './Display';

//PROCESS: when btn is clicked, append its value to this.state.display
//also add its value to operationsArray
//have a function attached to = key that joins all in equationArray
//https://repl.it/@mike314151/reactCalc-test-work
//https://stackoverflow.com/questions/13077923/how-can-i-convert-a-string-into-a-math-operator-in-javascript

class App extends Component {
  constructor() {
    super();

    this.state = {
      display: '',
      operationsArray: [],
    }

    this.handleClick = this.handleClick.bind(this);
    this.calculate = this.calculate.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
  }

  handleClick(e) {
    // console.log(e.target.value);
    //when btn is clicked:
    //1. for numbers, add value to operationsArray
    //2. update the display to show it
    let newDisplay = this.state.display;
    this.setState({
      operationsArray: [...this.state.operationsArray, e.target.value],
      display: newDisplay+= e.target.value
    })
  }

  calculate(e) {
    let expression = this.state.operationsArray.join('');

    switch(e.target.value) {
      case 'sqrt': 
        //take answer from operationsArray and find its square root
        let sqrt = (eval(expression)**0.5).toFixed(2);
        this.setState({
          display: sqrt,
          operationsArray: [sqrt]
        });
        break;
      case 'clear':
        this.clearDisplay();
        break;
      case 'delete':
        //delete the last character entered in opsArray and in display
        // console.log(typeof this.state.display);
        let reducedDisplay = this.state.display.substring(0, this.state.display.length - 1);
        let reducedOpsArray;
        //last item in opsArray
        let lastItem = this.state.operationsArray[this.state.operationsArray.length-1];
        //current length of opsArray
        let opsArrayLength = this.state.operationsArray.length;
        //Case 1: single multi-digit item in array, just delete the last digit
        if(opsArrayLength === 1 && String(lastItem).length > 1) {
          //this takes off the last digit
          lastItem = Math.floor(lastItem/10);
          reducedOpsArray = [lastItem];
        //Case 2: single single-digit item in array, or multi-item array, just delete last item
        // } else if(opsArrayLength === 1 && String(lastItem).length === 1) {
        } else {
          reducedOpsArray = this.state.operationsArray.slice(0, this.state.operationsArray.length - 1);
          // return reducedOpsArray;
        }
        this.setState({
          operationsArray: [reducedOpsArray],
          display: reducedDisplay
        });
        break;
      case '%':
        //take current answer from opsArray and /100
        let percent = eval(expression)/100;
        this.setState({
          display: percent,
          operationsArray: [percent]
        });
        break;

    //run this on pressing = btn, take what's in the operationsArray and run eval, updating state as needed
      default: 
        console.log(`evaluating ${expression}`);
        let answer = String(eval(expression));
        console.log(`answer is ${answer}`);
        //show this answer in display
        //then make operations array contain it as the only member, overwriting what preceded
        this.setState({
          display: answer,
          operationsArray: [answer]
        })
    }
    
  }

  clearDisplay() {
    this.setState({
      display: '',
      operationsArray: [],
    })
  }

 
  render() {

    return (
      <div id="panel">
        <Display value={this.state.display}/>

        <div className="row">
          <Button onClick={this.calculate} label='AC' value='clear'/>
          <Button onClick={this.calculate} label='Del' value='delete'/>
          <Button onClick={this.calculate} label='%' value='%'/>
          <Button onClick={this.calculate} label='√' value='sqrt'/>
        </div>
        <div className="row">
          <Button onClick={this.handleClick} label='7' value='7'/>
          <Button onClick={this.handleClick} label='8' value='8'/>
          <Button onClick={this.handleClick} label='9' value='9'/>
          <Button onClick={this.handleClick} label='÷' value='/'/>
        </div>
        <div className="row">
          <Button onClick={this.handleClick} label='4' value='4'/>
          <Button onClick={this.handleClick} label='5' value='5'/>
          <Button onClick={this.handleClick} label='6' value='6'/>
          <Button onClick={this.handleClick} label='x' value='*'/>
        </div>
        <div className="row">
          <Button onClick={this.handleClick} label='1' value='1'/>
          <Button onClick={this.handleClick} label='2' value='2'/>
          <Button onClick={this.handleClick} label='3' value='3'/>
          <Button onClick={this.handleClick} label='−' value='-'/>
        </div>
        <div className="row">
          <Button onClick={this.handleClick} label='0' value='0'/>
          <Button onClick={this.handleClick} label='.' value='.'/>
          <Button onClick={this.calculate} label='=' value='='/>
          <Button onClick={this.handleClick} label='+' value='+'/>
        </div>
      </div>
    )
  }
}

export default App;
