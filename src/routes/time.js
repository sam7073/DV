import React from "react";
import Chart from "react-google-charts";

export function Time() {
  return (
    <Chart
      width="800px"
      height="800px"
      chartType="PieChart"
      data={[
        ["시간대", "사고 건수"],
        ["00시-02시", 10905],
        ["02시-04시", 6262],
        ["04시-06시", 6651],
        ["06시-08시", 12871],
        ["08시-10시", 21901],
        ["10시-12시", 19968],
        ["12시-14시", 20911],
        ["14시-16시", 23547],
        ["16시-18시", 26371],
        ["18시-20시", 28585],
        ["20시-22시", 21292],
        ["22시-24시", 17071],
      ]}
      options={{
        title: "시간대 별 사고 발생 건수",
      }}
    ></Chart>
  );
}

export default Time;
