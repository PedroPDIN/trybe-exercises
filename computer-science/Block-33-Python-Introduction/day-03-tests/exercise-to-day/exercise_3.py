def valid_email_format_user(email):
    name_user_email = email.split('@')[0]
    name_website_email = email.split('@')[1].split('.')[0]
    name_extension_email = email.split('@')[1].split('.')[1]

    if not name_user_email[0].isalpha():
        return "Nome do usuário inválido"
    elif not name_website_email.isalpha() or name_website_email.isdigit():
        return "Apenas letras e dígitos no Website"
    elif len(name_extension_email) > 3:
        return "Numero de caracteres da extensão inválido"
    else:
        return "Estrutura do email valido com sucesso"


print(valid_email_format_user("test@e$mail.com"))
