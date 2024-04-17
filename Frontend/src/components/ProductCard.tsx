import InteractiveCard from './InteractiveCard';
import Image from 'next/image'

export default function productcard( {carName,imgSrc,tel,openningtime,priceRange,onCompare} : 
    {carName : string, imgSrc: string, tel: string, openningtime: string,priceRange: number, onCompare?:Function} ) { 
    const renderPrice = (price:number)=>{
        return '$'.repeat(price);
    }
    return (
        <InteractiveCard contentName={carName}>          
            <div className='w-full h-[70%] relative rounded-t-lg '>
                <Image src={imgSrc}
                alt='Product Picture'
                fill={true}
                className='object-cover rounded-t-lg '
                />
            </div>
            <div>
                <div className='w-full h-[9%] p-[5px] font-bold px-5'>{carName}</div>
                <div className='w-full h-[6%] p-[3px] px-5'>{tel}</div>
                <div className='w-full h-[6%] p-[0px] px-5'>{openningtime}</div>
                <div className='w-full h-[6%] p-[0px] px-5 text-green-700 font-bold'>{renderPrice(priceRange)}</div>
            </div>
         
        </InteractiveCard>
       
    );
}