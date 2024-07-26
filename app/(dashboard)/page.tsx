'use client'

import { currentUser} from "@clerk/nextjs/server";
import { useEffect, useMemo, useState } from "react";


export default function Home() {

  const [stats, setStats] = useState<null|GetStatsResponse>(null);



  return (
    <div className="container pt-4">
      hello world
    </div>
  );
}