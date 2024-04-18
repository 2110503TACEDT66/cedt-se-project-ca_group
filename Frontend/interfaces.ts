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
    _id: string,
    id: string,
}
export interface RestaurantJson{
    success: boolean,
    count: number,
    pagination: Object,
    data: RestaurantItem[]
}
export interface PromotionItem {
    name: string,
    detail: string,
    restaurant: RestaurantItem,
    startDate: Date,
    endDate: Date,
    _id: string,
    id: string
}
export interface PromotionJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: PromotionItem[]
}

