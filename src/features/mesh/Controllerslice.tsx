import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dices } from "lucide-react";
import useHexadecimal from "@/hooks/useHexadecimal";
import Canvas from "@/components/custom/Canvas";
import { useSelector, useDispatch } from "react-redux";
import {
  meshSelector,
  updateController,
  updateColor,
} from "@/features/mesh/meshSlice";
import Backgroundslice from "./Backgroundslice";
import Sliderslice from "./Sliderslice";
import Radioslice from "./Radioslice";
import useImage from "@/hooks/useImage";

const Controllerslice = () => {
  const dispatch = useDispatch();
  const { bgColor, gradients, selected } = useSelector(meshSelector);
  const filtered = gradients.filter((gradiant) => gradiant.id === selected);
  const background = useImage(filtered);

  const { color } = filtered[0];

  return (
    <Card className="w-full gap-y-2 p-2 rounded-none min-h-screen absolute top-0 flex items-center flex-col">
      <Canvas>
        <div
          style={{
            backgroundColor: bgColor,
            backgroundImage: background,
          }}
          className="w-full h-[200px] rounded "
        ></div>
      </Canvas>
      <Backgroundslice />
      <Card className="w-full rounded [&>*]:m-auto [&>*]:text-center grid grid-cols-3 p-2 justify-center items-center relative">
        <Input
          className="border-none rounded m-6 overflow-hidden"
          type="color"
          value={color}
          onChange={(e: any) => {
            dispatch(updateColor({ colorvalue: e.target.value }));
          }}
        />
        <Input
          className="border-none"
          type="text"
          value={color}
          onChange={(e: any) => {
            dispatch(updateColor({ colorvalue: e.target.value }));
          }}
        />
        <Button
          className="w-full"
          onClick={() =>
            dispatch(updateColor({ colorvalue: useHexadecimal() }))
          }
        >
          <Dices />
        </Button>
      </Card>
      <Radioslice />
      <Sliderslice />
      <Button
        onClick={() => dispatch(updateController({ controllerValue: false }))}
        className="font-bold"
      >
        Collapse
      </Button>
    </Card>
  );
};

export default Controllerslice;
