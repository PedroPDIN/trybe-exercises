from exercise_1 import valid_number_fizz_buzz


def test_checks_if_the_function_return_is_Fizz():
    "Retorna Fizz caso o valor seja divisível por 3"
    value_fizz = [1, 2, "Fizz"]

    assert valid_number_fizz_buzz(3) == value_fizz
    assert len(valid_number_fizz_buzz(3)) == 3
    assert valid_number_fizz_buzz(3)[-1] == "Fizz"


def test_checks_if_the_function_return_is_Buzz():
    "Retorna Fizz caso o valor seja divisível por 5"
    value_buzz = [1, 2, "Fizz", 4, "Buzz"]

    assert valid_number_fizz_buzz(5) == value_buzz
    assert len(valid_number_fizz_buzz(5)) == 5
    assert valid_number_fizz_buzz(5)[-1] == "Buzz"


def test_checks_if_the_function_return_is_FizzBuzz():
    "Retorna Fizz caso o valor seja divisível por 3 e 5"
    value_fizz_buzz = [
      1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz',
      'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz'
      ]

    assert valid_number_fizz_buzz(15) == value_fizz_buzz
    assert len(valid_number_fizz_buzz(15)) == 15
    assert valid_number_fizz_buzz(15)[-1] == "FizzBuzz"
