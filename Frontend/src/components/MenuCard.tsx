import { Rating } from '@mui/material';
export default function MenuCard( {name,price} : {name: string, price: number} ) { 
        
    return (
        <main>
            <div className='w-[750px] h-[65px] rounded-lg bg-slate-100 relative'>
                <div className="pt-5 px-5 py-5">
                    <span className='block font-bold text-lg'>{name}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center mr-5">
                        <span className='p-[5px] font-bold text-red-600 text-lg mr-5'>{price} $  </span>
                        <Rating name="half-rating-read mr-5" defaultValue={0} precision={0.5} sx={{color: 'red'}} readOnly />
                        <span className='p-[5px] font-bold text-red-600 text-lg mr-5'></span>
                        <button className="block rounded-md bg-lime-700 hover:bg-lime-950 px-3 py-2 text-white mr-5 ">
                            Details
                        </button>
                    </span>
                </div>                
            </div>

        </main>
       
    );
}

