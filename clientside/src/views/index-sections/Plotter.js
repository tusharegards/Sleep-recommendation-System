import React from "react";

import { Bar, Line , Doughnut } from "react-chartjs-2";
import { Container } from "reactstrap";

function Plotter() {
  return (
    <div style={{ margin: "50px", padding: "40px" }}>
      <Container>
        <Bar
          data={{
            labels: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
            datasets: [
              {
                label: "sleep plots for the previous week",
                data: [18, 19, 6, 15, 18, 8, 4, 3, 2, 1, 12],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                  "rgba(255, 206, 86, 1)",
                ],
                borderWidth: 3,
              },
              {
                label: "sleep plots for this week",
                data: [10, 17, 4, 11, 20, 13, 12, 15, 6, 9, 4],
                backgroundColor: [
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                ],
                borderColor: [
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                ],
                borderWidth: 3,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
          }}
          height={400}
          weight={400}
        />
      </Container>
      <Container>
        <Line
          data={{
            labels: [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "23",
              "24",
              "25",
              "26",
              "27",
              "28",
              "29",
              "30",
              "31",
            ],
            datasets: [
              {
                label: "# sleep plots for the previous month",
                data: [32, 19, 6, 15, 18, 8, 4, 3, 2, 1, 12, 19, 6, 15, 18, 8, 4, 3, 2, 1, 12, 19, 6, 15, 18, 8, 4, 3, 2, 1, 12],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                  "rgba(54, 162, 235, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
          }}
          height={400}
          weight={400}
        />
      </Container>
      <Container>
        <Doughnut
          data={{
            labels: [
              "week1",
              "week2",
              "week3",
              "week4",
            ],
            datasets: [
              {
                label: "doughnut to compare month week sleep durations",
                data: [42, 46, 33, 40, ],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                 
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                
                ],
                borderWidth: 3,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
          }}
          height={200}
          weight={200}
        />
      </Container>
    </div>
  );
}

export default Plotter;
