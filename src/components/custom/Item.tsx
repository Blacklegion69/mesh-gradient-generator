import { Card } from "@/components/ui/card";
import ms from "@/hooks/Meshparametershortener";
import { Trash2, Settings, ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import {
  addGradient,
  deleteGradient,
  updateController,
  updateSelected,
} from "@/features/mesh/meshSlice";
import { cn } from "@/lib/utils";

type propsType = {
  data: string;
  controller?: boolean;
  className?: string;
};

const Item = ({ data, controller = true, className }: propsType) => {
  const dispatch = useDispatch();

  const obj = JSON.parse(data);
  const { id, shape, size, positionX, positionY, color, endingPoint } = obj;
  return (
    <Card
      className={cn(
        "w-full [&>*]:m-auto text-xl p-1 px-2 shadow-none grid grid-cols-10 rounded-none border-r-transparent border-l-transparent",
        className,
      )}
    >
      <Card className="bg-transparent shadow-none border-none">
        {ms(shape)}
      </Card>
      <Card className="bg-transparent shadow-none border-none">{ms(size)}</Card>
      <Card className="bg-transparent shadow-none border-none">
        {positionX}
      </Card>
      <Card className="bg-transparent shadow-none border-none">
        {positionY}
      </Card>
      <Card
        style={{ borderBottom: `4px solid ${color}` }}
        className="bg-transparent text-center rounded-none col-span-3 shadow-none border-none"
      >
        {color.toUpperCase()}
      </Card>
      <Card className="bg-transparent shadow-none border-none">
        {endingPoint}
      </Card>
      {controller ? (
        <>
          <Settings
            onClick={() => {
              dispatch(updateSelected({ selectedId: id }));
              dispatch(updateController({ controllerValue: true }));
            }}
            className="m-0 p-0"
          />
          <Trash2
            onClick={() => dispatch(deleteGradient({ deleteId: id }))}
            className="m-0 p-0"
          />
        </>
      ) : (
        <Button onClick={() => dispatch(addGradient())} className="col-span-2">
          <ImagePlus />
        </Button>
      )}
    </Card>
  );
};

export default Item;
