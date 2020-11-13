import React from "react";
import Chart from "react-google-charts";

export function Day() {
  return (
    <Chart
      width="800px"
      height="800px"
      chartType="PieChart"
      data={[
        ["요일", "사고 발생 건수"],
        ["일요일", 25379],
        ["월요일", 30947],
        ["화요일", 30531],
        ["수요일", 31698],
        ["목요일", 31457],
        ["금요일", 34312],
        ["토요일", 32011],
      ]}
      options={{
        title: "요일별 사고 발생 건수",
      }}
    ></Chart>
  );
}

export default Day;
