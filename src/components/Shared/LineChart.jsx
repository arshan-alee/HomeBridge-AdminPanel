import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const options = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#7551FF", "#39B8FF", "#EF39FF"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 335,
    type: "area",
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: "straight",
  },
  // labels: {
  //   show: false,
  //   position: "top",
  // },
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
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: "#fff",
    strokeColors: ["#7551FF", "#39B8FF", "#EF39FF"],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: "category",
    categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    labels: {
      style: {
        colors: "#fff", // Change the color of x-axis labels to white
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,

    title: {
      style: {
        fontSize: "0px",
      },
    },
    labels: {
      style: {
        colors: "#fff", // Change the color of x-axis labels to white
      },
    },
    min: 0,
    max: 100,
  },
};

const LineChart = ({
  eventApplicationCountsByMonth,
  f2rApplicationCountsByMonth,
  jobHouseCountsByMonth,
}) => {
  const [state, setState] = useState({
    series: [
      {
        name: "F-2-R 신청자",
        data: [],
      },

      {
        name: "Job&House",
        data: [],
      },
      {
        name: "Event",
        data: [],
      },
    ],
  });

  // Update the series state whenever the data prop changes
  useEffect(() => {
    setState({
      series: [
        {
          name: "F-2-R 신청자",
          data: f2rApplicationCountsByMonth || [],
        },
        {
          name: "Job&House",
          data: jobHouseCountsByMonth || [],
        },
        {
          name: "Event",
          data: eventApplicationCountsByMonth || [],
        },
      ],
    });
  }, [
    eventApplicationCountsByMonth,
    f2rApplicationCountsByMonth,
    jobHouseCountsByMonth,
  ]);

  return (
    <div>
      <ReactApexChart
        options={options}
        series={state.series} // Make sure it's state.series
        type="line"
        width="100%"
        height={250}
      />
    </div>
  );
};

export default LineChart;
