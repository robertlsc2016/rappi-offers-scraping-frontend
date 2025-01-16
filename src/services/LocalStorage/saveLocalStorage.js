const saveLocalStorage = ({ name, data }) => {
  localStorage.setItem(name, JSON.stringify(data));
};

export default saveLocalStorage;
