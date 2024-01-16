import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
  } from "@material-tailwind/react";

import {
    CreditCardIcon,
} from "@heroicons/react/24/solid";


export default function InfoCard() {
  return (
    <Card className="w-96 flex-row">
      <CardHeader
      shadow={false}
      floated={false}
      className="rounded-r-none"
      >
        <CreditCardIcon className="h-12 w-12 stroke-2" />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray" className="mb-2">
            Total Expenses
        </Typography>  
        <Typography variant="h5" color="blue-gray" className="mb-2">
            $2,000
        </Typography>    
      </CardBody>
    </Card>
  )
}

