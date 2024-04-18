import Link from "next/link"
import ProductCard from "./ProductCard"
import { RestaurantJson, ReviewItem, ReviewJson } from "../../interfaces"
import { RestaurantItem } from "../../interfaces"
import ReviewCard from "./ReviewCard"

export default async function ReviewCatalog({reviewJson}:{reviewJson:ReviewJson}) {
    const reviewJsonReady = await reviewJson
    const calculateAverageRating = (reviews: ReviewItem[]) => {
        const totalRating = reviews.reduce((acc, current) => {
            const rating = parseFloat(current.rating);
            return acc + rating;
        }, 0);

        return reviews.length > 0 ? (totalRating / reviews.length).toFixed(2) : "No ratings";
    };

    const averageRating = calculateAverageRating(reviewJsonReady.data);
    return (
        <>
        <div className="text-right mr-3">{reviewJsonReady.count} reviews</div>
        
        <div style={{margin:"20px", display:"flex", flexDirection:"row" , flexWrap:"wrap", justifyContent:"space-around",alignContent:"space-around"}}>
                {
                    reviewJsonReady.data.map((reviewItem:ReviewItem)=>(             
                            <ReviewCard comment={reviewItem.comment} rating={reviewItem.rating}/>
                    
                    ))
                }
                
            </div>
        </>
    )
}