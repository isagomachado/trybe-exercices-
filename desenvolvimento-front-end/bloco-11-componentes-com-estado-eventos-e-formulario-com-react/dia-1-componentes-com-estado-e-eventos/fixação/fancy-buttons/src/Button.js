import React from 'react';


class Button extends React.Component {
  constructor() {
    super()

    this.validate = this.validate.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      numeroDeCliques: 0,
      corDoBotão: 'green',
    }
  }

  handleClick() {
    this.setState((estadoAnterior) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }), this.validate)
  }

  validate() {
    if(this.state.numeroDeCliques % 2 === 0) {
      this.setState({
        corDoBotão: 'green'
      }, () => console.log(this.state.corDoBotão))
    } else {
      this.setState({
        corDoBotão: 'white'
      }, () => console.log(this.state.corDoBotão))
    }
  }

  render() {
    return (
      <button
        onClick={ this.handleClick }
        style={{ backgroundColor: this.state.corDoBotão}}
      >{this.state.numeroDeCliques} clicks</button>
    );
  }
}

export default Button;
