const useLocalStorage = () => {
  const setItemLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  const deleteItemLocalStorage = (key: string) => {
    localStorage.removeItem(key);
  };

  const getItemLocalStorage = (key: string) => {
    return localStorage.getItem(key);
  };
  return { setItemLocalStorage, deleteItemLocalStorage, getItemLocalStorage };
};

export default useLocalStorage;
