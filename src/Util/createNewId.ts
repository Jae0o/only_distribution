const createNewId: () => string = () => {
  const date = new Date().getTime();
  const randomNum = Math.random();
  return `${date}${randomNum}`;
};

export default createNewId;
