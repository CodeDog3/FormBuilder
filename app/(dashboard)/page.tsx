'use client'

import { currentUser} from "@clerk/nextjs/server";
import { useEffect, useMemo, useState } from "react";

export default function Home() {

  const [stats, setStats] = useState(null);
  const [error, setError] = useState<null|string>(null);


const fetchStats = useMemo(() => async () => {
    try {
      const res = await fetch('/api/dashboard');
      console.log(res);
      if (!res.ok) throw new Error('bad request');

      const data = await res.json();
      console.log(data);
      setStats(data);
    }
    catch (error: unknown) {
      if(error instanceof Error){
        setError(error.message)
        console.log(error)
      }
      else{
        setError("an unknown error occured")
      }
    }
  }, []);



  useEffect (() =>{
    fetchStats();
   },[])


console.log(stats);
console.log(error);


  return (
    <div className="container pt-4">
      hello world
    </div>
  );
}