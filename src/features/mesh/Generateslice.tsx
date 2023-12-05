import { Card } from "@/components/ui/card";
import Itemicon from "@/components/custom/Itemicon";
import Item from "@/components/custom/Item";
import { meshSelector } from "@/features/mesh/meshSlice";
import { useSelector } from "react-redux";

const Generateslice = () => {
  const { randomGradient } = useSelector(meshSelector);

  return (
    <Card className="w-full rounded py-2 shadow-none">
      <Itemicon reverse={false} />
      <Item
        className="border-b-transparent"
        data={randomGradient}
        controller={false}
      />
    </Card>
  );
};

export default Generateslice;
