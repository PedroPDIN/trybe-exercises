type bird = {
  name: string;
};

type numbers = {
  a: number,
  b: number,
};

const somNumber = (n: numbers): number => {
  return (n.a + n.b)
};

console.log(somNumber({ a: 2, b: 2 }));