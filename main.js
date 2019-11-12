export const getTime = () => {
  let d = new Date();
  return d.getTime();
};

export const todaysDate = () => {
  return Date();
};

export const secondsBetweenDates = (dateA, dateB) => {
  return dateA * 1000 - dateB * 1000;
};
