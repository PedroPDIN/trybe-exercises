export function greeter(name: string) {
  return `Olá ${name}`;
}

export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(number: number[]): number {
  return number.reduce(add, 0);
}

export function triangle(base:number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function losango(D: number, d:number): number {
  return (D * d) / 2
}

export function trapezio(h: number, B: number, b: number): number{
  return ((B + b) * h) / 2;
}

export function circulo(r:number): number {
  const PI:number = 3.14;
  return PI * r ** 2
}