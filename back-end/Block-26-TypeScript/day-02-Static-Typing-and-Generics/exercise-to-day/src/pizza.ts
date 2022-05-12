import {
  IPizza,
  IPizzaCommon,
  IPizzaVegetarian,
  IPizzaSweet,
} from "./interface";

const Calabresa: IPizza = {
  flavor: "Calebresa",
  slice: 8,
};

console.log(Calabresa);

const Marguerita: IPizza = {
  flavor: "Marguerita",
  slice: 6,
};

console.log(Marguerita);

const Nutela: IPizza = {
  flavor: "Nutela",
  slice: 4,
};

console.log(Nutela);

const PizzaComum1: IPizzaCommon = {
  flavor: 'Calabresa',
  slice: 4,
}

console.log(PizzaComum1)

const PizzaComum2: IPizzaCommon = {
  flavor: 'Frango',
  slice: 4,
}

console.log(PizzaComum2)

const PizzaComum3: IPizzaCommon = {
  flavor: 'Papperoni',
  slice: 4,
}

console.log(PizzaComum3)

const PizzaVegetariano1: IPizzaVegetarian = {
  flavor: 'Palmito',
  slice: 6,
}

console.log(PizzaVegetariano1)

const PizzaVegetariano2: IPizzaVegetarian = {
  flavor: 'Cogumelo',
  slice: 4,
}

console.log(PizzaVegetariano2)

const PizzaDoce1: IPizzaSweet = {
  flavor: 'Goiabada com Queijo',
  slice: 4,
}

console.log(PizzaDoce1)