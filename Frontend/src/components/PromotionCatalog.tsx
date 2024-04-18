import Link from "next/link";
import { PromotionItem, PromotionJson } from "../../interfaces";
import PromotionCard from "./PromotionCard";

export default async function PromotionCatalog({PromoJson}:{PromoJson:Promise<PromotionJson>})  {
    const promotions = await PromoJson
    // console.log(promotions)

    {
        // promotions.data.map((promoItem: PromotionItem)=>(
        // //   console.log(promoItem)
        // ))
    }
    return (
        <>
            <div className="text-center px-10 py-4">
                Explore promotion in our catalog
            </div>
           
            <div style={{margin:"20px", display:"flex", flexDirection:"row" , flexWrap:"wrap", justifyContent:"space-around",alignContent:"space-around"}}>
                {
                    promotions.data.map((promoItem: PromotionItem)=>(
                        <Link href={`/promotion/${promoItem._id}`} className="w-1/5">
                            <PromotionCard name={promoItem.name} detail={promoItem.detail} restaurantname={promoItem.restaurant.name} startdate={promoItem.startDate.toString()} enddate={promoItem.endDate.toString()}
                           /> 
                        </Link>
                    ))
                }
            </div>
        </>
    )
}