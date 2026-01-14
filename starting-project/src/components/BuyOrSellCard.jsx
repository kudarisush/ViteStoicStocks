import classes from './BuyOrSellCard.module.css';
import { useState, useEffect } from "react";
import {Form, redirect, useNavigate} from "react-router-dom";

export function BuyOrSellCard({ companyName, companyDescription, currentPrice}) {
    const [buyPrice, setBuyPrice] = useState(0);
    const [buyAmount, setBuyAmount] = useState(0);

    const [sellPrice, setSellPrice] = useState(0);
    const [sellAmount, setSellAmount] = useState(0);


    useEffect(() => {setBuyPrice(buyAmount * currentPrice)}, [buyAmount, currentPrice]);
    useEffect(() => {setSellPrice(sellAmount * currentPrice)},[sellAmount, currentPrice]);

    const navigate = useNavigate();
    function handleClose() {
        navigate('/');
    }

    return (
        <div className={classes.card}>
            <h1>{companyName}</h1>
            <h2>{companyDescription}</h2>
            <h2>${currentPrice}</h2>

            <Form method="post">
                <input id="companyName" type="hidden" name="companyName" value={companyName}/>
                <input id="currentPrice" type="hidden" name={"price"} value={currentPrice}/>

                <label htmlFor={"buy"}>BUY </label>
                <input id={"buy"} name={"buy"} disabled={sellAmount > 0} onChange={(event) => {setBuyAmount(event.target.value)}}/>
                { buyPrice > 0  && <p>Total Buy: ${buyPrice}</p> }

                <label htmlFor={"sell"}>SELL</label>
                <input id={"sell"} name={"sell"} disabled={buyAmount > 0} onChange={(event) => setSellAmount(event.target.value)}/>
                { sellPrice > 0  && <p>Total Sell: ${sellPrice}</p> }

                <button onClick={handleClose}>SUBMIT TRANSACTION</button>
                <button type={"button"} onClick={handleClose}>CANCEL TRANSACTION</button>
            </Form>
        </div>

    )
}

export async function action({request}){
    const data = await request.formData();
    const postData = Object.fromEntries(data);
    const response = await fetch('http://localhost:8080/transactions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    })

    if (response.status !== 200) {
        console.log(response)
    }
}