import getLocalStorage from "./getLocalStorage";

const searchLocalStorage = async ({ name }) => {
  const dateLocalStorage = localStorage.getItem(`${name}-time`);

  // SE O ITEM DO LOCALSTORAGE FOI SALVO HÁ MAIS DE 10 MINUTOS, RETORNAR FALSE
  if (dateLocalStorage && new Date().getTime() - dateLocalStorage > 600000) {
    return false;
  }

  const data = await getLocalStorage({ name: name });
  if (data) return data;
};

export default searchLocalStorage;
