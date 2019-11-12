let firstName = "Adam";
let lastName = "Kovacs";

export const greet = () => {
  return `Hello, My name is ${firstName} ${lastName}`;
};

export const getTime = () => {
  let d = new Date();
  return d.getTime();
};

export const todaysDate = () => {
  return Date();
};
