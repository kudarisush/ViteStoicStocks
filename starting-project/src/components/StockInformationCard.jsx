import classes from "./BuyOrSellCard.module.css";

export function StockInformationCard({ companyName, companyDescription, currentPrice}) {
    return (
        <>
            <div className={classes.card}>
                <h1>{companyName}</h1>
                <h2>{companyDescription}</h2>
                <h2>${currentPrice}</h2>
            </div>
        </>
    )
}