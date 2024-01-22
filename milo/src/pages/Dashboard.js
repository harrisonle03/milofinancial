import React from 'react'
import InfoCard from '../components/InfoCard'
import LineChart from '../components/LineChart'
import Breakdown from '../components/Breakdown'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react"

export default function Dashboard() {
  return (
    <Card className='h-[calc(100vh-2rem)] w-full max-w-[96rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-white'>
      <div className="flex gap-6 items-center justify-center">
        <LineChart />
        <div className="flex flex-col justify-between">
          <InfoCard title="Total Expenses" amount={100} change={20} changePercentage={10}/>
          <InfoCard title="Total Earnings" amount={500} change={20} changePercentage={30}/>
          <InfoCard title="Total Balance" amount={1000} change={400} changePercentage={5}/>
        </div>
      </div>
      <Breakdown />
    </Card>
  )
}
