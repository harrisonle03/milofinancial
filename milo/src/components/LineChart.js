import {
    Card,
    CardBody,
    CardHeader,
    Typography,
  } from "@material-tailwind/react";
  import Chart from "react-apexcharts";
  import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
   
  const chartConfig = {
    type: "line",
    series: [
      {
        name: "Sales",
        data: [50, 40, 300, 320, 500, 350, 200],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#00FFFF"],
      stroke: {
        lineCap: "round",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#FFFFFF",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#FFFFFF",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: false,
        borderColor: "#FFFFFF",
        strokeDashArray: 15,
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };
   
  export default function LineChart() {
    return (
      <Card className="bg-[#1F2833]">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="flex flex-col gap-2 rounded-none md:flex-row md:items-center"
        >
          <div>
            <h1 className="text-2xl text-cyan-200 font-bold">
                Spending History
            </h1>
          </div>
        </CardHeader>
        <CardBody>
          <Chart {...chartConfig} />
        </CardBody>
      </Card>
    );
  }