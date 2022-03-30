const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  })

  after(async () => {
    connection.execute.restore();
  })

  describe('quando é inserido com sucesso', async () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });

  });
});

// EXERCÍCIOS DO DIA.
describe('Busca um ID em um determinado book.', () => {
  describe('caso o ID não foi encontrado.', async () => {
    
    before(async () => {
      sinon.stub(connection, 'execute').resolves(execute);
    })
    after(async () => {
      connection.execute.restore();
    })
  })

  it('Retorna null caso não exista book com o ID informado.', async () => {
    const getById = await MoviesModel.getById();
    expect(getById).to.be.equal(null);
  })

  describe('Caso exista ID informado no BD.', () => {

    before(async () => {
      sinon.stub(connection, 'execute').resolves(execute);
      sinon.stub(MoviesModel, 'getById').resolves({
        id: 1,
        title: 'Title Book',
        author_id: 1,
      });
    });
    after(async () => {
      connection.execute.restore();
      MoviesModel.getById.restore();
    })

    it('Retorna um "object"', async () => {
      const getById = await MoviesModel.getById(1);

      expect(getById).to.be.a('object');
    });

    it('Retorna o objeto com as chaves corretas.', async () => {
      const getById = await MoviesModel.getById(1);

      expect(getById).to.have.all.keys('id', 'title', 'author_id');
    })
  })
})