import getCar from "@/libs/getCar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import getUserProfile from "@/libs/getUserProfile";
import reservation from "@/libs/reservation";
import { redirect } from "next/navigation";
import getReview from "@/libs/getReview";
import ReviewCatalog from "@/components/ReviewCatalog";
import postReview from "@/libs/postReview";

export default async function CarDetailPage({ params }: { params: { cid: string } }) {
    const carDetail = await getCar(params.cid);
    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) return null;

    const profile = await getUserProfile(session.user.token);
    const myReview = await getReview(params.cid,session.user.token)
    

    const addReservation = async (addUserForm: FormData) => {
        "use server";
        const date = addUserForm.get("date") as string || "";
        await reservation(date, profile.data._id, params.cid, session.user.token);
        redirect("/reservations");
    };

    const comment = async (addUserForm: FormData) => {
        "use server"
        const comment = addUserForm.get("comment")as string ||" ";
        const rating = addUserForm.get("rating")as string || " ";
        await postReview(session.user.token,params.cid,rating,comment);


        redirect(`/car/${params.cid}`)
    } 

    return (
        <main className="w-full flex flex-col items-center space-y-4 pt-20 bg-white">
            <h1 className="text-5xl font-medium">{carDetail.data.name}</h1>
            <div className="space-x-10 w-fit px-10 py-5 flex flex-row justify-center bg-orange-100 rounded-full">
                <div className="text-md mx-5">Address: {carDetail.data.address}</div>
                <div className="text-md mx-5">Tel: {carDetail.data.tel}</div>
                <div className="text-md mx-5">{carDetail.data.openningtime}</div>
            </div>
            <form className="w-full flex flex-col items-center space-y-4 pt-13 bg-white" action={addReservation}>
                <div className="text-xl p-2">Booker: {profile.data.name}</div>
                <div className="flex items-center w-1/2 my-2">
                    <label className="block text-gray-700 pr-4" htmlFor="date">Date:</label>
                    <input type="date" required id="date" name="date"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400" />
                </div>
                <button type="submit" className="rounded-md bg-red-800 hover:bg-red-400 px-3 py-2 text-white">Make Reservation</button>
            </form>
            <div className="w-full flex flex-col items-left space-y-4 pt-13 bg-white">
                <h1 className="ml-80 text-xl font-medium">Review</h1>
                <div><hr /></div>

                <form  className="w-[100%] flex flex-col items-center space-y-4 bg-white" action={comment}>
                    <div className="flex items-center w-1/2 my-2 p-5">
                    <input type="text" id="comment" name="comment" placeholder="Comment"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2
                    text-gray-700 focus:outline-none focus:border-blue-400"/>
                    <label className="w-auto block text-gray-700  m-4" htmlFor="Max">
                        Rating 
                    </label>
                    <select id="rating" name="rating" className="bg-white border-2 border-gray-200 rounded w-28 p-2 text-gray-700 focus:outline-none focus:border-blue-400">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <button type="submit" className="block rounded-md bg-red-800 hover:bg-red-400 px-3 py-2 text-white m-5">Comment</button>
                    </div>
               
                
            </form>
            <div><hr /></div>

                <ReviewCatalog reviewJson={myReview}/>
            </div>
            
           
        </main>
    );
}
