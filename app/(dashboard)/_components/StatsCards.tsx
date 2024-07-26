import React, { useEffect, useState } from 'react'
import type { GetStatsResponse } from "../../api/dashboard/route";

   const [stats,setStats] = useState<null|GetStatsResponse>(null)
  
    const fetchStatsAsync = () => async () => {
      const statsRes = await fetch('/api/dashboard');
    };

export async function CardStatsWrapper(){
    const statsResponse = await fetch('/api/dashboard');
    setStats(await statsResponse.json())
    return <StatsCards loading={false} data={stats}></StatsCards>
}

interface StatsCardsProps {
    data: GetStatsResponse|null
    loading: boolean
}

const StatsCards = (props: StatsCardsProps) => {
    const {data, loading} = props;

  return (
    <div className='w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {/* <StatsCard></StatsCard> */}

    </div>
  )
}

export default StatsCards