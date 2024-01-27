/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import { Select } from "../../../outcasts";
import { Title } from "../../style";

const SHeader = ({ setSortBy, sortBy }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="title flex justify-between items-center gap-2 flex-wrap w-full">
      <Title className="name font-semibold">Sales Trends</Title>
      <div className="opt flex items-center gap-[0.625rem]">
        <span className="font-semibold">Sort by :</span>
        <div
          className="option w-[6rem] bg-[#fff] dark:bg-[#1c1919]"
          style={{
            borderRadius: "1.25rem",
            border: `1px solid ${theme !== "dark" ? "#E1DFDF" : "#332e2e"}`,
            overflow: "hidden",
          }}
        >
          <Select
            className="k bg-[#fff] dark:bg-[#1c1919]"
            setSortBy={setSortBy}
            sortBy={sortBy}
            list={[
              {
                id: 1,
                value: "daily",
                text: "daily",
              },
              {
                id: 2,
                value: "weekly",
                text: "weekly",
              },
              {
                id: 3,
                value: "monthly",
                text: "monthly",
              },
              {
                id: 4,
                value: "yearly",
                text: "yearly",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default SHeader;
