export const generateRandomId = () =>
  Number(Date.now().toString() + Math.floor(Math.random() * 1000));
