import React from "react";
import Table from "../(components)/table";
import Transactionstatuscard from "../(components)/transaction-status-card";
import Quickaccesscard from "../(components)/quick-access-card";
import Setupbanner from "../(components)/setup-banner";
import Sidenav from "../(components)/sidenav";
import IconButton from "../(components)/icon-button";

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-row w-full h-full md:screen">
        {/* <Sidenav /> */}
        <div className="w-full h-full bg-white ">
          <div className="px-7 md:px-0">
            <div className="hidden md:block">
              <Setupbanner />
            </div>
            <div className="flex w-full justify-between items-center">
              <div className="text-sm font-[600] text-[#828282]">
                Quick Access
              </div>
              <IconButton
                image="icons/download.svg"
                text="Download account summary"
                backgroundColor="#CECECE4A"
                textColor="#201F21"
              />
            </div>
            <div className="md:hidden font-[600] text-sm text-[#828282] pt-3">
              {" "}
              Transaction Overview
            </div>
            <div className="pt-3 flex flex-col md:flex-row gap-4 w-full">
              <Quickaccesscard
                caption={"Total Transaction  Value"}
                balance={"0.00"}
                subtext="Will be on"
              />
              <Quickaccesscard
                caption={"Float Balance"}
                balance={"0.00"}
                backgroundColor="bg-successcolor"
                subtext="As of"
              />
              <Quickaccesscard
                caption={"Next Settlement Amount"}
                balance={"0.00"}
                subtext="Will be on"
              />
            </div>
            <div className="py-4 flex flex-row gap-4 w-full">
              <Transactionstatuscard
                caption={"Successful Transactions"}
                count={"0"}
                backgroundColor="bg-successcolor"
                borderColor="border-successbordercolor"
              />
              <div className="hidden md:block w-full">
                <Transactionstatuscard
                  caption={"Pending Transactions"}
                  count={"0"}
                  backgroundColor="bg-pendingcolor"
                  borderColor="border-pendingbordercolor"
                />
              </div>
              <Transactionstatuscard
                caption={"Failed Transactions"}
                count={"0"}
                backgroundColor="bg-failedcolor"
                borderColor="border-failedbordercolor"
              />
            </div>
            <hr className="border-dividercolor" />
            <div className="pt-5 md:pt-8">
              <Table
                data={[
                  {
                    name: "Switch",
                    count: "Volume",
                    value: "Amount (GHS)",
                    header: true,
                  },
                  {
                    image: "icons/momo.svg",
                    name: "Airtel",
                    count: "15",
                    value: "15,000",
                  },
                  {
                    image: "icons/at.svg",
                    name: "Glo",
                    count: "10",
                    value: "10,000",
                  },
                  {
                    image: "icons/visa.svg",
                    name: "9mobile",
                    count: "5",
                    value: "5,000",
                  },
                  {
                    image: "icons/mastercard.svg",
                    name: "Other",
                    count: "2",
                    value: "2,000",
                  },
                ]}
                title={"Today's Summary"}
                date="Friday, 12 January 2024"
              />
            </div>
            <div className="pt-5 md:pt-8">
              <Table
                data={[
                  {
                    image: "icons/momo.svg",
                    name: "Airtel",
                    count: "15",
                    value: "15,000",
                  },
                  {
                    image: "icons/at.svg",
                    name: "Glo",
                    count: "10",
                    value: "10,000",
                  },
                  {
                    image: "icons/visa.svg",
                    name: "9mobile",
                    count: "5",
                    value: "5,000",
                  },
                  {
                    image: "icons/mastercard.svg",
                    name: "Other",
                    count: "2",
                    value: "2,000",
                  },
                ]}
                title={"Other Currencies"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
