import React from "react";
import Chart from "react-google-charts";

export function Road() {
  return (
    <Chart
      width="800px"
      height="800px"
      chartType="PieChart"
      data={[
        ["도로형태", "사고 발생 건수"],
        ["터널안", 781],
        ["교량위", 1519],
        ["고가도로", 638],
        ["지하차도", 1763],
        ["단일로", 97014],
        ["교차로내", 65533],
        ["교차로 횡단보도", 7252],
        ["교차로 부근", 32972],
        ["주차장", 1168],
        ["철길", 3],
      ]}
      options={{
        title: "사고 발생 장소 현황",
      }}
    ></Chart>
  );
}

export default Road;
