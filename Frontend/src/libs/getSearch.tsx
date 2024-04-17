export default async function getSearch(id:string, min:number, max:number) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/restaurants/:search?restaurantName=${id}&minPrice=${min}&maxPrice=${max}`)
    if(!response.ok){
        throw new Error(`Failed to fetch search ${id}`)
    }
    return await response.json()
}