import { StockCardWithModal } from "./StockCardWithModal";
import { Link, useLoaderData } from "react-router-dom";

export function CardBar() {
    const stocksAvaliable = useLoaderData();

    return (
        <>
            {stocksAvaliable?.map((item, index) => {
                return (
                    <div key={index} style={{display:"flex", justifyContent: "space-between"}}>
                        <Link to={"/buy/" + item?.id}>
                            <StockCardWithModal companyName={item?.companyName} companyDescription={item?.companyDescription} currentPrice={item?.currentPrice}/>
                        </Link>
                    </div>
                )
            })}
        </>
    )
}

export async function getAllStocks(){
    const response = await fetch("http://localhost:8080/buy");
    const responseData = await response.json();
    return responseData.storedNames;
}
