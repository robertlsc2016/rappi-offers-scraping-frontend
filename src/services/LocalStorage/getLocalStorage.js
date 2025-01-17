//SEMPRE USAR O NOME COM O PREFIXO DO ENDPOINT
const getLocalStorage = async ({ name }) => {
  const data = localStorage.getItem(name);
  return JSON.parse(data) || false;
};

export default getLocalStorage;
