import React from 'react'
import InfoCard from '../components/InfoCard'
import LineChart from '../components/LineChart'
import Breakdown from '../components/Breakdown'
import { useAppContext } from '../AppProvider'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react"

export default function Dashboard() {
  const { expenses, income, balance } = useAppContext();

  return (
    <Card className='h-[calc(100vh-2rem)] w-full max-w-[96rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-white'>
      <div className="flex flex-col gap-4 items-center justify-center">
        <LineChart />
        <div className="flex justify-between">
          <InfoCard title="Total Expenses" amount={expenses} change={20} changePercentage={10}/>
          <InfoCard title="Total Earnings" amount={income} change={20} changePercentage={30}/>
          <InfoCard title="Total Balance" amount={balance} change={400} changePercentage={5}/>
        </div>
      </div>
      <Breakdown />
    </Card>
  )
}
