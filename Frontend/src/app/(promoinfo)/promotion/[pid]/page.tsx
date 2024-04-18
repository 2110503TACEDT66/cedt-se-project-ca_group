import getCar from "@/libs/getCar";
import getRestaurantPromo from "@/libs/getRestaurantPromo";

export default async function PromotionDetailPage( {params}:{params:{pid:string}}) {
    const promoDetail = await getRestaurantPromo(params.pid)
    const restaurantname = await getCar(promoDetail.data.restaurant)
    console.log(promoDetail.data.restaurant + "!!!!!!&&&&") 
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4 pt-20 bg-white ">
            <h1 className="text-5xl font-medium">{promoDetail.data.name}</h1>
            <div className="space-x-10  w-fit px-10 py-5 flex flex-row justify-center bg-orange-100 rounded-full">
                <div className="text-md mx-5">Restaurant :{restaurantname}</div>
                <div className="text-md mx-5">Detail :{ promoDetail.data.detail}</div>
                <div className="text-md mx-5">startdate :{ promoDetail.data.startdate}</div>
                <div className="text-md mx-5">enddate :{ promoDetail.data.enddate}</div>
            </div>
        </main>
    )
}