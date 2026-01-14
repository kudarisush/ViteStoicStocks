import {useLoaderData} from "react-router-dom";

export function TransactionsTable() {
    const transactions = useLoaderData();

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Amount</th>
                        <th>Trade Type</th>
                        <th>Price Bought</th>
                    </tr>
                </thead>
                <tbody>
                {transactions?.map((transaction) => {
                    return (
                        <tr key={transaction.id}>
                            <td>{transaction.companyName}</td>
                            <td>{transaction?.buy ? transaction?.buy : transaction?.sell}</td>
                            <td>{transaction?.buy ? "BUY" : "SELL"}</td>
                            <td>${transaction.price}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}

export async function getTransactions() {
    const response = await fetch("http://localhost:8080/transactions");
    const responseData = await response.json();

    return responseData.transactions;
}