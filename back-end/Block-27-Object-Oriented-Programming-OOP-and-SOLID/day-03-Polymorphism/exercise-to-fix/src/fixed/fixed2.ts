interface Character {
    name: string;
    specialMove: string;
  }
  
  interface DbCharacter extends Character {
    id: number;
  }
  
  const db: DbCharacter[] = [];

  interface IModel {
    getAll: () => Promise<DbCharacter[]>;
    getById: (id: number) => Promise<DbCharacter>;
    create: (data: Character) => Promise<DbCharacter>;
    update: (id: number, data: Character) => Promise<DbCharacter>;
    delete: (id: number) => Promise<DbCharacter>;
  }

  class LocalDbModel implements IModel {

  }

  class CharacterService {
    constructor()
  }