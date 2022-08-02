def arithmetic_average(numbers):
    total = 0
    for number in numbers:
        total += number

    return total / len(numbers)


print("Média:", arithmetic_average([10, 5, 7.8, 9]))
