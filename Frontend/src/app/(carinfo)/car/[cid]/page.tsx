import getCar from "@/libs/getCar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import getUserProfile from "@/libs/getUserProfile";
import reservation from "@/libs/reservation";
import { redirect } from "next/navigation";
import ReviewCard from "@/components/reviewcard";

export default async function CarDetailPage({ params }: { params: { cid: string } }) {
    const carDetail = await getCar(params.cid);
    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) return null;

    const profile = await getUserProfile(session.user.token);
    const reviews = [
        { reviewer: "John Doe", comment: "Great experience!", rating: 5 },
        { reviewer: "Jane Smith", comment: "Very comfortable.", rating: 4 },
        { reviewer: "Emily White", comment: "The car was clean and well-maintained.", rating: 4 },
        { reviewer: "Mark Brown", comment: "Decent service but the booking was a bit delayed.", rating: 3 }
    ];
    

    const addReservation = async (addUserForm: FormData) => {
        "use server";
        const date = addUserForm.get("date") as string || "";
        await reservation(date, profile.data._id, params.cid, session.user.token);
        redirect("/reservations");
    };

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
            <div className="flex flex-row space-x-4 overflow-x-auto justify-center w-full px-5">
                {reviews.map((review, index) => (
                    <ReviewCard
                        key={index}
                        carName={carDetail.data.name}
                        reviewer={review.reviewer}
                        comment={review.comment}
                        rating={review.rating}
                    />
                ))}
            </div>
        </main>
    );
}
