class Geladeira:
    def __init__(self, cor, preço):
        self.__cor = cor
        self.__preço = preço

    @property
    def preço(self):
        return self.__preço

    @property
    def cor(self):
        return self.__cor


class Pessoa:
    def __init__(self, nome, saldo_da_conta):
        self.nome = nome
        self.saldo_da_conta = saldo_da_conta
        self.possui_geladeira = False
        self.cor_da_geladeira = ""

    def comprar_geladeira(self, geladeira: Geladeira):
        if geladeira.preço <= self.saldo_da_conta:
            self.saldo_da_conta -= geladeira.preço
            self.possui_geladeira = True
            self.cor_da_geladeira = geladeira.cor

    def __str__(self):
        if (self.possui_geladeira):
            return f"""
            {self.nome} possui uma geladeira da cor {self.cor_da_geladeira}
            Com isso seu saldo é de {self.saldo_da_conta} Reais
            """


geladeira_azul = Geladeira('azul', 300)
Pedro = Pessoa('Pedro', 500)
Pedro.comprar_geladeira(geladeira_azul)

print(Pedro)
