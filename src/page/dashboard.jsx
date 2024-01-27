import { useEffect, useRef, useState } from "react";
import { Main, Navigator } from "../component/dashboard";
import { Dash } from "./style";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Dashboard = () => {
  const [tabOpen, setTab] = useState(true);
  const [full, setFull] = useState(false);

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
      } ${full && "full-nav"}`}
    >
      <Navigator
        tabOpen={tabOpen}
        setTab={setTab}
        full={full}
        setFull={setFull}
      />
      <Main tabOpen={tabOpen} setTab={setTab} />
      <button
        className={`tool-tip-btn w-[2.5rem] h-[2.5rem] bg-[#1e1d1d] text-[#fff] dark:bg-[#6f6e6e] dark:text-[#fff] absolute bottom-5 left-5 rounded-full grid place-content-center`}
        onClick={() => setTab(!tabOpen)}
      >
        {tabOpen ? <FaArrowLeft /> : <FaArrowRight />}
      </button>
      <div
        className="s-veil"
        style={{
          zIndex: full ? "100" : "-1000",
          opacity: full ? "1" : "0",
        }}
        onClick={() => {
          setFull(false);
        }}
      ></div>
    </Dash>
  );
};

export default Dashboard;
