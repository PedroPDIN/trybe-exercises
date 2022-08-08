def valid_number_fizz_buzz(number):
    result = []
    LIMIT_RANGE = range(1, number + 1)
    for n in LIMIT_RANGE:
        if n % 3 == 0 and n % 5 == 0:
            result.append("FizzBuzz")
        elif n % 3 == 0:
            result.append("Fizz")
        elif n % 5 == 0:
            result.append("Buzz")
        else:
            result.append(n)
    return result


print(valid_number_fizz_buzz(15))
