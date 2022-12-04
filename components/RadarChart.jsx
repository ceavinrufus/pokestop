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
import {
  capitalize,
  capitalizeEachFirstLetter,
} from "../functions/stringManipulation";

ChartJS.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler
);

function RadarChart({ pokemon, level, iv, ev }) {
  var maxIV = 31;
  var maxEV = 255;

  var baseStats = pokemon.stats?.map((stat) => stat.base_stat);

  var statsAt = new Array();
  statsAt[0] =
    Math.floor(
      pokemon.stats &&
        (2 * pokemon.stats[0].base_stat + parseInt(iv) + parseInt(ev) / 4) *
          (parseInt(level) / 100)
    ) +
    parseInt(level) +
    10;

  for (let i = 1; i < baseStats?.length; i++) {
    statsAt[i] = Math.floor(
      Math.floor(
        (2 * baseStats[i] + parseInt(iv) + parseInt(ev) / 4) *
          (parseInt(level) / 100)
      ) + 5
    );
  }

  if (
    parseInt(iv) <= 31 &&
    parseInt(iv) >= 0 &&
    parseInt(ev) <= 255 &&
    parseInt(ev) >= 0 &&
    parseInt(level) <= 100 &&
    parseInt(level) >= 1
  ) {
    var dataUsed = statsAt;
    var maxStatsAt = new Array();
    maxStatsAt[0] =
      Math.floor(
        pokemon.stats &&
          (2 * pokemon.stats[0].base_stat + maxIV + maxEV / 4) *
            (parseInt(level) / 100)
      ) +
      parseInt(level) +
      10;

    for (let i = 1; i < baseStats?.length; i++) {
      maxStatsAt[i] = Math.floor(
        (Math.floor(
          (2 * baseStats[i] + maxIV + maxEV / 4) * (parseInt(level) / 100)
        ) +
          5) *
          1.1
      );
    }
  } else {
    var dataUsed = baseStats;
    var maxStatsAt = [255, 255, 255, 255, 255, 255];
  }

  // var maxHP =
  //   Math.floor((2 * maxBase + maxIV + maxEV / 4) * (level / 100)) + level + 10;
  // var minHP =
  //   Math.floor((2 * base + maxIV) * (level / 100)) + level + 10 - maxIV;
  // var maxOther = Math.floor(
  //   (Math.floor((2 * base + maxIV + maxEV / 4) * (level / 100)) + 5) * 1.1
  // );
  // var minOther = Math.floor((Math.floor(2 * base * (level / 100)) + 5) * 0.9);

  const data = {
    labels:
      pokemon.stats &&
      pokemon.stats.map((stat) =>
        capitalizeEachFirstLetter(stat.stat.name, "-")
      ),
    datasets: [
      {
        label: "Base Stats",
        data: dataUsed,
        borderWidth: 2,
        fill: true,
        backgroundColor: "rgba(153, 216, 222, 0.4)",
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
    <div
      className={`w-1/3 h-full py-8 rounded-xl text-gray-700 bg-white text-${
        pokemon.types && hexToGrayscale(types[pokemon.types[0].type.name][1])
      } pl-4 shadow-lg focus:outline-none placeholder:text-gray-500`}
    >
      <Radar
        data={data}
        options={{
          scale: {
            ticks: {
              beginAtZero: true,
              min: 0,
              userCallback: function (label, index, labels) {
                // when the floored value is the same as the value we have a whole number
                if (Math.floor(label) === label) {
                  return label;
                }
              },
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          scale: {
            ticks: {
              beginAtZero: true,
              max: 5,
            },
          },
          scales: {
            r: {
              grid: {
                //   circular: true,
                lineWidth: 0.5,
                color: "rgb(55, 65, 81, 0.8)",
                // color:
                //   pokemon.types &&
                //   hexToGrayscale(types[pokemon.types[0].type.name][1]),
              },
              angleLines: {
                lineWidth: 1.5,
                color: "rgb(55, 65, 81, 0.8)",
                // color:
                //   pokemon.types &&
                //   hexToGrayscale(types[pokemon.types[0].type.name][1]),
              },
              pointLabels: {
                //   backdropColor: "black",
                color: "rgb(55, 65, 81, 0.8)",
                // color:
                //   pokemon.types &&
                //   hexToGrayscale(types[pokemon.types[0].type.name][1]),
                font: {
                  size: 14,
                },
              },
              ticks: {
                // display: false,
                borderColor: "black",
                backdropColor:
                  pokemon.types && types[pokemon.types[0].type.name][0],
                // color: "black",
                color:
                  pokemon.types &&
                  hexToGrayscale(types[pokemon.types[0].type.name][0]),
                font: {
                  size: 14,
                },
                // maxTicksLimit: 7,
              },
              suggestedMin: 0,
              suggestedMax: Math.max(...maxStatsAt),
              min: 0,
              max: Math.max(...maxStatsAt),
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      ></Radar>
    </div>
  );
}

export default RadarChart;
