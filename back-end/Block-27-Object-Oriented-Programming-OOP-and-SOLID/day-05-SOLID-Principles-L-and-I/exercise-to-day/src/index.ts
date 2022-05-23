// ./index.ts
import CepService from "./CepService";
import FooCepAPI from "./FooCepApi";
import FuturisticCar from "./FuturisticCar";
import Car from './Car';
import AirPlane from './AirPlane';

async function main() {
  const cepApi = new FooCepAPI();
  const cepSvc = new CepService(cepApi);
  const futuristicCar = new FuturisticCar();
  const car = new Car();
  const airPlane = new AirPlane();

  console.log(
    "get address by cep",
    "->",
    await cepSvc.addressByCep("xx.xxx-xx", 10)
  );
  console.log(
    "get cep by address",
    "->",
    await cepSvc.cepByAddress("street foo, between bar and baz", 10)
  );


console.log('\n=========exercício do dia===========\n')
console.log('\n===exercício 1, 2 e 3===')
futuristicCar.drive()
futuristicCar.fly()
console.log('\n===exercício 4, 5 e 6===\n')
car.drive()
airPlane.fly()

}
main();
