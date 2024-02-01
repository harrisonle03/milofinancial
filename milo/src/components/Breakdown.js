import {
    Card,
    CardBody,
    CardHeader,
    Typography,
  } from "@material-tailwind/react";
  import Chart from "react-apexcharts";

  const chartConfig = {
    type: "pie",
    width: 400,
    height: 400,
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "Hello",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617", "#ff8f00", "#00897b", "#1e88e5", "#d81b60"],
      legend: {
        show: true,
      },
    },
  };
   
  export default function Breakdown() {
    return (
      <Card className="bg-[#1F2833]">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className=""
        >
        <Typography variant="h3" color="white">
          Spending Breakdown Report
        </Typography>
        </CardHeader>
        <CardBody className="flex items-center justify-center">
          <Chart {...chartConfig} />
        </CardBody>
      </Card>
    );
  }