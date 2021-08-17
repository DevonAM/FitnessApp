import React from "react";
import { Card, Segment, Table } from "semantic-ui-react";
import Graph from "../components/Graph";
import "./views.css";
const Dashboard = () => {
  let data = [
    {
      country: "AI",
      "hot dog": 68,
      "hot dogColor": "hsl(169, 70%, 50%)",
      burger: 189,
      burgerColor: "hsl(42, 70%, 50%)",
      sandwich: 150,
      sandwichColor: "hsl(311, 70%, 50%)",
      kebab: 80,
      kebabColor: "hsl(21, 70%, 50%)",
      fries: 134,
      friesColor: "hsl(348, 70%, 50%)",
      donut: 156,
      donutColor: "hsl(103, 70%, 50%)",
    },
  ];
  return (
    <div className="dashboardBackground">
      <div className="card x-large dashboardBackgroundCard">
        <div className="row">
          <div className="col l6 s12">
            <div className="card large dashboardCardLarge">
              <div className="dashboardBarChartCard">
                <Graph data={data}></Graph>
              </div>
            </div>
          </div>

          <div className="col l6 s12">
            <div className="card large dashboardCardLarge">
              <h5 className="dashboardTableText"></h5>
              <table className="centered">
                <thead>
                  <tr>
                    <th>Intake</th>
                    <th>Daily Goal</th>
                    <th>Remaining</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Calories</td>
                    <td>800</td>
                    <td>600</td>
                  </tr>
                  <tr>
                    <td>Carbs</td>
                    <td>800</td>
                    <td>600</td>
                  </tr>
                  <tr>
                    <td>Fat</td>
                    <td>800</td>
                    <td>600</td>
                  </tr>
                  <tr>
                    <td>Protein</td>
                    <td>800</td>
                    <td>600</td>
                  </tr>
                  <tr>
                    <td>Sodium</td>
                    <td>800</td>
                    <td>600</td>
                  </tr>
                  <tr>
                    <td>Fiber</td>
                    <td>800</td>
                    <td>600</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
