def battle_ship(grid, line, column):
    if grid[line][column] == 1:
        return True
    return False

# No caso a complexidade é O(1)"constante", pois sempre vão ter uma constante de tempo e espaço, mesmo com diferentes valor do array o retorno sempre vai ser constante.


print(battle_ship([[0, 0, 0, 0, 1], [0, 0, 0, 0, 1]], 0, 4))
