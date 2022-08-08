from exercise_3 import valid_email_format_user


def test_checks_your_return_if_the_username_in_the_email_is_invalid():
    value_user = "Nome do usuário inválido"
    assert valid_email_format_user("1est@email.com") == value_user


def test_check_your_return_if_the_website_name_is_invalid():
    value_website = "Apenas letras e dígitos no Website"
    assert valid_email_format_user("test@e$ma*il.com") == value_website


def test_check_the_return_if_the_number_of_characters_is_invalid():
    value_extension = "Numero de caracteres da extensão inválido"
    assert valid_email_format_user("test@email.errado") == value_extension
