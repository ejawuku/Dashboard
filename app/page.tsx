
import Sidenav from "./(components)/sidenav";
import RegisterForm from "./(components)/register-form";
import AuthHeader from "./(components)/auth-header";
import Quickaccesscard from "./(components)/quick-access-card";
import Transactionstatuscard from "./(components)/transaction-status-card";
import Summaryitem from "./(components)/summary-item";
import Table from "./(components)/table";
import Setupbanner from "./(components)/setup-banner";

export default function Home() {
  return <div>
<<<<<<< HEAD
    <div className="flex flex-row w-full h-screen">
      <Sidenav />
      <div className="w-full h-screen bg-white">
        <Setupbanner />
        <div className="p-4 flex flex-row gap-4 w-full">
          <Quickaccesscard caption={"Total Transaction  Value"} balance={"0.00"} />
          <Quickaccesscard caption={"Float Balance"} balance={"0.00"} backgroundColor="bg-successcolor" />
          <Quickaccesscard caption={"Next Settlement Amount"} balance={"0.00"} />
        </div>
      </div>
    </div>
=======
    <Setupbanner/>
>>>>>>> parent of 55020af (sidenav changes)
  </div>;
}
