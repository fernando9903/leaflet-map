import React from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coordinate,
  Label,
  Legend,
  Interval,
  Util
} from "bizcharts";
import DataSet from "@antv/data-set";

export default class ChartTest extends React.Component {
  render() {
    const data = [
      {
        country: "Text 1",
        population: 1
      },
      {
        country: "Text 2",
        population: 2
      },
      {
        country: "Text 3",
        population: 3
      },
      {
        country: "Text 4",
        population: 4
      },
    ];
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.source(data).transform({
      type: "sort",

      callback(a, b) {
        return a.population - b.population < 0;
      }
    });
    return (
      <Chart height={400} data={dv.rows} autoFit>
        <Coordinate transpose />
        <Interval position="country*population" />
      </Chart>
    );
  }
}