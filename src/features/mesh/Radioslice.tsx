import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useSelector, useDispatch } from "react-redux";
import {
  meshSelector,
  updateShape,
  updateSize,
} from "@/features/mesh/meshSlice";

const Radioslice = () => {
  const dispatch = useDispatch();
  const { gradients, selected } = useSelector(meshSelector);
  const filtered = gradients.filter((gradient) => gradient.id === selected);

  const { shape, size } = filtered[0];

  const handleShape = (value: string) => {
    dispatch(updateShape({ shapevalue: value }));
  };
  const handleSize = (value: string) => {
    dispatch(updateSize({ sizevalue: value }));
  };

  const shapeData = [
    {
      value: "circle",
      label: "Circle",
    },
    {
      value: "ellipse",
      label: "Ellipse",
    },
  ];

  const sizeData = [
    {
      value: "closest-side",
      label: "Closest-Side",
    },
    {
      value: "closest-corner",
      label: "closest-corner",
    },
    {
      value: "farthest-side",
      label: "farthest-side",
    },
    {
      value: "farthest-corner",
      label: "farthest-corner",
    },
  ];

  return (
    <Card className="w-full p-2 grid grid-cols-4 justify-between items-center relative">
      <Card className="border-none">
        <RadioGroup onValueChange={handleShape} defaultValue={shape}>
          {shapeData.map((d, id) => {
            return (
              <div key={id} className="flex items-center space-x-2">
                <RadioGroupItem value={d.value} id={d.label} />
                <Label className="" htmlFor={d.label}>
                  {d.label}
                </Label>
              </div>
            );
          })}
        </RadioGroup>
      </Card>
      <Card className="border-none col-span-3">
        <RadioGroup
          className="w-full grid grid-cols-2 border-none justify-center items-center"
          onValueChange={handleSize}
          defaultValue={size}
        >
          {sizeData.map((d, id) => {
            return (
              <div key={id} className="flex items-center space-x-2">
                <RadioGroupItem value={d.value} id={d.label} />
                <Label className="" htmlFor={d.label}>
                  {d.label}
                </Label>
              </div>
            );
          })}
        </RadioGroup>
      </Card>
    </Card>
  );
};

export default Radioslice;
