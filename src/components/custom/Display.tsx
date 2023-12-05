import Canvas from "@/components/custom/Canvas";
import Copy from "@/components/custom/Copy";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dices } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

type propsType = {
  background: string;
  handleClick: () => void;
  single?: string;
};

const Display = ({ background, single, handleClick }: propsType) => {
  return (
    <Card className="w-full border-none bg-transparent flex justify-center flex-col items-center relative">
      <Card className="w-full bg-transparent border-none relative pb-3">
        <Canvas filename="Colorvoid-gradient">
          <Card
            style={{ backgroundColor: single, backgroundImage: background }}
            className="w-full h-[190px] rounded shadow-lg"
          ></Card>
        </Canvas>
        <Button
          onClick={handleClick}
          className="font-bold mb-3 absolute right-0 bottom-0"
        >
          <Dices className="mx-1" /> Random
        </Button>
      </Card>
      <Card className="w-full rounded my-2 p-2 flex justify-between items-center relative">
        <ScrollArea className="text-xs overflow-y-scroll max-h-[30px]">
          {single ? "background-color :" + single + ";" : ""}
          {background}
        </ScrollArea>
        <Copy text={background} />
      </Card>
    </Card>
  );
};

export default Display;
