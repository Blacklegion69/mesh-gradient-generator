const useHexaToRgb = (hexacode: string) => {
  const h2d = (hexa: string) => {
    const hexadecimal = [..."0123456789abcdef"];
    const decimal = [..."0123456789", "10", "11", "12", "13", "14", "15"];

    let finalDecimal = "";
    for (let i = 0; i < hexadecimal.length; i++) {
      if (hexadecimal[i] === hexa) {
        finalDecimal = decimal[i];
      }
    }
    return finalDecimal;
  };

  const validation = (value: number) => {
    const val = value.toString().length;
    if (val !== 3 && val === 2) {
      return `0${value}`;
    } else if (val !== 2 && val === 1) {
      return `00${value}`;
    } else {
      return value;
    }
  };

  const hexatorgb = (hexacode: string) => {
    if (hexacode.length >= 6 && hexacode.length <= 7) {
      const r = hexacode.slice(1, 3);
      const g = hexacode.slice(3, 5);
      const b = hexacode.slice(5, 7);
      const RGB_r =
        parseFloat(h2d([...r][0])) * 16 ** 1 +
        parseFloat(h2d([...r][1])) * 16 ** 0;
      const RGB_g =
        parseFloat(h2d([...g][0])) * 16 ** 1 +
        parseFloat(h2d([...g][1])) * 16 ** 0;
      const RGB_b =
        parseFloat(h2d([...b][0])) * 16 ** 1 +
        parseFloat(h2d([...b][1])) * 16 ** 0;
      return `rgb(${validation(RGB_r)},${validation(RGB_g)},${validation(
        RGB_b,
      )})`;
    } else {
      return "Enter a valid 6 digit Hexadecimal code";
    }
  };

  return hexatorgb(hexacode);
};

export default useHexaToRgb;
