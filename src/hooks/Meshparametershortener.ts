const shortener = (data: string): string => {
  switch (data) {
    case "closest-side":
      return "cs";
    case "closest-corner":
      return "cc";
    case "farthest-side":
      return "fs";
    case "circle":
      return "ci";
    case "ellipse":
      return "el";
    default:
      return "fc";
  }
};

export default shortener;
