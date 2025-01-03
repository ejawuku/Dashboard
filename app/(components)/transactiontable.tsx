import React from "react";
import TransactionItem from "./transaction-item";

interface TransactiontableProps {
  data: any[];
  title: string;
  date?: string;
}

const TransactionTable: React.FC<TransactiontableProps> = ({
  data,
  title,
  date,
}) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex justify-between items-center w-full ">
        <div className="text-sm text-headercolor font-[600]">{title}</div>
        <div className="text-xs font-[600] text-headercolor">{date}</div>
      </div>

      <div className="w-full h-[calc(100vh/1.3)] scrollbar-hide overflow-y-auto  overflow-x-auto">
        <table className="w-full border-collapse">
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0
                    ? "bg-white"
                    : "bg-transactiontableheadercolor"
                }
              >
                <td>
                  <TransactionItem
                    transactionId={item.transactionId}
                    customerId={item.customerId}
                    source={item.source}
                    date={item.date}
                    amount={item.amount}
                    product={item.product}
                    account={item.account}
                    currency={item.currency}
                    transactionType={item.transactionType}
                    paymentStatus={item.paymentStatus}
                    selected={false}
                    count={index + 1}
                    totalItems={data.length}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
