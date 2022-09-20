def software_monitor(arr):
    arr_len = len(arr)
    result = 0
    value_len = 0

    for i in range(arr_len):
        if arr[i] == 1:
            value_len += 1
        else:
            value_len = 0

        if value_len > result:
            result = value_len
    return result


print(software_monitor([0, 1, 1, 1, 0, 0, 1, 1]))

# O algoritmo realiza um for, portanto possui Complexidade de Tempo O(n).
