def even_numbers(n):
    numbers = []
    for number in range(1, n):
        if number % 2 == 0:
            numbers.append(number)
    return len(numbers)

if __name__ == '__main__':
    print(even_numbers(5))