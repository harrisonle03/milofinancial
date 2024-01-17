import React from 'react'
import InfoCard from '../components/InfoCard'

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react"

export default function Transactions() {
  return (
    <Card className='h-[calc(100vh-2rem)] w-full max-w-[96rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-white'>
      <Typography variant="h2" color="black">Transaction History</Typography>
    </Card>  )
}
