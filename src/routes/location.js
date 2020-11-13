import React from "react";
import Chart from "react-google-charts";

export function Location() {
  return (
    <Chart
      width="800px"
      height="800px"
      chartType="PieChart"
      data={[
        ["지역구", "사망자 수"],
        ["종로구", 12],
        ["중구", 14],
        ["용산구", 24],
        ["성동구", 22],
        ["광진구", 13],
        ["동대문구", 29],
        ["중랑구", 22],
        ["성북구", 22],
        ["강북구", 20],
        ["도봉구", 10],
        ["노원구", 22],
        ["은평구", 19],
        ["서대문구", 19],
        ["마포구", 18],
        ["양천구", 22],
        ["강서구", 31],
        ["구로구", 26],
        ["금천구", 15],
        ["영등포구", 33],
        ["동작구", 14],
        ["관악구", 18],
        ["서초구", 32],
        ["강남구", 34],
        ["송파구", 40],
        ["강동구", 23],
      ]}
      options={{
        title: "서울시 지역구별 교통사고 사망자 수",
      }}
    ></Chart>
  );
}

export default Location;
