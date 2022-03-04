import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      usuario: '',
      senha:'',
      divaPopFavorita:'Selecione a melhor Diva do POP',
      justificativa:'',
      concordo: false,
    }

  }

  handleChange(event) {
    const { name } = event.target;
    const value = event.target.type === 'checkbox'
    ? event.target.checked
    : event.target.value;

    this.setState({
      [name]: value
    })
  }
  
  render() {
    const {usuario, senha, divaPopFavorita, justificativa, concordo} = this.state
    return (
      <div>
        <h1>Exercicio sobre formulários em React</h1>
        <div className="form-content">
          <form>
            <fieldset>
              <legend>Login</legend>
              <label htmlFor="usuario">
                Usuário:
                { ' ' }
                <input
                  type="text"
                  name="usuario"
                  id="usuario"
                  onChange={ this.handleChange }
                  value={ usuario }
                />
              </label>
              <br />
              <label htmlFor="senha">
                Senha:
                { ' ' }
                <input
                  type="password"
                  name="senha"
                  id="senha"
                  onChange={ this.handleChange }
                  value={ senha }
                />
              </label>
            </fieldset>
            <br />
            <select
              name="divaPopFavorita"
              onChange={ this.handleChange }
              value={ divaPopFavorita }
            >
              <option>Selecione a melhor Diva do POP</option>
              <option value="Beyonce">Beyonce</option>
              <option value="Rihanna">Rihanna</option>
              <option value="Lady Gaga">Lady Gaga</option>
            </select>
            <br />
            <label htmlFor="justificativa">
              Justifique sua escolha:
              { ' ' }
              <textarea
                name="justificativa"
                id="justificativa"
                onChange={ this.handleChange }
                value={ justificativa }
              />
            </label>
            <br/>
            <label htmlFor="foto">
              Adicione sua foto favorita da sua diva
              { ' ' }
              <input
                type="file"
                name="foto"
                id="foto"
              />
            </label>
            <br />
            <label htmlFor="concordo">
              Li e aceito os termos
              { ' ' }
              <input
                type="checkbox"
                name="concordo"
                id="concordo"
                onChange={ this.handleChange }
                checked={ concordo }
              />
            </label>
            
          </form>
        </div>
      </div>
    )
  }
}

export default Form;
