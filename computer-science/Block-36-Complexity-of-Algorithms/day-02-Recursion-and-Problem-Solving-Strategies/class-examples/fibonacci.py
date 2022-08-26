def fibo(n):
    if n < 2:
        print('ativou')
        return n
    else:
        print('ativou')
        return fibo(n - 1) + fibo(n - 2)

if __name__ == '__main__':
    print(fibo(5))
    