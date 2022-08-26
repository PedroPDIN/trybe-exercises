def factorial(n):
    if n == 1:  # caso base
        return 1
    else:
        print(n)
        return n * factorial(n - 1)  # caso recursivo


print(factorial(5))
