import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dices } from "lucide-react";
import useHexadecimal from "@/hooks/useHexadecimal";
import { useSelector, useDispatch } from "react-redux";
import { meshSelector, updateBgColor } from "@/features/mesh/meshSlice";

const Backgroundslice = () => {
  const { bgColor } = useSelector(meshSelector);
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    dispatch(updateBgColor({ bgValue: e.target.value }));
  };

  return (
    <Card className="w-full rounded [&>*]:m-auto [&>*]:text-center grid grid-cols-3 p-2 justify-center items-center relative">
      <Input
        className="border-none rounded m-6 overflow-hidden"
        type="color"
        value={bgColor}
        onChange={handleChange}
      />
      <Input
        className="border-none"
        type="text"
        value={bgColor}
        onChange={(e: any) => {
          dispatch(updateBgColor({ bgValue: e.target.value }));
        }}
      />
      <Button
        className="w-full"
        onClick={() => dispatch(updateBgColor({ bgValue: useHexadecimal() }))}
      >
        <Dices />
      </Button>
    </Card>
  );
};

export default Backgroundslice;
