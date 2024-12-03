interface TransactionItemProps {
    transactionId: string;
    customerId: string;
    source: string;
    date: string;
    amount: number;
    product: string;
    account: string;
    currency: string;
    transactionType: string;
    paymentStatus: string;
    selected: boolean;
    count: number;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
    transactionId,
    customerId,
    source,
    date,
    amount,
    product,
    account,
    currency,
    transactionType,
    paymentStatus,
    selected,
    count,
}) => {
    return (
        <div className="flex w-full text-xs font-[400] p-4 text-transactiontextcolor gap-4">
            <div className="flex w-full grow items-start">
                <input type="checkbox" checked={selected} readOnly className="mr-4" />
                <div className="w-full truncate text-captextcolor text-sm font-[500]">{count}</div>
                <div className="w-full truncate">{transactionId}</div>
                <div className="w-full truncate">{customerId}</div>
                <div className="w-full truncate">{source}</div>
                <div className="w-full truncate">{date}</div>
                <div className=" w-full gap-2 items-center">
                    <div className="w-full">{amount}</div>
                    <div className="w-full">{currency}</div>
                </div>
                <div className=" w-full gap-2 items-center">
                    <div className="w-full">{product}</div>
                    <div className="w-full">{currency}</div>
                </div>
                <div className=" w-full gap-2 items-center">
                    <div className="w-full">{account}</div>
                    <div className="w-full">{currency}</div>
                </div>
                <div className="w-full truncate">{transactionType}</div>
                <div className="w-full truncate">
                    <div className="rounded-full px-2 py-1 font-[500] text-successtextcolor bg-successcolor whitespace-nowrap">
                        {paymentStatus}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TransactionItem;
