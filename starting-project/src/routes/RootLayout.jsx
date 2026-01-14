import { Outlet } from 'react-router-dom';
import { MyWallet } from "../components/MyWallet";

export function RootLayout() {
    return (
        <>
            <div className="header"><h2><MyWallet/></h2></div>
            <Outlet />
        </>
    )
}