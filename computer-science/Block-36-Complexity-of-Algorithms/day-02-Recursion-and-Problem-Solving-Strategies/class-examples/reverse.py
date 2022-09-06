def reverse(arr):
    if len(arr) <= 1:
        return arr
    else: 
        return [arr[-1]] + reverse(arr[len(arr)-1:])

if __name__ == '__main__':
      print(reverse([1, 2, 3, 4, 5]))