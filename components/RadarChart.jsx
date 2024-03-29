import React, { useState } from "react";
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
import { types, hexToGrayscale, hexToRgb } from "../functions/color";

ChartJS.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler
);

function InputParam({ label, value, set, placeholder }) {
  return (
    <div className="flex flex-col text-center items-center lg:items-center mx-10 md:mx-0 mb-2">
      <label htmlFor="" className="text-gray-100 md:w-full lg:text-xl">
        {label}
      </label>
      <input
        type="text"
        required
        value={value}
        placeholder={placeholder}
        className={`h-10 rounded-xl text-gray-700 w-5/6 lg:w-full lg:max-w-[200px] bg-white px-4 shadow-lg focus:outline-none placeholder:text-gray-500`}
        onChange={(e) => {
          set(e.target.value);
        }}
      />
    </div>
  );
}

function RadarChart({ pokemon, smallDevice }) {
  const [level, setLevel] = useState();
  const [iv, setIV] = useState();
  const [ev, setEV] = useState();

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
    labels: [
      "HP",
      "Attack",
      "Defense",
      smallDevice ? "Sp. Attack" : "Special Attack",
      smallDevice ? "Sp. Defense" : "Special Defense",
      "Speed",
    ],
    datasets: [
      {
        label: "Base Stats",
        data: dataUsed,
        borderWidth: 2,
        fill: true,
        backgroundColor: `rgb(${
          hexToRgb(types[pokemon.types[0].type.name][0]).r
        }, ${hexToRgb(types[pokemon.types[0].type.name][0]).g}, ${
          hexToRgb(types[pokemon.types[0].type.name][0]).b
        }, 0.5)`,
        borderColor: types[pokemon.types[0].type.name][1],
        pointBorderWidth: 0.5,
        pointBackgroundColor: types[pokemon.types[0].type.name][0],
        pointBorderColor: types[pokemon.types[0].type.name][1],
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: types[pokemon.types[0].type.name][0],
      },
    ],
  };

  return (
    <div
      className={`${
        smallDevice && "flex items-center flex-col"
      } justify-center lg:flex`}
    >
      <div className="flex justify-center w-full h-[300px] md:h-[400px] lg:h-[500px] lg:flex-grow items-center rounded-full pb-8">
        <div
          className={`flex md:w-full h-full rounded-xl text-gray-700 bg-white text-${
            pokemon.types &&
            hexToGrayscale(types[pokemon.types[0].type.name][1])
          } py-4 shadow-lg focus:outline-none placeholder:text-gray-500`}
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
                    // circular: true,
                    lineWidth: 0.5,
                    color: "rgb(55, 65, 81, 0.8)",
                  },
                  angleLines: {
                    lineWidth: 1.5,
                    color: "rgb(55, 65, 81, 0.8)",
                  },
                  pointLabels: {
                    color: "rgb(55, 65, 81, 0.8)",
                    font: {
                      size: smallDevice ? 10 : 14,
                    },
                  },
                  ticks: {
                    display: !smallDevice,
                    borderColor: "black",
                    backdropColor:
                      pokemon.types && types[pokemon.types[0].type.name][1],
                    // color: "black",
                    color:
                      pokemon.types &&
                      hexToGrayscale(types[pokemon.types[0].type.name][1]),
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
      </div>
      <div className="flex justify-center w-full mb-16 lg:w-1/3">
        <div className="w-full flex-col md:flex-row lg:flex-col lg:ml-10 flex items-around justify-center">
          <InputParam
            label={"Level"}
            placeholder={"1-100"}
            value={level}
            set={setLevel}
          />
          <InputParam
            label={"Individual Value"}
            placeholder={"0-31"}
            value={iv}
            set={setIV}
          />
          <InputParam
            label={"Effort Value"}
            placeholder={"0-255"}
            value={ev}
            set={setEV}
          />
        </div>
      </div>
    </div>
  );
}

export default RadarChart;
