import { redirect } from "next/navigation"


export default async function Search() {
    const addSearch = async (addUserForm: FormData) => {
        "use server"
        const name = addUserForm.get("name")as string || "";
        redirect(`/searchresults/${name}`)
    }
    return (
        <main className="text-center p-5 ">
            <h1 className="text-5xl font-medium p-10">Search Your Restaurants</h1>
            <form className="w-[100%] flex flex-col items-center space-y-4 pt-13 bg-white" action={addSearch}>
                    <input type="text" required id="name" name="name" placeholder="Search Restaurants" 
                                className="bg-white border-2 border-gray-200 rounded w-full p-2 
                                text-gray-700 focus:outline-none focus:border-blue-400"/>
                    <button type="submit" className="block rounded-md bg-red-800 hover:bg-red-400 px-3 py-2 text-white">Search</button>
            </form>
                                       
        </main>
    )
}

//<h1 className="text-right p-10">Search Restaurants</h1>