import {CardBar} from "../components/CardBar.jsx";
import { PortfolioTable } from "../components/PortfolioTable";
import {TransactionsTable} from "./TransactionsTable";
import { Outlet } from "react-router-dom";

function Homepage() {
  // const [ balance, setBalance ] = useContext(BalanceContext);
  return (
      <>
          {/*<BalanceContext value={balance}>*/}
          {/*  <PortfolioTable/>*/}
            <CardBar />
            <TransactionsTable/>
            <Outlet/>
          {/*</BalanceContext>*/}
      </>

  );
}

export default Homepage;
