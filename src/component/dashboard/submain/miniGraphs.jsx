/* eslint-disable react/prop-types */
import styled from "styled-components";
import { ThemeContext } from "../../../context/ThemeContext";
import { useContext } from "react";

export default function MiniGraphs() {
  return (
    <Grut className="graph-box" style={{ border: "none" }}>
      {data.map((gp) => {
        return <Graph gp={gp} key={gp.id} />;
      })}
    </Grut>
  );
}

const Grut = styled.div`
  & {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* grid-template-rows: 1fr 1fr; */
    gap: 1.25rem;
    place-content: center;
    place-items: center;
  }

  @media (max-width: 540px) {
    & {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      justify-content: center;
      align-items: center;

      place-content: center;
      place-items: center;
    }
  }
`;

const Graph = ({ gp }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="graph-box bg-[#FFF] rounded-[0.875rem] w-full min-w-[280px] max-w-[360px] p-[1rem] flex flex-col gap-1 dark:bg-[#1c1919] dark:text-[#fff]"
      style={{
        border: `1px solid ${theme !== "dark" ? "#edf2f7" : "#332e2e"}`,
      }}
    >
      <div className="s1 flex justify-between items-center">
        <div
          className="icon rounded-full w-[2.5rem] h-[2.5rem] grid place-content-center place-items-center"
          style={{
            border: `1px solid ${theme !== "dark" ? "#edf2f7" : "#332e2e"}`,
          }}
        >
          <img src={gp.icon} alt="..." />
        </div>
        <div className="graph">
          <img src={gp.graph.image} alt="..." />
        </div>
      </div>
      <div className="s2 flex flex-col gap-[0.31rem]">
        <h5 className="title text-[1.125rem] text-[#898989] font-[700]">
          {gp.title}
        </h5>
        <h4 className="number font-[900] text-[1.5rem]">{gp.size}</h4>
      </div>
      <div className="s3 gap-[1rem] flex justify-between">
        <div
          className="text-[0.75rem] font-medium rate-box flex px-[0.5rem] py-[0.25rem] justify-center items-center gap-[0.25rem] rounded-[62.5rem] bg-red-300 w-fit"
          style={{
            backgroundColor: gp.rate.rise
              ? "rgba(52, 202, 165, 0.12)"
              : "rgba(237, 84, 78, 0.12)",
            color: gp.rate.rise ? "rgb(52, 202, 165)" : "rgb(237, 84, 78)",
          }}
        >
          <div className="icon small">
            <img
              src={
                gp.rate.rise ? "/image/icons/rise.svg" : "/image/icons/drop.svg"
              }
              alt="..."
            />
          </div>
          <span className="rate font-semibold">{gp.rate.num}%</span>
        </div>
        <div className="duration">
          <span
            style={{
              color: "#606060",
            }}
          >
            vs. previous month
          </span>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    id: "1",
    icon: `/image/graphs/icon1.svg`,
    title: "Total Order",
    size: 350,
    rate: {
      num: "23,5",
      rise: true,
    },
    graph: {
      image: "/image/graphs/graph1.svg",
    },
  },
  {
    id: "2",
    icon: `/image/graphs/icon2.svg`,
    title: "Total Refund",
    size: 270,
    rate: {
      num: "23,5",
      rise: false,
    },
    graph: {
      image: "/image/graphs/graph2.svg",
    },
  },
  {
    id: "3",
    icon: `/image/graphs/icon3.svg`,
    title: "Average Sales",
    size: 1567,
    rate: {
      num: "23,5",
      rise: false,
    },
    graph: {
      image: "/image/graphs/graph3.svg",
    },
  },
  {
    id: "4",
    icon: `/image/graphs/icon4.svg`,
    title: "Total Income",
    size: "$350.000",
    rate: {
      num: "23,5",
      rise: true,
    },
    graph: {
      image: "/image/graphs/graph4.svg",
    },
  },
];
