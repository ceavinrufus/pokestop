import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js/auto";
import { types, hexToGrayscale } from "../functions/color";
import { capitalize } from "../functions/stringManipulation";

ChartJS.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler
);

function RadarChart({ pokemon }) {
  const data = {
    labels:
      pokemon.stats && pokemon.stats.map((stat) => capitalize(stat.stat.name)),
    datasets: [
      {
        label: "Base Stats",
        data: pokemon.stats && pokemon.stats.map((stat) => stat.base_stat),
        borderWidth: 2,
        fill: true,
        backgroundColor: "rgba(153, 216, 222, 0.7)",
        borderColor: "#00AFBB",
        pointBorderWidth: 0.5,
        pointBackgroundColor: "#00AFBB",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  };

  return (
    <Radar
      height={500}
      width={500}
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            grid: {
              //   circular: true,
              lineWidth: 0.5,
              color:
                pokemon.types &&
                hexToGrayscale(types[pokemon.types[0].type.name][1]),
            },
            angleLines: {
              lineWidth: 1.5,
              color:
                pokemon.types &&
                hexToGrayscale(types[pokemon.types[0].type.name][1]),
            },
            pointLabels: {
              //   backdropColor: "black",
              color:
                pokemon.types &&
                hexToGrayscale(types[pokemon.types[0].type.name][1]),
              font: {
                size: 14,
              },
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 10,
              display: false,
              maxTicksLimit: 5,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    ></Radar>
  );
}

export default RadarChart;
