interface Auto {
  marca: string | number;
  modelo: string | number;
  km: number;
  ano: number;
  cor: string;
  infoCar(): string;
}

interface Felino {
  nome: string,
  sexo: string,
  idade: number,
  diaNascimento: number,
  mesNascimento: number,
  anoNascimento: number,
  vida: number,
  birth(): string,
  infoFeline(): string,
}

interface Aero {
  nome: string | number,
  marca: string
  modelo: string | number,
  ano: number,
  infoAero(): string
}