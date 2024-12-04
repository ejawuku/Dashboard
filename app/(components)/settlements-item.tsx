interface SettlementItemProps {
  amount: string;
  description: string;
  recipients: string;
  time: string;
  paymentStatus: string;
  selected: boolean;
  count: number;
  totalItems?: number;
}

const SettlementItem: React.FC<SettlementItemProps> = ({
  amount,
  paymentStatus,
  selected,
  count,
  totalItems,
  description,
  time,
  recipients,
}) => {
  return (
    <div
      className={`${count == 1 && "mt-24"} ${
        count == totalItems && "mb-10"
      } flex w-full text-xs font-[400] py-4 text-transactiontextcolor `}
    >
      <div className="flex w-full grow items-start">
        <input
          type="checkbox"
          checked={selected}
          readOnly
          className="mx-4 mt-1"
        />
        <div className="w-2/5 truncate text-captextcolor text-sm font-[500]">
          {count}
        </div>
        <div className="w-full text-sm font-[400]">{amount}</div>
        <div className="w-full text-sm font-[400]">{description}</div>
        <div className="w-full text-sm font-[400]">{recipients}</div>
        <div className="w-full text-sm font-[400]">{time}</div>
        <div className="w-full ">
          <div
            className={`rounded-full px-2 font-[500] max-w-fit flex items-center justify-center ${
              paymentStatus == "Success"
                ? "text-successtextcolor"
                : "text-failedtextcolor"
            } ${
              paymentStatus == "Success" ? "bg-successcolor" : "bg-failedcolor"
            } whitespace-nowrap`}
          >
            {paymentStatus}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettlementItem;
