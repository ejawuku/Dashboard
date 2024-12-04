import React from "react";
import TransactionItem from "./transaction-item";
import Disputes from "../disputes/page";
import DisputesItem from "./disputes-item";

interface DisputestableProps {
  data: any[];
  title: string;
  date?: string;
}

const DisputesTable: React.FC<DisputestableProps> = ({ data, title, date }) => {
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
                  index % 2 === 0 ? "bg-white" : "bg-Disputestableheadercolor"
                }
              >
                <td>
                  <DisputesItem
                    transactionId={item.transactionId}
                    customerId={item.customerId}
                    date={item.date}
                    amount={item.amount}
                    currency={item.currency}
                    transactionType={item.transactionType}
                    paymentStatus={item.paymentStatus}
                    selected={false}
                    count={index + 1}
                    totalItems={data.length}
                    balance={item.balance}
                    taxableamount={item.taxableamount}
                    elevy={item.elevy}
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

export default DisputesTable;
