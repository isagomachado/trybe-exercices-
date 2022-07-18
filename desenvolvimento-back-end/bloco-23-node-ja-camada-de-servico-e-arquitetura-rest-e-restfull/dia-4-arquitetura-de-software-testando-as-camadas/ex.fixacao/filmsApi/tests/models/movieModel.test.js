const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

/*
  Como ainda não temos a implementação, vamos fixar
  um objeto simulando os métodos que iremos desenvolver,
  porém, eles não terão nenhum comportamento
*/

// const MoviesModel = {
//   create: () => {}
// }

describe('Insere m noo filme do DB', () => {
  const payloadMovie = {
    tittle: 'exaple Movie',
    directedBy: 'Jane Dow',
    relaseYear: 1999,
  };

  before(async () => {
    const execute = [{ insertId: 1 }]; // retorno esperado nesse teste

    sinon.stub(connection, 'execute').resolves(execute);
  })

  // Restauraremos a função `execute` original após os testes.
  after(async () => {
    connection.execute.restore();
  });

  describe('Quando é enserido com sucesso', () => {

    it('Retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });
  });
});
