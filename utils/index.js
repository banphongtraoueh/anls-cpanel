const changeISOtoNormalDate = (time) => {
  let date;

  date = time ? new Date(time) : new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export { changeISOtoNormalDate };
