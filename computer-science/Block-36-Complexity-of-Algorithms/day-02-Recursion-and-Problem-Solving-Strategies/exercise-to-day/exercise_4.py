# https://pt.wikipedia.org/wiki/Algoritmo_de_Euclides


def MDC(a, b):
    if b == 0:
        return a
    else:
        return MDC(b, a % b)

if __name__ == '__main__':
    print(MDC(8, 6))
