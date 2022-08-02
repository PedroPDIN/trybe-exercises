number_1 = input("Primeiro número: ")
number_2 = input("Segundo número: ")


def sum(a, b):
    if not a.isdigit():
        print(f"O valor {a} não são numérico")
    elif not b.isdigit():
        print(f"O valor {b} não são numérico")
    else:
        print("Resultado da soma ->", int(a) + int(b))


sum(number_1, number_2)
