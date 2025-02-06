import getLocalStorage from "./getLocalStorage";

const searchLocalStorage = ({ name }) => {
  const dateLocalStorage = localStorage.getItem(`${name}-time`);

  // SE O ITEM DO LOCALSTORAGE FOI SALVO HÁ MAIS DE 10 MINUTOS, RETORNAR FALSE E REMOVE O ITEM
  if (dateLocalStorage && new Date().getTime() - dateLocalStorage > 600000) {
    return false;
  }

  const data = getLocalStorage({ name: name });
  if (data) return data;
};

export default searchLocalStorage;
