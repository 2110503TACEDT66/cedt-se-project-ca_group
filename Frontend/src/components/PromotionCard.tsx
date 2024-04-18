import InteractiveCard from "./InteractiveCard";

export default function PromotionCard ({name,detail,restaurantname,startdate,enddate,onCompare}: 
    {name:string , detail:string, restaurantname: string, startdate:string, enddate:string, onCompare?:Function}
) {

    return (
       <InteractiveCard contentName={name}>
             <div>
                <div className='w-full h-[9%] p-[5px] font-bold px-5'>{name}</div>
                <div className='w-full h-[6%] p-[3px] px-5'>{restaurantname}</div>
                <div className='w-full h-[6%] p-[0px] px-5'>{detail}</div>
               <div className='w-full h-[6%] p-[0px] px-5'>{startdate}</div>
                <div className='w-full h-[6%] p-[0px] px-5'>{enddate}</div>
            </div>
       </InteractiveCard>
    )
}