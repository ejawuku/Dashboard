import Sidenav from "./(components)/sidenav";
import RegisterForm from "./(components)/register-form";
import AuthHeader from "./(components)/auth-header";
import Quickaccesscard from "./(components)/quick-access-card";
import Transactionstatuscard from "./(components)/transaction-status-card";
import Summaryitem from "./(components)/summary-item";
import Table from "./(components)/table";
import Setupbanner from "./(components)/setup-banner";
import Dashboard from "./dashboard/page";
import Transactions from "./transactions/page";
import Transfers from "./transfers/page";
import Settlements from "./settlements/page";
import Disputes from "./disputes/page";

export default function Home() {
  return (
    <div>
      <Disputes />
    </div>
  );
}
