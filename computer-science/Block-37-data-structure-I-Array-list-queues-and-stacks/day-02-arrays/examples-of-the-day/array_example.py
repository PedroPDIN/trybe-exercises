import sys

"""Perceba que temos uma coleção de valores
e operações que atuam sobre estes valores,
de acordo com o que foi definido pelo TAD."""


class Array:
    def __init__(self):
        self.data = []

    def __len__(self):
        # quando pedido o tamanho do array
        # retorne o tamanho de data
        return len(self.data)

    def __str__(self):
        # converte para string e exibe os valores de data
        return str(self.data)

    def get(self, index):
        return self.data[index]

    def set(self, index, value):
        self.data.insert(index, value)

    def remove(self, index):
        # removeremos o item, retornando-o
        return self.data.pop(index)

    def update(self, index, value):
        self.data[index] = value
        

if __name__ == '__main__':
    # vamos inicializar e preencher uma estrutura de dados array
    array = Array()

    array.set(0, "Felipe")
    array.set(1, "Ana")

    # sys.getsizeof retorna o tamanho da lista em bytes
    array_memory_size = sys.getsizeof(array.data)
    print('primeiro print - tamanho array em bits', array_memory_size)

    array.set(2, "Shirley")
    array.set(3, "Miguel")
    array.set(4, "Alberto")
    array.set(5, "Marta")
    array.set(6, "Túlio")
    array.set(7, "Michelle")

    # sys.getsizeof retorna o tamanho da lista em bytes
    array_memory_size = sys.getsizeof(array.data)
    print('segundo print - tamanho array em bits', array_memory_size)

    # para acessar um elemento do array, utilizamos seu índice
    print(array.get(0))  # saída: Felipe
    print(array.get(2))  # saída: Shirley
    print("-----")

    array.update(0, "Pedro") # atualizando o nome da pessoa da posição 0 para o nome Pedro.

    # array.remove(0)
    # print(array)

    # podemos iterar sobre seus elementos da seguinte maneira
    index = 0
    # enquanto há elementos no array
    while index < len(array):
        # recupera o elemento através de um índice
        print("Index:", index, ", Nome:", array.get(index))
        index += 1
        