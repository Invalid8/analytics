import { Bud } from "./style";
import { Sales, MiniGraphs, Orders, Platform } from "./submain";

const Body = () => {
  return (
    <Bud className="Body w-full h-full overflow-auto bg-[#FAFAFA] gap-[1.25rem] p-[1.25rem] custom-scroll-bar dark:bg-[#171515] dark:text-[#fff]">
      <Sales />
      <MiniGraphs />
      <Orders />
      <Platform />
    </Bud>
  );
};

export default Body;
