import { colors, doors, directions, Car } from './car';

const car1 = new Car('volkswagen', colors.SILVER, 4);

car1.openTheDoor(doors.DOOR1);
car1.turn(directions.LEFT);
car1.turn(directions.RIGHT);
car1.speedUP();
car1.speedDown();
car1.turn(directions.RIGHT);
car1.speedUP();
car1.speedDown();
car1.turnOff();
car1.honk();
car1.turnOn()
car1.openTheDoor(doors.DOOR4);
car1.turn(directions.RIGHT);
car1.speedUP();
car1.speedDown();
car1.turn(directions.LEFT);
car1.turn(directions.RIGHT);
car1.speedUP();
car1.speedDown();
car1.speedDown();
car1.stop()