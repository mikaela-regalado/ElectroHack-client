import React from "react";
import { Chart } from "react-google-charts";

export default function AdminChart() {
  return (
    <div className="mt-5">
      <div className={"my-pretty-chart-container"}>
        <Chart
          chartType="ScatterChart"
          data={[
            ["Age", "Weight"],
            [4, 5.5],
            [8, 12],
          ]}
          width="100%"
          height="250px"
          legendToggle
        />
      </div>
      <Chart
        chartType="ScatterChart"
        spreadSheetUrl="https://docs.google.com/spreadsheets/d/1jN0iw0usssnsG1_oi-NXtuKfsUsGme09GsFidbqxFYA/edit#gid=0"
        options={{
          hAxis: {
            format: "short",
          },
          vAxis: {
            format: "decimal",

            // format:'scientific'
            // format:'long'
            // format:'percent'
          },
        }}
        width="100%"
        height="250px"
        rootProps={{ "data-testid": "1" }}
      />
      <Chart
        chartType="ColumnChart"
        spreadSheetUrl="https://docs.google.com/spreadsheets/d/1XWJLkAwch5GXAt_7zOFDcg8Wm8Xv29_8PWuuW15qmAE"
        spreadSheetQueryParameters={{
          headers: 1,
          query: "SELECT A, H, O, Q, R, U LIMIT 5 OFFSET 8",
        }}
        options={{
          // hAxis: {
          // format:'short'
          // },
          vAxis: {
            format: "long",
          },
        }}
        width="100%"
        height="250px"
        rootProps={{ "data-testid": "2" }}
      />
    </div>
  );
}
