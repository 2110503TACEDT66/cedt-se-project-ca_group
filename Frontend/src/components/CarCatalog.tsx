import Link from "next/link"
import ProductCard from "./ProductCard"
import { RestaurantJson } from "../../interfaces"
import { RestaurantItem } from "../../interfaces"
import getCar from "@/libs/getCar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import getUserProfile from "@/libs/getUserProfile";
import reservation from "@/libs/reservation";
import { redirect } from "next/navigation";
import getReview from "@/libs/getReview";
import ReviewCatalog from "@/components/ReviewCatalog";
import postReview from "@/libs/postReview";

export default async function CarCatalog({carJson}:{carJson:RestaurantJson}) {
    const carJsonReady = await carJson
    
    return (
        <>
        
        
        <div style={{margin:"20px", display:"flex", flexDirection:"row" , flexWrap:"wrap", justifyContent:"space-around",alignContent:"space-around"}}>
                {
                    carJsonReady.data.map((carItem:RestaurantItem)=>(
                        <Link href={`/car/${carItem.id}`} className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] p-2 sm:p-4 md:p-4 lg:p-8">
                            <ProductCard carName={carItem.name} imgSrc={"/img/reslogo.png"}  tel={carItem.tel} openningtime={carItem.openningtime} priceRange={carItem.priceRange} id={carItem._id}/>
                        </Link>
                       
                    ))
                }
                
            </div>
        </>
    )
}