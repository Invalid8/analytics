import { useEffect, useRef, useState } from "react";
import { Main, Navigator } from "../component/dashboard";
import { Dash } from "./style";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Dashboard = () => {
  const [tabOpen, setTab] = useState(true);

  const cVal = useRef(window.innerWidth < 540 ? "full" : "full-lg");

  useEffect(() => {
    window.addEventListener("resize", resize);
    return window.removeEventListener("resize", resize);
  }, []);

  const resize = () => {
    cVal.current = window.innerWidth < 540 ? "full" : "full-lg";

    if (window.innerWidth < 540) setTab(false);
  };

  window.addEventListener("resize", resize);

  return (
    <Dash
      className={`Main main-container grid grid-cols-2 grid-rows-1 relative ${
        !tabOpen ? cVal.current : "opened"
      }`}
    >
      <Navigator tabOpen={tabOpen} setTab={setTab} />
      <Main tabOpen={tabOpen} setTab={setTab} />
      <button
        className={`tool-tip-btn w-[2.5rem] h-[2.5rem] bg-[#1e1d1d] text-[#fff] dark:bg-[#6f6e6e] dark:text-[#fff] absolute bottom-5 left-5 rounded-full grid place-content-center`}
        onClick={() => setTab(!tabOpen)}
      >
        {tabOpen ? <FaArrowLeft /> : <FaArrowRight />}
      </button>
    </Dash>
  );
};

export default Dashboard;
