import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export default function InfoCard(props) {
  const { title, amount, change, changePercentage } = props;

  return (
    <Card className="w-full bg-[#1F2833]">
      <CardBody>
        <Typography variant="h3" color="cyan" className="mb-2">
          {title}
        </Typography>
        <Typography variant="h4" color="white">
          {`$${Math.abs(amount)}`}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography color="white">
          {`${change >= 0 ? 'Up' : 'Down'} $${Math.abs(change)} (${changePercentage}%) From Last Month`}
        </Typography>
      </CardFooter>
    </Card>
  );
}
