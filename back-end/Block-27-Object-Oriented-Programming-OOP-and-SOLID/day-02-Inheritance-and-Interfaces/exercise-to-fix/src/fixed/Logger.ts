interface Logger {
  log(x: string): void,
}

class ConsoleLogger implements Logger {
  public log (x: string): void {
    console.log(`ConsoleLogger: ${x}`)
  }
}

class ConsoleLogger2 implements Logger {
  public log (x: string): void {
    console.log(`ConsoleLogger2: ${x}`)
  }
}

interface Database {
  logger: Logger,
  save(key: string, value: string): void,
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}

  public save(key: string, value: string): void {
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