interface ICepApi {
  getAddressByCEP(cep: string, number: number): Promise<string>;
  getCepByAddress(cep: string, number: number): Promise<string>;
};

interface IDrive {
  drive(): void;
}

interface IFly {
  fly(): void;
}

interface IVehicle extends IDrive, IFly {}

export {
  ICepApi,
  IDrive,
  IFly,
  IVehicle,
}