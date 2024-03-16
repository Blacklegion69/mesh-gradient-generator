import Listslice from "@/features/mesh/Listslice";
import Generateslice from "@/features/mesh/Generateslice";
import Displayslice from "@/features/mesh/Displayslice";
import Backgroundslice from "@/features/mesh/Backgroundslice";
import Controllerslice from "@/features/mesh/Controllerslice";
import { useSelector } from "react-redux";
import { meshSelector } from "@/features/mesh/meshSlice";

const Home = () => {
  const { controller } = useSelector(meshSelector);

  return (
    <div className="container w-full gap-y-5 min-h-screen flex items-center flex-col relative dot-dark dark:dot-dark">
      <Displayslice />
      <Backgroundslice />
      <Generateslice />
      <Listslice />
      {controller && <Controllerslice />}
    </div>
  );
};

export default Home;
