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
                    <div>
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
                                paymentStatus: "Completed"
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
                                paymentStatus: "Pending"
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
                                paymentStatus: "Completed"
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
                                paymentStatus: "Completed"
                            }
                        ]} title={''} />




                    </div>
                </div>
            </div>

        </div>
    )
}

export default Transactions
