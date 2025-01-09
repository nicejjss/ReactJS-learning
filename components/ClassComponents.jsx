import React, { Component } from 'react';

class ClassComponent extends Component {

  state = {
    showText: false,
    color: true,
  };

  handleClick = () => {
    this.setState({
       showText: !this.state.showText,
      });
    // this.state.showText = !this.state.showText;
    // this.render();
  };

  render() {
    console.log(this.state.showText);
    let html = '';
    if (this.state.showText) {
        html = <h4 style={{color: this.state.color ? 'red' : 'white'}}>This is Class Component</h4>;
    }

    return (
      <>
        <h1>ReactJS Concept 2025</h1>
        {html}
        <button onClick={this.handleClick}>Toggle Text</button>
      </>
    );
  }
}

export default ClassComponent;