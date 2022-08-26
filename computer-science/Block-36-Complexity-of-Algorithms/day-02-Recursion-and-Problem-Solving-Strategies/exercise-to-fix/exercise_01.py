def sum_before(n):
  if n == 1:
      return 1
  else:
      return n + sum_before(n - 1)


print(sum_before(2))
