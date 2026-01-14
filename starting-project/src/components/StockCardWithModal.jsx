import { StockInformationCard } from "./StockInformationCard";
import { useState } from "react";
import { Outlet } from 'react-router-dom'
import { BuyOrSellModal } from "../routes/BuyOrSellModal";
import { Modal } from "./Modal";

export function StockCardWithModal({ companyName, companyDescription, currentPrice }) {
    return (
        <>
            <StockInformationCard companyName={companyName} companyDescription={companyDescription} currentPrice={currentPrice} />
            <Outlet/>
        </>
    )

};