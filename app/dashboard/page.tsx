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
      <div className="hidden lg:block">
        <Sidenav />
      </div>

      <div className="w-full h-full bg-white flex flex-col">
        <Header title={"My Dashboard"} />
        <div className="">
          <Setupbanner />
        </div>
        <div className="px-7 md:px-0 h-full overflow-y-auto">
          <div className="md:flex hidden md:flex-row w-full justify-between items-center pl-8 pr-10 pt-4">
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
          <div className="flex flex-row justify-between">
            <div className="md:hidden font-[600] text-sm text-[#828282] pt-3">
              Transaction Statuses
            </div>
            <div className="md:hidden font-[600] text-sm text-[#828282] pt-3">
              {"Date"}
            </div>
          </div>

          <div className="pt-3 flex flex-col md:flex-row gap-4 w-full md:pl-8 md:pr-20 pb-6 md:pb-8">
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

          <hr className="border-dividercolor h-[0.5px]" />
          <div className="flex flex-col md:flex-row w-full pt-2 md:pt-0">
            <div className="w-full md:w-3/5">
              <div className="hidden w-full justify-between items-center px-8 py-3 md:flex">
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
              <div className="md:hidden pb-5 md:pb-8 mt-4 flex flex-row gap-4 w-full md:px-8">
                <Transactionstatuscard
                  caption={"Successful"}
                  count={"0"}
                  backgroundColor="bg-successcolor"
                  borderColor="border-successbordercolor"
                />
                <Transactionstatuscard
                  caption={"Pending"}
                  count={"0"}
                  backgroundColor="bg-pendingcolor"
                  borderColor="border-pendingbordercolor"
                />
                <Transactionstatuscard
                  caption={"Failed"}
                  count={"0"}
                  backgroundColor="bg-failedcolor"
                  borderColor="border-failedbordercolor"
                />
              </div>
              <div className="hidden md:flex md:flex-row gap-4 w-full md:px-8">
                <Transactionstatuscard
                  caption={"Successful Transactions"}
                  count={"0"}
                  backgroundColor="bg-successcolor"
                  borderColor="border-successbordercolor"
                />
                <Transactionstatuscard
                  caption={"Pending Transactions"}
                  count={"0"}
                  backgroundColor="bg-pendingcolor"
                  borderColor="border-pendingbordercolor"
                />
                <Transactionstatuscard
                  caption={"Failed Transactions"}
                  count={"0"}
                  backgroundColor="bg-failedcolor"
                  borderColor="border-failedbordercolor"
                />
              </div>
              <div className="md:px-8 md:pt-4">
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
              <div className="pt-5 md:pt-8 md:px-8">
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

            <div className="w-[0.5px] bg-dividercolor flex-grow hidden md:block mt-4 md:mt-0" />
            <div className="w-full md:w-2/5 mt-4 md:mt-3">
              <div className="flex w-full justify-between items-center md:pl-5">
                <div className="text-sm font-[600] text-[#828282]">Charts</div>
              </div>
              <img
                src="/chart.png"
                alt="Chart"
                className="w-full md:pl-5 md:pr-8 h-fit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
