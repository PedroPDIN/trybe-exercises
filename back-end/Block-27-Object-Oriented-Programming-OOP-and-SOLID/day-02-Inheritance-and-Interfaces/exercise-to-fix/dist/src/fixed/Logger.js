"use strict";
class ConsoleLogger {
    log(x) {
        console.log(`ConsoleLogger: ${x}`);
    }
}
class ConsoleLogger2 {
    log(x) {
        console.log(`ConsoleLogger2: ${x}`);
    }
}
class ExampleDatabase {
    constructor(logger = new ConsoleLogger()) {
        this.logger = logger;
    }
    save(key, value) {
        this.logger.log(`Chave: ${key}, Valor: ${value}`);
    }
}
const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();
const exampleDB1 = new ExampleDatabase(logger1);
const exampleDB2 = new ExampleDatabase(logger2);
const exampleDB3 = new ExampleDatabase();
exampleDB1.save('12a', 'Pedro');
exampleDB2.save('12b', 'Xablau');
exampleDB3.save('12c', 'Pedro Xablau');
