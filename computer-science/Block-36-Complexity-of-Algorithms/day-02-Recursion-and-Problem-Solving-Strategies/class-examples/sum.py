def sum(n):
  if n == 0:
      return 0
  else:
      return n + sum(n - 1)

if __name__ == '__main__':
    print(sum(5))