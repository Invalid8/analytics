import * as echarts from "echarts/core";
import { TooltipComponent, GridComponent } from "echarts/components";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { Select } from "../../outcasts";
import { Title } from "../style";

const Sales = () => {
  const { theme } = useContext(ThemeContext);
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
            data: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "Mei",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Okt",
              "Nov",
              "Des",
            ],
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
            name: "Direct",
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
  }, [chart]);

  return (
    <div
      className="bg-[#FFF] rounded-[0.875rem] p-[1.53rem] w-full min-w-[280px] max-w-full flex-wrap dark:bg-[#1c1919] dark:text-[#fff]"
      style={{
        border: `1px solid ${theme !== "dark" ? "#E1DFDF" : "#332e2e"}`,
      }}
    >
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
