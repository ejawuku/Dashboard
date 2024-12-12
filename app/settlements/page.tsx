import React from "react";
import Sidenav from "../(components)/sidenav";
import Table from "../(components)/table";
import Transactiontable from "../(components)/transactiontable";
import IconButton from "../(components)/icon-button";
import Header from "../(components)/header";
import Quickaccesscard from "../(components)/quick-access-card";
import Gradientbutton from "../(components)/gradientbutton";
import Transferstable from "../(components)/transferstable";
import Settlementstable from "../(components)/settlementstable";
import Transfertoggle from "../(components)/transfer-toggle";

const Settlements = () => {
  return (
    <div>
      <div className="flex flex-row h-full md:h-screen w-screen overflow-hidden">
        <div className="hidden lg:block">
          <Sidenav />
        </div>
        <div className="w-full h-full bg-white flex flex-col">
          <Header title={"Settlements"} issubpage={true} />
          <div className="h-full overflow-y-auto">
            <div className="px-8 md:px-5 flex flex-col md:flex-row gap-4 w-full items-start md:items-center justify-between pb-3 pt-5">
              <div className="text-headercolor hidden md:block text-sm font-[600]">
                Settlement Account
              </div>
              <Transfertoggle isChecked={false} />
            </div>
            <div className="pb-8 pt-3 px-8 md:px-10 flex flex-col md:flex-row gap-4 w-full">
              <Quickaccesscard
                caption={"Next Settlement Amount"}
                balance={"0.00"}
                subtext="Will be on"
              />
              <Quickaccesscard
                caption={"Total Transaction  Value"}
                balance={"0.00"}
                subtext="As of"
              />
              <Quickaccesscard
                caption={"Float Balance"}
                balance={"0.00"}
                subtext="Will be on"
                textcolor="text-successtextcolor"
              />
              <Quickaccesscard
                caption={"Settlement Account"}
                balance={"0.00"}
                subtext="Will be on"
                actiontext="Change Account Settings"
                subtitlecolor="text-successtextcolor"
              />
            </div>
            <hr className="border-dividercolor hidden md:block" />
            {/* <Table /> */}
            <div className="px-10 pt-3 text-sm font-[600] text-headercolor hidden md:block">
              Transfer History
            </div>
            <div className="mx-5 my-3 h-fit rounded-xl overflow-hidden shadow-sm border hidden md:block">
              <div className="w-full relative">
                <div className="w-full absolute bg-[#F4F7FCBF] text-white  z-10 backdrop-blur-sm top-0">
                  <div className="flex flex-col ">
                    <div className="flex flex-row justify-between mx-4 mb-6 mt-4">
                      <div className="flex flex-row justify-between items-center gap-3">
                        <IconButton
                          image="icons/filter.svg"
                          backgroundColor="bg-white"
                          iconSize={16}
                          outlined={true}
                        />
                        <div className="flex items-center border border-searchboxcolor shadow-sm rounded-lg px-2 py-2 w-full">
                          <img
                            src="icons/search.svg"
                            alt="search"
                            width={16}
                            height={16}
                          />
                          <input
                            type="text"
                            placeholder="Search..."
                            className="ml-2 text-sm font-[400] text-searchtextcolor focus:outline-none bg-transparent"
                          />
                        </div>

                        <IconButton
                          image="icons/refresh.svg"
                          backgroundColor="bg-white"
                          iconSize={20}
                          outlined={true}
                        />
                      </div>

                      <div className="flex flex-row justify-between gap-3">
                        <IconButton
                          image="icons/addicon.svg"
                          text="Export"
                          backgroundColor="bg-[#4CAF50]"
                          textColor="text-white"
                          iconSize={16}
                        />
                      </div>
                    </div>

                    <div className="flex w-full text-xs font-[700] pb-3 text-transactiontextcolor">
                      <div className="flex w-full grow items-start">
                        <input
                          type="checkbox"
                          checked={false}
                          readOnly
                          className="mx-4 mt-1"
                        />
                        <div className="w-2/5 truncate text-captextcolor text-sm font-[500]">
                          #
                        </div>
                        <div className=" w-full truncate items-center">
                          AMOUNT
                        </div>
                        <div className="w-full truncate">DESCRIPTION</div>
                        <div className="w-full truncate">RECIPIENTS</div>
                        <div className="w-full truncate">TIME</div>
                        <div className=" w-full truncate items-center">
                          PAYMENT STATUS
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex absolute bottom-0 bg-[#F4F7FCBF] w-full  z-10 backdrop-blur-sm  flex-row text-headercolor text-xs px-5 py-3">
                  <div>1-10</div>
                  <div>of 97</div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="text-headercolor text-xs">
                      Rows per page:
                    </div>
                    <select className="border border-searchboxcolor rounded-lg bg-transparent shadow-none text-xs text-headercolor focus:outline-none">
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                  </div>
                </div>
                <Settlementstable
                  data={[
                    {
                      description: "1234567890",
                      recipients: "CUS001",
                      source: "Web",
                      time: "2023-10-26",
                      amount: 1000.98,
                      product: "Product A",
                      account: "ACC001",
                      currency: "USD",
                      transactionType: "Deposit",
                      paymentStatus: "Success",
                    },
                  ]}
                  title={""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settlements;
