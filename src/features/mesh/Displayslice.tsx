import Canvas from "@/components/custom/Canvas";
import { Card } from "@/components/ui/card";
import { useSelector } from "react-redux";
import { meshSelector } from "@/features/mesh/meshSlice";
import useImage from "@/hooks/useImage";

const Displayslice = () => {
  const { gradients, bgColor } = useSelector(meshSelector);
  const background = useImage(gradients);

  return (
    <Card className="w-full p-2 mt-4 rounded bg-transparent border-transparent">
      <Canvas>
        <div
          style={{ backgroundColor: bgColor, backgroundImage: background }}
          className="w-full rounded h-[200px]"
        ></div>
      </Canvas>
      <Card className="w-full max-h-[100px] overflow-y-scroll my-2 p-2">{background}</Card>
    </Card>
  );
};

export default Displayslice;
