class Tv:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False


def volume(self):
    return self.__volume


def canal(self):
    return self.__canal


def ligado(self):
    return self._ligado


def aumentar_volume(self):
    if self.__volume > 99:
        print("Volume máximo")
    else:
        self.__volume += 1


def diminuir_volume(self):
    if self.__volume == 0:
        print("No mudo")
    else:
        self.__volume -= 1


def modificar_canal(self, canal):
    if self.__canal < canal < 99:
        self.__canal = canal
    else:
        raise ValueError("Canal não existe")


def ligar_desligar(self, LD):
    value = LD.lower()
    if value == "ligado":
        self.__ligada = True
    else:
        self.__ligada = False


def __str__(self):
    status_tv = ""
    if self.ligada is True:
        status_tv = "A tv está ligado."
        return f"""
        {status_tv}
        Volume: {self.volume}
        Canal: {self.canal}
        """
    else:
        status_tv = "A tv está desligado."
        return status_tv


tv1 = Tv(12)
print(tv1)
