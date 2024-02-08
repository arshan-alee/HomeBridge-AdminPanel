import { useEffect, useState } from "react";
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
    categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
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

const BarChart = ({ data }) => {
  const [series, setSeries] = useState([
    {
      name: "Users",
      data: [], // Initially empty, will be updated by useEffect
    },
  ]);

  // Update the series state whenever the data prop changes
  useEffect(() => {
    setSeries([
      {
        name: "Users",
        data: data, // Use the updated data prop
      },
    ]);
  }, [data]);

  return (
    <div>
      <ApexCharts options={options} series={series} type="bar" height={250} />
    </div>
  );
};

export default BarChart;
