def even_number(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + even_number(n - 1)
    else:
        return even_number(n - 1)

if __name__ == '__main__':
    print(even_number(6))
