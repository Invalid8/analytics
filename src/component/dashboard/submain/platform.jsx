import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { Title } from "../style";

/* eslint-disable react/prop-types */
export default function Platform() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="bg-[#FFF] rounded-[0.875rem] p-[1.25rem] flex flex-col gap-[1.25rem] w-full h-full dark:bg-[#1c1919] dark:text-[#fff]"
      style={{
        border: `1px solid ${theme !== "dark" ? "#E1DFDF" : "#332e2e"}`,
      }}
    >
      <div className="heading flex justify-between">
        <Title className="name font-semibold">Top Platform</Title>
        <button className="see-all text-[#34CAA5] text-lg font-semibold">
          See All
        </button>
      </div>
      <div className="b overflow-auto max-h-[360px] custom-scroll-bar">
        <div className="bud flex flex-col gap-[1.25rem] w-full h-full max-h-full pr-4">
          {data.map((platform) => {
            return <Plat platform={platform} key={platform.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

const Plat = ({ platform }) => {
  return (
    <div className="plat w-full flex flex-col gap-[1.25rem] text-[1.25em]">
      <div className="name">
        <span className="font-semibold">{platform.name}</span>
      </div>
      <div className="percentage">
        <div className="bar w-100 bg-[#F5F5F5] rounded-[2.5rem] h-[0.75rem] flex-shrink-0 relative">
          <div
            className={`fill w-[${platform.percent.num}%] absolute left-0 rounded-[2.5rem] top-0 bg-[${platform.color}] h-full flex-shrink-0`}
            style={{
              width: `${platform.percent.num + 32}%`,
              background: platform.color,
            }}
          ></div>
        </div>
      </div>
      <div className="info flex justify-between items-center">
        <span className="price">${platform.price}</span>
        <span
          className={`percentage ${!platform.percent.high && "text-[#ED544E]"}`}
        >
          {platform.percent.high ? "+" : "-"}
          {platform.percent.num}
        </span>
      </div>
    </div>
  );
};

const data = [
  {
    id: "1",
    name: "Book Bazar",
    percent: {
      num: 15,
      high: true,
    },
    color: "var(--Purple, #6160DC)",
    price: "2,500,000",
  },
  {
    id: "2",
    name: "Artisan Aisle",
    percent: {
      num: 10,
      high: true,
    },
    color: "var(--Blue, #54C5EB)",
    price: "1,800,000",
  },
  {
    id: "3",
    name: "Toy Troop",
    percent: {
      num: 8,
      high: true,
    },
    color: "var(--Orange, #FFB74A)",
    price: "1,200,000",
  },
  {
    id: "4",
    name: "XStore",
    percent: {
      num: 4,
      high: true,
    },
    color: "var(--Red, #FF4A55)",
    price: "800,000",
  },
];
