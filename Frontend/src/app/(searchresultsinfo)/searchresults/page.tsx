import getCars from "@/libs/getCars"
import CarCatalog from "@/components/CarCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import { RestaurantJson } from "../../../../interfaces"
import { Link } from '@mui/material';


export default async function Searchpageinfo() {

    const cars:RestaurantJson = await getCars()

    return (
        <main className="text-center p-5 ">
            <h1 className="text-5xl font-medium p-10">Select Your Restaurants</h1>
            <Link href="/search" >
                <div>
                    <input type="text" required id="tel" name="tel" placeholder="Search Restaurants" 
                                className="bg-white border-2 border-gray-200 rounded w-full p-2 
                                text-gray-700 focus:outline-none focus:border-blue-400"/>

                </div>
                        
            </Link>
            
            <Suspense fallback={<p>Loading... <LinearProgress/></p>}>
            <CarCatalog carJson={cars}/>
            </Suspense>
        </main>
    )
}

//<h1 className="text-right p-10">Search Restaurants</h1>