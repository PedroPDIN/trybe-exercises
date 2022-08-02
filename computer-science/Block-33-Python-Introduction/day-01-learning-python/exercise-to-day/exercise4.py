def biggest_name(names):
    result_name = names[0]
    for name in names:
        if (len(name) > len(result_name)):
            result_name = name

    return result_name


names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
print("A pessoa que tem o maior nome é:", biggest_name(names))
