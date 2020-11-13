import React from "react";
import Chart from "react-google-charts";

export function Age() {
  return (
    <Chart
      width="800px"
      height="800px"
      chartType="ColumnChart"
      data={[
        ["연령", "(사망자 수) / (사고 건수)"],
        ["13세-20세", 97 / 6256],
        ["21세-30세", 420 / 28727],
        ["31세-40세", 511 / 33618],
        ["41세-50세", 636 / 42204],
        ["51세-60세", 940 / 53631],
        ["61세-64세", 330 / 18095],
        ["65세 이상", 843 / 30012],
      ]}
      options={{
        title: "연령대 별 사고 건수 대비 사망자 비율",
        vAxis: { title: "사고 발생건 수 대비 사망자 비율" },
        hAxis: { title: "연령" },
      }}
    ></Chart>
  );
}

export default Age;
