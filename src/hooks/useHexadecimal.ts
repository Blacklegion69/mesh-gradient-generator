const useHexadecimal = () => {
  const digit = [..."0123456789abcdef"];
  let hexadecimal = "#";
  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * 16);
    hexadecimal += digit[random];
  }
  return hexadecimal;
};

export default useHexadecimal;
