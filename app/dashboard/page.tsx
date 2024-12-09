import React from "react";
import Table from "../(components)/table";
import Transactionstatuscard from "../(components)/transaction-status-card";
import Quickaccesscard from "../(components)/quick-access-card";
import Setupbanner from "../(components)/setup-banner";
import Sidenav from "../(components)/sidenav";
import IconButton from "../(components)/icon-button";
import Header from "../(components)/header";

const Dashboard = () => {
  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      <div className="hidden md:block">
        <Sidenav />
      </div>

      <div className="w-full h-full bg-white flex flex-col">
        <div className="hidden md:block">
          <Header title={"My Dashboard"} />
        </div>
        <div className="hidden md:block">
          <Setupbanner />
        </div>
        <div className="px-7 md:px-0 h-full overflow-y-auto">
          <div className="flex hidden md:block w-full justify-between items-center pl-8 pr-10 pt-4">
            <div className="text-sm font-[600] text-[#828282]">
              Quick Access
            </div>
            <IconButton
              image="icons/download.svg"
              text="Download account summary"
              backgroundColor="bg-[#CECECE4A]"
              textColor="text-[#201F21]"
            />
          </div>
          <div className="md:hidden font-[600] text-sm text-[#828282] pt-3">
            Transaction Statuses
          </div>
          <div className="pt-3 flex flex-col md:flex-row gap-4 w-full pl-8 pr-20 pb-8">
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
              textcolor="text-successtextcolor"
            />
            <Quickaccesscard
              caption={"Next Settlement Amount"}
              balance={"0.00"}
              subtext="Will be on"
            />
          </div>

          <hr className="border-dividercolor" />
          <div className="flex flex-column md:flex-row w-full">
            <div className="w-full">
              <div className="flex w-full justify-between items-center px-8 pt-3">
                <div className="text-sm font-[600] text-[#828282]">
                  Transaction Statuses
                </div>
                <select className="rounded-lg p-3 bg-[#CECECE4A] shadow-none text-xs text-headercolor focus:outline-none">
                  <option value="today">Today</option>
                  <option value="yesterday">Yesterday</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                </select>
              </div>
              <div className="pb-8 pt-4 flex flex-row gap-4 w-full px-8">
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
              <div className=" px-8">
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
              <div className="pt-5 md:pt-8 px-8">
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

            <div className="w-[0.5px] bg-dividercolor flex-grow hidden md:block" />

            <div className="w-2/5">
              <div className="flex w-full justify-between items-center pl-5">
                <div className="text-sm font-[600] text-[#828282]">Charts</div>
                <IconButton
                  image="icons/settings.svg"
                  backgroundColor="#CECECE4A"
                  textColor="#201F21"
                />
              </div>
              <img
                src="/chart.png"
                alt="Chart"
                className="w-full pl-5 pr-8 h-fit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
