import React, { Component } from 'react';
import './App.css';
import Button from './Button';


//need functions to display each op in the input
//clicking button needs to fire a changeDisplay function and a doTheMathOp function

//PROCESS: when btn is clicked, append its value to this.state.display
//also add its value to equationArray
//have a function attached to = key that joins all in equationArray
//https://repl.it/@mike314151/reactCalc-test-work
//https://stackoverflow.com/questions/13077923/how-can-i-convert-a-string-into-a-math-operator-in-javascript

class App extends Component {
  constructor() {
    super();

    this.state = {
      display: '0',
      equationArray: [],
      answer: null
    }

    this.changeDisplay = this.changeDisplay.bind(this);
    this.findAndShowAns = this.findAndShowAns.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
    // this.findAns = this.findAns.bind(this);

  }

  // findAns() {
  //   const expression = this.state.equationArray.join('');
  //   return eval(expression);
  // }

  //THIS GIVES ANSWER when = is pressed:
  //1. calculate answer
  //2. show it in display
  findAndShowAns() {
    //join equationArray as string
    const expression = this.state.equationArray.join('');
    console.log(`evaluating ${expression}`);
    console.log(`eqtArr contains ${this.state.equationArray}`);
    const answer = eval(expression);
    // console.log(expression);
    // console.log(this.state.answer);
    // console.log(eval(expression));
    // this.setState({
    //   answer: eval(expression),
    //   display: eval(expression)
    // })
    this.setState({
      answer: eval(expression),
      display: eval(expression),
      //need to somehow clear eqtArr to avoid PEMDas errors with multiple = presses
      equationArray: [eval(expression)]
    })
  }

  changeDisplay(e) {
    // let newDisplay = this.state.display.slice(1);
    // console.log(e.target.value);
    //make copy of display, removing initial 0
    // const newDisplay = this.state.display.slice(1);
    this.setState({
      display:  this.state.display+=e.target.value,
      equationArray: [...this.state.equationArray, e.target.value]
    })
  }

  clearDisplay() {
    this.setState({
      display: '0',
      equationArray: [],
      answer: null
    })
  }

 
  render() {

    const mathSyms = [0,1,2,3,4,5,6,7,8,9,'+','-','*','/','**0.5','%','Back'];

    return (
      <div>
        {/* <Display showNums={this.showNums}/> */}
        <input 
            type="text"
            placeholder={this.state.display}
        />

        {mathSyms.map(sym=> {
          return (
            <Button 
              key={sym} 
              symbol={sym}
              changeDisplay={this.changeDisplay}
              // currentDisplay={this.state.display}
            />
          )
        })}

        <button
          onClick={this.clearDisplay}
        >
          Clear
        </button>

        <button
          onClick={this.findAndShowAns}
        >
          =
        </button>
      </div>
    )
  }
}

export default App;
