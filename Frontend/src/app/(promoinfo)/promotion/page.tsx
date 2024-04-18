import getRestaurantsPromo from "@/libs/getRestaurantPromos"
import { PromotionJson } from "../../../../interfaces"
import Link from "next/link"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import PromotionCatalog from "@/components/PromotionCatalog"

export default function Promotion() {
    const promos = getRestaurantsPromo()
    return (
        <main className="text-center p-5 ">
        <h1 className="text-5xl font-medium p-10">All Promotion for restaurants</h1>
        <Suspense fallback={<p>Loading... <LinearProgress/></p>}>
        <PromotionCatalog PromoJson={promos}/>
        </Suspense>
    </main>
    )
}