import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {

    return (
      <div>
        <button 
            className="btn"
            onClick={this.props.onClick}
            value={this.props.value}
        >
            {this.props.label}
        </button>
      </div>
    )
  }
}

export default Button;