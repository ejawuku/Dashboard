import React from 'react'
import Sidenav from '../(components)/sidenav'
import Table from '../(components)/table'
import Transactiontable from '../(components)/transactiontable'

const Transactions = () => {
    return (
        <div>
            <div className="flex flex-row w-full h-screen">
                <Sidenav />
                <div className="w-full h-screen bg-white">
                    <div className='flex flex-col border rounded-lg shadow-sm mx-5 '>
                        <div className="flex flex-row justify-between mx-4 mb-8 mt-4">
                            <div className="flex items-center border border-searchboxcolor shadow-sm rounded-lg px-2 py-2 w-1/5">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-searchiconcolor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0110.607 10.607z" />
                                </svg> */}

                                <input type="text" placeholder="Search..." className="ml-2 text-sm font-[400] text-searchtextcolor focus:outline-none" />
                            </div>
                            <div className="flex flex-row justify-between gap-3">
                                <button className="bg-[#4CAF50] border border-searchboxcolor text-xs font-[500] text-white px-4 py-1 rounded-lg hover:bg-blue-100">
                                    Export
                                </button>
                                <button className="bg-buttoncolor border border-searchboxcolor text-xs font-[500] text-white px-4 py-1 rounded-lg hover:bg-blue-600">
                                    Add Transactions
                                </button>
                            </div>

                        </div>


                        {/* <Table /> */}
                        <div className="flex w-full text-xs font-[700]  text-transactiontextcolor">
                            <div className="flex w-full grow items-start">
                                <input type="checkbox" checked={false} readOnly className="mx-4 mt-1" />
                                <div className="w-2/5 truncate text-captextcolor text-sm font-[500]">#</div>
                                <div className="w-full truncate">TRANSACTION ID</div>
                                <div className="w-full truncate">CUSTOMER ID</div>
                                <div className="w-full truncate">SOURCE</div>
                                <div className="w-full truncate">DATE</div>
                                <div className=" w-full truncate items-center">AMOUNT</div>
                                <div className=" w-full truncate items-center">PRODUCT</div>
                                <div className=" w-full truncate items-center">ACCOUNT</div>
                                <div className="w-full truncate">TRANSACTION TYPE</div>
                                <div className=" w-full truncate items-center">PAYMENT STATUS</div>
                            </div>
                        </div>
                        <Transactiontable data={[
                            {
                                transactionId: "1234567890",
                                customerId: "CUS001",
                                source: "Web",
                                date: "2023-10-26",
                                amount: 1000.98,
                                product: "Product A",
                                account: "ACC001",
                                currency: "USD",
                                transactionType: "Deposit",
                                paymentStatus: "Success"
                            },
                            {
                                transactionId: "9876543210",
                                customerId: "CUS002",
                                source: "Mobile",
                                date: "2023-10-25",
                                amount: 50,
                                product: "Product B",
                                account: "ACC002",
                                currency: "EUR",
                                transactionType: "Withdrawal",
                                paymentStatus: "Success"
                            },
                            {
                                transactionId: "1122334455",
                                customerId: "CUS003",
                                source: "API",
                                date: "2023-10-24",
                                amount: 200,
                                product: "Product C",
                                account: "ACC003",
                                currency: "GBP",
                                transactionType: "Transfer",
                                paymentStatus: "Failed"
                            },
                            {
                                transactionId: "6677889900",
                                customerId: "CUS004",
                                source: "Branch",
                                date: "2023-10-23",
                                amount: 75,
                                product: "Product D",
                                account: "ACC004",
                                currency: "JPY",
                                transactionType: "Payment",
                                paymentStatus: "Success"
                            },
                            {
                                transactionId: "1122334455",
                                customerId: "CUS003",
                                source: "API",
                                date: "2023-10-24",
                                amount: 200,
                                product: "Product C",
                                account: "ACC003",
                                currency: "GBP",
                                transactionType: "Transfer",
                                paymentStatus: "Failed"
                            },
                            {
                                transactionId: "6677889900",
                                customerId: "CUS004",
                                source: "Branch",
                                date: "2023-10-23",
                                amount: 75,
                                product: "Product D",
                                account: "ACC004",
                                currency: "JPY",
                                transactionType: "Payment",
                                paymentStatus: "Success"
                            }
                        ]} title={''} />




                    </div>
                </div>
            </div>

        </div>
    )
}

export default Transactions
