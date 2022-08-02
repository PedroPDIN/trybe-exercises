file = open("person.txt", mode="w")


file.write("nome idade\n")
file.write("Pedro 22\n")
file.write("Fulano 25\n")

print("Ciclana 30")

LINES = ["João 19\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
file.writelines(LINES)


file.close()