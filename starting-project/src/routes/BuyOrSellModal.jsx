import {Modal} from "../components/Modal";
import {BuyOrSellCard} from "../components/BuyOrSellCard";
import {Outlet, useLoaderData} from "react-router-dom";

export function BuyOrSellModal() {
    const stock = useLoaderData();
    return (
        <>
            <Modal>
                <BuyOrSellCard
                    companyName={stock?.companyName}
                    companyDescription={stock?.companyDescription}
                    currentPrice={stock?.currentPrice}
                />
            </Modal>
            <Outlet/>
        </>
    )
}
export async function getStock({params}){
    const response = await fetch("http://localhost:8080/buy/" + params.id);
    const responseData = await response.json();
    return responseData.stock;
}
