import React from 'react';


class Button extends React.Component {
  constructor() {
    super()
    console.log('Um componente em construção')

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log('Clicou no botão!');
    console.log(this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Meu botão</button>
    );
  }
}

export default Button;
