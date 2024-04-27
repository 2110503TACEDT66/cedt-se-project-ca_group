import Link from "next/link";
import { PromotionItem, PromotionJson, MenuItem,MenuJson} from "../../interfaces";
import MenuCard from "./MenuCard";


export default async function MenuCatalog({MenuJson}:{MenuJson:MenuJson})  {
    const Menus = await MenuJson
    // console.log(promotions)
    return (
        <>
            <div style={{ margin: "20px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                {
                    Menus.data.map((menuItem: MenuItem)=>(
                        <Link href={`/`} className="my-2 mx-2">
                            <MenuCard name={menuItem.name} price={menuItem.price}/> 
                        </Link>
                    ))
                }
            </div>
        </>
    )
}