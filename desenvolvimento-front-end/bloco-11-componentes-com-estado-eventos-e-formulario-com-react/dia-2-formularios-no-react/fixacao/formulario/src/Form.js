import React from 'react';

class Form extends React.Component {
  constructor() {
    super();


  }
  
  render() {
    return (
      <div>
        <h1>Exercicio sobre formulários em React</h1>
        <div className="form-content">
          <form>
            <label>
              Usuário:
              <input type="text"></input>
            </label>
            <br />
            <label>
              Senha:
              <input type="password"></input>
            </label>
            <br />
            <select name="divaPopFavorita">
              <option>Selecione a melhor Diva do POP</option>
              <option value="Beyonce">Beyonce</option>
              <option value="Rihanna">Rihanna</option>
              <option value="Lady Gaga">Lady Gaga</option>
            </select>
            <br />
            <label>
              Justifique sua escolha:
              <textarea></textarea>
            </label>
            
          </form>
        </div>
      </div>
    )
  }
}

export default Form;
