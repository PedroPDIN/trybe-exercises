def countdown(n):
    if n < 0:
        print('Acabou!!! é treta')
    else:
        print(n)
        countdown(n - 1)
