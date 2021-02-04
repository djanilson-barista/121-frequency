export const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    // eslint-disable-next-line eqeqeq
    const v = c == 'x' ? r : (r & 0x3) | 0x8;

    return v.toString(16);
  });
};

export const getAge = (date: string) => {
  const d = new Date().getFullYear();
  const y = Number(date.split('-')[0]);

  return d - y;
};
