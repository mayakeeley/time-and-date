// let firstName = "Adam";
// let lastName = "Kovacs";

// export const greet = () => {
//   return `Hello, My name is ${firstName} ${lastName}`;
// };
export const currentTime = new Date();
// export const prevTime;
const pastTime = () => {
  const prevTime = currentTime.setDate(currentTime.getDate() - 1);
  return console.log(prevTime);

  // const hours = currentTime.getHours;
  // const mins = currentTime.getMins;
  // const secs = currentTime.getSeconds;
};
