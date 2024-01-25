import { Main, Navigator } from "../component/dashboard";
import { Dash } from "./style";

const Dashboard = () => {
  return (
    <Dash className="Main main-container grid grid-cols-2 grid-rows-1">
      <Navigator />
      <Main />
    </Dash>
  );
};

export default Dashboard;
