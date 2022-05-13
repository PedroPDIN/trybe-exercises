type Common = 'Calabresa' | 'Frango' | 'Papperoni';
type Vegetarian = 'Marguerita' | 'Palmito' | 'Cogumelo';
type Sweet = 'Nutela' | 'Goiabada com Queijo' | 'Marshmallow';
type Slices = 4 | 6 | 8;

export interface IPizza {
    flavor: string,
    slice: Slices,
};

export interface IPizzaCommon extends IPizza {
    flavor: Common,
}

export interface IPizzaVegetarian extends IPizza {
    flavor: Vegetarian,

}

export interface IPizzaSweet extends IPizza {
    flavor: Sweet,
}
