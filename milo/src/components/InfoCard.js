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
        <p className="mb-2 text-cyan-200 text-2xl font-bold">
          {title}
        </p>
        <p className="text-white text-base">
          {`$${Math.abs(amount)}`}
        </p>
      </CardBody>
      <CardFooter className="pt-0">
        <p className="text-white">
          {`${change >= 0 ? 'Up' : 'Down'} $${Math.abs(change)} (${changePercentage}%) From Last Month`}
        </p>
      </CardFooter>
    </Card>
  );
}
