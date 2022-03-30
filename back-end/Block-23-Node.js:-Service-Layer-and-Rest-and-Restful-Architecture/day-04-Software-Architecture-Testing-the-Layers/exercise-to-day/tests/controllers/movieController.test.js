const sinon = require("sinon");
const { expect } = require("chai");

const MoviesService = require("../../services/movieService");
const MoviesController = require("../../controllers/movieController");

describe("Ao chamar o controller de create", () => {
  describe("quando o payload informado não é válido", async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);

      response.send = sinon.stub().returns();

      sinon.stub(MoviesService, "create").resolves(false);
    });

    after(() => {
      MoviesService.create.restore();
    });

    it("é chamado o status com o código 400", async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Dados inválidos"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith("Dados inválidos")).to.be.equal(true);
    });
  });

  describe("quando é inserido com sucesso", async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: "Example Movie",
        directedBy: "Jane Dow",
        releaseYear: 1999,
      };

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();

      sinon.stub(MoviesService, "create").resolves(true);
    });

    after(() => {
      MoviesService.create.restore();
    });

    it("é chamado o status com o código 201", async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith("Filme criado com sucesso!")).to.be.equal(
        true
      );
    });
  });
});

// EXERCÍCIO DO DIA.
describe('Ao chamar o controller do getById', async () => {
  describe('Quando o payload não é valido', async () => {
    const response = {};
    const request = {};

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(MoviesService, "getById").resolves(false);
    })
    after(() => {
      MoviesService.getById.restore();
    });

    it('É chamado o status 400, com o seu retorno.', async () => {
      await MoviesService.getById(request, response);

      expect(response.status.calledWith(400)).to.be.equal(false);
      expect(response.json.message.calledWith('id not found')).to.be.equal(false);
    })
  })

  describe('Quando o ID é encontrado.', async () => {
    describe('É chamado o status 200, com o seu retorno.', () => {
      const fakeController = {
        id: 1,
        title: 'Title Book',
        value_id: 1,
      }

      const response = {};
      const request = {};
  
      before(() => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        sinon.stub(MoviesService, "getById").resolves(true);
      })
      after(() => {
        MoviesService.getById.restore();
      });

      it()
    })
  })
})