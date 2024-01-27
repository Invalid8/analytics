import * as echarts from "echarts/core";
import { TooltipComponent, GridComponent } from "echarts/components";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { SHeader, sort } from "./SalesTrends";

const Sales = () => {
  const { theme } = useContext(ThemeContext);
  const [sortBy, setSortBy] = useState(sort.monthly);

  echarts.use([TooltipComponent, GridComponent, BarChart, CanvasRenderer]);
  var chart = useRef();

  useEffect(() => {
    const chartDom = chart.current;
    if (chartDom) {
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#34CAA5", // color at 0%
            },
            {
              offset: 1,
              color: "rgba(52, 202, 165, 0.00)", // color at 100%
            },
          ],
          global: false, // default is false
        },

        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: sortBy,
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "Sale",
            type: "bar",
            barWidth: "60%",
            data: [
              8500, 19000, 3000, 28000, 9000, 45000, 9000, 23000, 32000, 4900,
              30000, 25000,
            ],

            roundCap: true,
            itemStyle: {
              emphasis: {
                barBorderRadius: [50, 50],
              },
              normal: {
                barBorderRadius: [50, 50, 0, 0],
              },
            },
          },
        ],
      };

      option && myChart.setOption(option);

      window.addEventListener("resize", () => {
        if (myChart != null && myChart != undefined) {
          myChart.resize();
        }
      });
    }
  }, [chart, sortBy]);

  return (
    <div
      className="bg-[#FFF] rounded-[0.875rem] p-[1.53rem] w-full min-w-[280px] max-w-full flex-wrap dark:bg-[#1c1919] dark:text-[#fff]"
      style={{
        border: `1px solid ${theme !== "dark" ? "#E1DFDF" : "#332e2e"}`,
      }}
    >
      <SHeader setSortBy={setSortBy} sortBy={sortBy} />
      <div className="bud w-full h-full custom-scroll-bar overflow-auto">
        <div
          className="main w-full h-[22rem] min-w-[360px] min-h-[300px] max-h-[22rem]"
          id="chart"
          ref={chart}
        ></div>
      </div>
    </div>
  );
};

export default Sales;
