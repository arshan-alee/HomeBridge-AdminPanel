import { useState } from "react";
import ApexCharts from "react-apexcharts";

const options = {
  colors: ["#7551FF", "#80CAEE"],
  chart: {
    // fontFamily: "Satoshi, sans-serif",
    type: "bar",
    height: "100%",
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },

  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 10,
            columnWidth: "25%",
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      line: {
        show: false,
      },
      borderRadius: 0,
      columnWidth: "25%",
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "last",
    },
  },
  dataLabels: {
    enabled: false,
  },

  xaxis: {
    categories: ["1", "2", "3", "4", "5", "6", "7"],
    labels: {
      style: {
        colors: "#fff", // Change the color of x-axis labels to white
      },
    },
  },

  yaxis: {
    show: false,
    labels: {
      style: {
        colors: "#fff", // Change the color of y-axis labels to white
      },
    },
  },

  grid: {
    xaxis: {
      lines: {
        show: false,
      },
    },

    yaxis: {
      lines: {
        show: false,
      },
    },
  },

  legend: {
    position: "top",
    horizontalAlign: "left",
    fontFamily: "Satoshi",
    fontWeight: 500,
    fontSize: "14px",

    markers: {
      radius: 99,
    },
  },
  fill: {
    opacity: 1,
  },
};

const BarChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Sales",
        data: [44, 55, 41, 67, 22, 43, 65],
      },
      // {
      //   name: "Revenue",
      //   data: [13, 23, 20, 8, 13, 27, 15],
      // },
    ],
  });

  return (
    <div>
      <ApexCharts
        options={options}
        series={state.series}
        type="bar"
        height={250}
      />
    </div>
  );
};

export default BarChart;
