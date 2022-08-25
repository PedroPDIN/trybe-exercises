import random

""" Mesmo que, para o exemplo dado, o valor de `n` seja muito menor que o valor da constante `100`, 
para valores de `n` grandes o valor da constante se torna desprezível. Esse problema, então, é `O(n)`. 
Pelo mesmo motivo, a complexidade de espaço é constante, ou seja, `O(1)`"""


def random_number_average(n):
    all_average = []

    for _ in range(100):
        for _ in range(n):
            random_number = random.randint(1, n)
        all_average.append(random_number / n)

    print(len(all_average))
    return all_average


print(random_number_average(10))
