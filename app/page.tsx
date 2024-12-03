
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
    <div className="flex flex-row w-full h-screen">
      <Sidenav />
      <div className="w-full h-screen bg-white">
        <div>
          <Setupbanner />
          <div className="p-4 flex flex-row gap-4 w-full">
            <Quickaccesscard caption={"Total Transaction  Value"} balance={"0.00"} subtext="Will be on" />
            <Quickaccesscard caption={"Float Balance"} balance={"0.00"} backgroundColor="bg-successcolor" subtext="As of" />
            <Quickaccesscard caption={"Next Settlement Amount"} balance={"0.00"} subtext="Will be on" />
          </div>
          <div className="p-4 flex flex-row gap-4 w-full">
            <Transactionstatuscard caption={"Successful Transactions"} count={"0"} backgroundColor="bg-successcolor" borderColor="border-successbordercolor" />
            <Transactionstatuscard caption={"Pending Transactions"} count={"0"} backgroundColor="bg-pendingcolor" borderColor="border-pendingbordercolor" />
            <Transactionstatuscard caption={"Failed Transactions"} count={"0"} backgroundColor="bg-failedcolor" borderColor="border-failedbordercolor" />
          </div>
          <hr className="border-dividercolor" />
          <div className="p-4">
            <Table
              data={[
                { name: "Switch", count: "Volume", value: "Amount (GHS)", header: true },
                { image: "icons/momo.svg", name: "Airtel", count: "15", value: "15,000" },
                { image: "icons/at.svg", name: "Glo", count: "10", value: "10,000" },
                { image: "icons/visa.svg", name: "9mobile", count: "5", value: "5,000" },
                { image: "icons/mastercard.svg", name: "Other", count: "2", value: "2,000" },
              ]}
              title={"Today's Summary"}
              date="Friday, 12 January 2024"
            />
          </div>
          <div className="p-4">
            <Table
              data={[
                { image: "icons/momo.svg", name: "Airtel", count: "15", value: "15,000" },
                { image: "icons/at.svg", name: "Glo", count: "10", value: "10,000" },
                { image: "icons/visa.svg", name: "9mobile", count: "5", value: "5,000" },
                { image: "icons/mastercard.svg", name: "Other", count: "2", value: "2,000" },
              ]}
              title={"Other Currencies"}
            />
          </div>
        </div>
      </div>
    </div>
  </div>;
}
