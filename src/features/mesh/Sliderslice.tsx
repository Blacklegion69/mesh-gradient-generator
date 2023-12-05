import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useSelector, useDispatch } from "react-redux";
import {
  meshSelector,
  updatePositionX,
  updatePositionY,
  updateEndingPoint,
} from "@/features/mesh/meshSlice";
import React from "react";

const Sliderslice = () => {
  const dispatch = useDispatch();

  const { gradients, selected } = useSelector(meshSelector);
  const filtered = gradients.filter((gradient) => gradient.id === selected);
  const { positionX, positionY, endingPoint } = filtered[0];

  const handleX = (value: number[]) => {
    dispatch(updatePositionX({ xvalue: value }));
  };
  const handleY = (value: number[]) => {
    dispatch(updatePositionY({ yvalue: value }));
  };
  const handleEndingPoint = (value: number[]) => {
    dispatch(updateEndingPoint({ endingpointvalue: value }));
  };

  const sliders = [
    {
      label: "PositionX",
      value: positionX,
      action: handleX,
      actionText: (e: any) => {
        dispatch(updatePositionX({ xvalue: e.target.value }));
      },
    },
    {
      label: "PositionY",
      value: positionY,
      action: handleY,
      actionText: (e: any) => {
        dispatch(updatePositionY({ yvalue: e.target.value }));
      },
    },
    {
      label: "EndingPoint",
      value: endingPoint,
      action: handleEndingPoint,
      actionText: (e: any) => {
        dispatch(updateEndingPoint({ endingpointvalue: e.target.value }));
      },
    },
  ];

  return (
    <Card className="w-full rounded p-2">
      {sliders.map((slider, id) => {
        return (
          <React.Fragment key={id}>
            <Card className="w-full border-none">{slider.label} :</Card>
            <Card className="w-full border-none  rounded-none flex justify-center items-center relative">
              <Slider
                className="mx-2"
                min={0}
                max={100}
                step={1}
                onValueChange={slider.action}
                value={[slider.value]}
              />
              <Input
                type="text"
                value={slider.value}
                onChange={slider.actionText}
                className="w-[60px] text-center"
              />
            </Card>
          </React.Fragment>
        );
      })}
    </Card>
  );
};

export default Sliderslice;
