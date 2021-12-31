const getCripto = async () => {
  const url = `https://api.coincap.io/v2/assets`
  const criptos = await fetch(url)
    .then((response) => response.json());
    .then((value) => value.data);
};