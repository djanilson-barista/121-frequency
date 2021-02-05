export const localStorageAPI = {
  getItem: (item: string): any => {
    const storage = localStorage.getItem(item);

    return storage ? JSON.parse(storage) : [];
  },

  setItem: (item: string, data: any): any => {
    const storage = JSON.stringify(data);

    if (storage && item && item !== '') {
      localStorage.setItem(item, storage);
      return data;
    }

    return [];
  },
};
