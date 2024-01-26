import { useState } from "react";
import { Main, Navigator } from "../component/dashboard";
import { Dash } from "./style";

const Dashboard = () => {
  const [tabOpen, setTab] = useState(true);

  return (
    <Dash
      className={`Main main-container grid grid-cols-2 grid-rows-1 ${
        !tabOpen && "full"
      }`}
    >
      <Navigator tabOpen={tabOpen} setTab={setTab} />
      <Main tabOpen={tabOpen} setTab={setTab} />
    </Dash>
  );
};

export default Dashboard;
