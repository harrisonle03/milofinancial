import React from 'react'
import InfoCard from '../components/InfoCard'
import LineChart from '../components/LineChart'
import Breakdown from '../components/Breakdown'


export default function Dashboard() {

  return (
    <div className='grid grid-cols-3 gap-4 h-[calc(100vh-2rem)] w-full max-w-[96rem]'>
      <InfoCard title={'Expenses'} amount={90} change={-100} changePercentage={20} />
      <InfoCard title={'Income'} amount={100} change={23} changePercentage={20}/>
      <InfoCard title={'Balance'} amount={500} change={45} changePercentage={20}/>
      <div className="col-span-2">
        <LineChart/>
      </div>
      <Breakdown />
    </div>
  )
}
