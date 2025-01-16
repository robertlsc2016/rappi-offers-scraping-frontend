const saveLocalStorageTime = ({ name }) => {
  localStorage.setItem(`${name}-time`, new Date().getTime());
};

export default saveLocalStorageTime;
