export interface ReservationItem {
    rsvDate: string,
    _id: string,
    restaurant: RestaurantItem,
    createdAt: string,
    id: string
   
}
export interface ReservationJson{
    success: boolean,
    count: number,
    pagination: Object,
    data: ReservationItem[]
}
export interface RestaurantItem{
    name: string,
    tel: string,
    openningtime: string,
    restaurant: string,
    website: string,
    priceRange: number,
    _id: string,
    id: string,
}
export interface RestaurantJson{
    success: boolean,
    count: number,
    pagination: Object,
    data: RestaurantItem[]
}
export interface ReviewItem{
    comment: string,
    rating: string,
    _id: string,
    id: string,
}
export interface ReviewJson{
    success: boolean,
    count: number,
    pagination: Object,
    data: ReviewItem[]
}
