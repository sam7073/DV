import React from "react";
import Chart from "react-google-charts";

export function Car() {
  return (
    <Chart
      width="800px"
      height="800px"
      chartType="ColumnChart"
      data={[
        ["차량 종류", "(사망자 수) / (사고 건수)"],
        ["중형", 1628 / 98063],
        ["경형", 161 / 9092],
        ["소형", 539 / 27545],
        ["대형", 352 / 16491],
      ]}
      options={{
        title: "차 종 별 사고 건수 대비 사망자 비율",
        vAxis: { title: "사고 건수 대비 사망자 비율" },
        hAxis: { title: "차 종" },
      }}
    ></Chart>
  );
}

export default Car;
