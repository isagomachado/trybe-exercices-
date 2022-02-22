import React from 'react';


class Button extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0,
      corDoBotão: 'green',
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((estadoAnterior, _propsAnterior) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
    if(this.state.numeroDeCliques % 2 !== 0) {
      this.setState({
        corDoBotão: 'green'
      })
    } else {
      this.setState({
        corDoBotão: 'white'
      })
    }
    console.log(this.state.corDoBotão)
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        style={{ backgroundColor: this.state.corDoBotão}}
      >{this.state.numeroDeCliques}</button>
    );
  }
}

export default Button;
