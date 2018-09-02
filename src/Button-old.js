import React, { Component } from 'react';

class Button extends Component {
  render() {

    return (
      <div>
        <button 
            // onClick={()=> console.log(this.props.symbol)}
            onClick={this.props.changeDisplay}
            value={this.props.symbol}
        >
            {this.props.symbol}
        </button>
      </div>
    )
  }
}

export default Button;