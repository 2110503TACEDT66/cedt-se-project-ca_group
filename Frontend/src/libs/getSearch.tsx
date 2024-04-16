export default async function getSearch(id:string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/restaurants/:search?restaurantName=${id}`)
    if(!response.ok){
        throw new Error(`Failed to fetch search ${id}`)
    }
    return await response.json()
}