import { Card } from "@/components/ui/card";
import {
  Boxes,
  PencilRuler,
  Paintbrush2,
  Ban,
  RefreshCcwDot,
  Dices,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import {
  updateRandomGradient,
  reverseGradients,
} from "@/features/mesh/meshSlice";

type propsType = {
  reverse?: boolean;
};

const Itemicon = ({ reverse = true }: propsType) => {
  const dispatch = useDispatch();

  return (
    <Card className="w-full p-2 [&>*]:m-auto border-none shadow-none rounded relative grid grid-cols-10 ">
      <Boxes />
      <PencilRuler />
      <div className="text-xl font-bold">X</div>
      <div className="text-xl font-bold">Y</div>
      <Paintbrush2 className="col-span-3" />
      <Ban />
      {reverse ? (
        <Button
          onClick={() => dispatch(reverseGradients())}
          className="col-span-2"
        >
          <RefreshCcwDot />
        </Button>
      ) : (
        <Button
          onClick={() => dispatch(updateRandomGradient())}
          className="col-span-2"
        >
          <Dices />
        </Button>
      )}
    </Card>
  );
};

export default Itemicon;
