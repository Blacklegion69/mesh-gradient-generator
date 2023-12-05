import { useSelector } from "react-redux";
import { meshSelector } from "@/features/mesh/meshSlice";
import Item from "@/components/custom/Item";
import Itemicon from "@/components/custom/Itemicon";
import { Card } from "@/components/ui/card";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const Listslice = () => {
  const { gradients } = useSelector(meshSelector);

  return (
    <Card className="w-full rounded bg-transparent shadow-none flex items-center flex-col relative">
      <Itemicon />
      <ScrollArea className="w-full max-h-[300px] overflow-y-scroll">
        <Card className="w-full shadow-none bg-transparent border-none">
          {gradients.map((data, id) => (
            <React.Fragment key={id}>
              <Item data={JSON.stringify(data)} />
            </React.Fragment>
          ))}
        </Card>
      </ScrollArea>
    </Card>
  );
};

export default Listslice;
