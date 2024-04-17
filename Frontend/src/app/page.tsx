
import Banner from '@/components/Banner'
import { TravelCard } from "@/components/TravelCard";
import CarCatalog from '@/components/CarCatalog';
import getCars from "@/libs/getCars"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import { RestaurantJson } from '../../interfaces';
import getRestaurantLimit from '@/libs/getRestaurantLimit';

export default async function Home() {
  const cars:RestaurantJson = await getRestaurantLimit()
  return (
    <main>
      <Banner/>
      <div className='p-10'>
            <Suspense fallback={<p>Loading... <LinearProgress/></p>}>
              <h1 className='w-full h-[9%] p-[5px] font-bold px-20 text-xl'>Recommended Restaurants</h1>
              <CarCatalog carJson={cars}/>
            </Suspense>
      </div>
      
    </main>
  );
}
