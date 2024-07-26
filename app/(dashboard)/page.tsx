'use client'

import { currentUser} from "@clerk/nextjs/server";
import { useEffect, useMemo, useState } from "react";
import type { GetStatsResponse } from "../api/dashboard/route";

export default function Home() {

  const [stats, setStats] = useState<null|GetStatsResponse>(null);


  useEffect (() =>{
    const fetchStatsAsync = () => async () => {
      const res = await fetch('/api/dashboard');
      setStats(await res.json())
    };

  fetchStatsAsync();
   },[])



  return (
    <div className="container pt-4">
      hello world
    </div>
  );
}