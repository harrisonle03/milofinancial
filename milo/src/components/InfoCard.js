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
    <Card className="mt-6 w-96 bg-gray-200">
      <CardBody>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography variant="h6">
          {`$${Math.abs(amount)}`}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography>
          {`${change >= 0 ? 'Up' : 'Down'} $${Math.abs(change)} (${changePercentage}%) From Last Month`}
        </Typography>
      </CardFooter>
    </Card>
  );
}
