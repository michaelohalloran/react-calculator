import React, {Component} from 'react';
import './Display.css';

class Display extends Component {
    render() {
        return(
            <div>
                <input 
                    className="calc-display"
                    type="text"
                    placeholder='0'
                    value={this.props.value}
                />
            </div>
        );
    }
}

export default Display;