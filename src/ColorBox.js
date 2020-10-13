import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const theOpacity = this.props.opacity;
    
    return (
      <div className="color-box" style={{opacity: 1 /*replace null with the value*/}}>
        {/* your conditional code here! */}
        {theOpacity => 0.2 ? <ColorBox /> : null}
      </div>
    )
  }

}

