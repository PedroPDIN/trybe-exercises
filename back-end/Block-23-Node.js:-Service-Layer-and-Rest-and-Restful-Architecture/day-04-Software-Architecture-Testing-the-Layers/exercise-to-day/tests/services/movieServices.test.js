const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');
const BookService = require('../../services/bookService');

describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', async () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });

  });

  describe('quando é inserido com sucesso', async () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(MoviesModel, 'create')
        .resolves({ id: ID_EXAMPLE });
    });

    after(() => {
      MoviesModel.create.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});

// EXERCÍCIO DO DIA.
describe.only('Funcionalidade de busca por ID', async () => {
  describe('Verifica se ID não é um string.', async () => {
    it('Retorna "false"', async () => {
      const response = await BookService.getById('id');
  
      expect(response).to.be.equal(null);
    });
  });

  describe('Quando ID é inserido com sucesso.', async () => {
    describe('Retorna as informações corretas', async () => {
      const fakeService = {
        id: 1,
        title: 'Title Book',
        author_id: 1,
      }

      before(() => {
        sinon.stub(MoviesModel, 'getById').resolves(fakeService);
      });
      after(() => {
        MoviesModel.getById.restore();
      });

      it('retorna um objeto', async () => {
        const test = await BookService.getById(1);
  
        expect(test).to.be.a('object');
      });
  
      it('Retorna o objeto com as chaves corretas.', async () => {
        const test = await BookService.getById(1);
  
        expect(test).to.have.all.keys('id', 'title', 'author_id');
      });

    });
  });
});