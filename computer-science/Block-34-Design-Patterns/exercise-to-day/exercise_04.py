from abc import ABC, abstractmethod
# from datetime import datetime


class Manipulador_de_log(ABC):
    @classmethod
    @abstractmethod
    def log(cls, msg):
        raise NotImplementedError


class Log_em_arquivo(Manipulador_de_log):
    @classmethod
    def log(cls, msg):
        with open('exercise_04.txt', 'w') as file:
            print(msg, file=file)


class Log_em_tela(Manipulador_de_log):
    @classmethod
    def log(cls, msg):
        print(msg)


class Log():
    def __init__(self, manipuladores):
        self._manipuladores = set(manipuladores)

    def adicionar_manipulador(self, manipulador):
        self._manipulador.add(manipulador)
