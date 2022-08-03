name_user = input("Qual é o seu nome? ")


def vertical(name):
    for index_letter in range(len(name)):
        for index in range(len(name) - index_letter):
            print(name[index], end="")
        print()


vertical(name_user)
