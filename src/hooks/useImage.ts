type gradientType = {
  id: string;
  shape: string;
  size: string;
  positionX: number;
  positionY: number;
  color: string;
  endingPoint: number;
};

const useImage = (gradients: gradientType[]): string => {
  let radialGradient = [];
  const prefix = "radial-gradient(";

  for (let i = 0; i < gradients.length; i++) {
    const shape = gradients[i].shape;
    const size = gradients[i].size;
    const x = gradients[i].positionX;
    const y = gradients[i].positionY;
    const color = gradients[i].color;
    const end = gradients[i].endingPoint;
    radialGradient.push(
      `${prefix}${shape} ${size} at ${x}% ${y}%, ${color} 0%, transparent ${end}%)`,
    );
  }

  return radialGradient.toString();
};

export default useImage;
