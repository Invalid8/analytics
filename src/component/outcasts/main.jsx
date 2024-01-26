/* eslint-disable react/prop-types */
import Body from "../dashboard/body";
import Header from "../dashboard/header";
import { Guker } from "../dashboard/style";

const Main = ({ tabOpen, setTab }) => {
  return (
    <Guker
      className={`Main h-svh max-h-svh grid-cols-1 overflow-hidden relative`}
    >
      <Header tabOpen={tabOpen} setTab={setTab} />
      <Body />
    </Guker>
  );
};

export default Main;
