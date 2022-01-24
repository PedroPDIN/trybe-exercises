import { useState, useEffect } from 'react';

const RandomNumber = () => {
  const [number, setNumber] = useState(1);
  const [multi, setMulti] = useState(false);

  const VALUE_MAX = 100;
  const TIME_MAX = 10000;
  const TIME_VALID_MAX = 4000;
  const ONE = 1;


  const RandomValue = () => {
    const result = Math.floor(Math.random() * VALUE_MAX) + ONE;
    Valid(result)
    setNumber(result)

  }

  const Valid = value => {
    if (value % 3 === 0 || value % 5 === 0) setMulti(true);
    setTimeout(() => setMulti(false), TIME_VALID_MAX)
  }


  useEffect(() => {
   const interval = setInterval(RandomValue, TIME_MAX);
    return () => {clearInterval(interval)}
  })

  return { number, multi }
}

export default RandomNumber;
