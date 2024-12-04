import React from "react";
import TransactionItem from "./transaction-item";
import SettlementItem from "./settlements-item";

interface TransferstableProps {
  data: any[];
  title: string;
  date?: string;
}

const Settlementstable: React.FC<TransferstableProps> = ({
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

      <div className="w-full h-[calc(100vh/1.7)] scrollbar-hide overflow-y-auto  overflow-x-auto">
        <table className="w-full border-collapse">
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-[#F9FAFC]"}
              >
                <td>
                  <SettlementItem
                    amount={item.amount}
                    paymentStatus={item.paymentStatus}
                    selected={false}
                    count={index + 1}
                    totalItems={data.length}
                    description={item.description}
                    recipients={item.recipients}
                    time={item.time}
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

export default Settlementstable;
