import useHexadecimal from "./useHexadecimal";

const generateGradient = () => {
  const shapes = ["circle", "ellipse"];
  const sizes = [
    "closest-side",
    "closest-corner",
    "farthest-side",
    "farthest-corner",
  ];
  return {
    id: crypto.randomUUID(),
    shape: shapes[Math.floor(Math.random() * 2)],
    size: sizes[Math.floor(Math.random() * 4)],
    positionX: Math.floor(Math.random() * 100),
    positionY: Math.floor(Math.random() * 100),
    color: useHexadecimal(),
    endingPoint: Math.floor(Math.random() * 100),
  };
};

export default generateGradient;
