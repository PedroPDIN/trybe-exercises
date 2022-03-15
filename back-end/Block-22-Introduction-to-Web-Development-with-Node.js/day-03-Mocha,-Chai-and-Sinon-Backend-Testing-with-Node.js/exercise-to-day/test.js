const fs = require("fs");
const sinon = require("sinon");
const { expect } = require("chai");
const calc = require("./calc.js");
const fileChange = require("./fileChange.js");
const valueFile = "arquivo.txt";
const FILE_CONTENT = "Óla Pedro! tudo bem?";

sinon.stub(fs, "writeFileSync");

describe('Modulo "calc.js" para verificação de testes', () => {
  describe('Verifica retorno do modulo', () => {
    describe("reposta positivo", () => {
      it("É positiva?", () => {
        const filePositivo = calc(2);
        expect(filePositivo).equals("positivo");
      });
    });
  
    describe("reposta negativo", () => {
      it("É negativo?", () => {
        const fileNegativo = calc(-2);
        expect(fileNegativo).equals("negativo");
      });
    });
  
    describe("reposta neutro", () => {
      it("É neutro?", () => {
        const fileNeutro = calc(0);
        expect(fileNeutro).equals("neutro");
      });
    });
  });
});

describe('Modulo "calc.js" para verificar retorno de erro.', () => {
  describe('Verifica se há uma mensagem de erro no retorno', () => {
    describe("O tipo do valor", () => {
      it("É string?", () => {
        const value = calc("xablau");
    
        expect(value).to.be.a("string");
        expect(value).equals("o valor deve ser um número");
      });
    });
  })
})


describe("Funcionalidade de alteração ao arquivo 'fileChange.js'.", () => {
  describe("Verifica o que esta sendo retornado", () => {
    it("Arquivo escrito com sucesso?", () => {

      before(() => sinon.stub(fs, "writeFileSync"));
      after(() => fs.writeFileSync.restore());
  
      const fileTest = fileChange(valueFile, FILE_CONTENT);
  
      expect(fileTest).to.be.a("string");
      expect(fileTest).equals("ok");
    });
  });
});
