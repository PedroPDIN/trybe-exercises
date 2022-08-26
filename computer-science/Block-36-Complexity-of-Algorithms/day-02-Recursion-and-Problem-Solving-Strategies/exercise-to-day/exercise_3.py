def higher_number_aux(arr, length):
    if length == 1:
        return arr[0]
    else:
        higher_number_list = higher_number_aux(arr, length - 1)
        if higher_number_list > arr[length - 1]:
              return higher_number_list
        else:
              return arr[length - 1]


def higher_number(arr):
    length_arr = len(arr)
    return higher_number_aux(arr, length_arr)

if __name__ == '__main__':
    print(higher_number([1, 2, 7, 4, 8]))