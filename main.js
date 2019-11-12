export const yesterday = () => {
  const currentTime = new Date();
  let yesterdayDate = currentTime.setDate(currentTime.getDate() - 1);
  return yesterdayDate;
};

export const yesterdayGreet = () => {
  alert("Leave the past in the past");
};
