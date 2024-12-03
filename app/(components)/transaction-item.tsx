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
        <div className="flex w-full text-xs font-[400] py-4 text-transactiontextcolor">
            <div className="flex w-full grow items-start">
                <input type="checkbox" checked={selected} readOnly className="mx-4 mt-1" />
                <div className="w-2/5 truncate text-captextcolor text-sm font-[500]">{count}</div>
                <div className="w-full truncate">{transactionId}</div>
                <div className="w-full truncate">{customerId}</div>
                <div className="w-full truncate">{source}</div>
                <div className="w-full truncate">{date}</div>
                <div className=" w-full gap-2 items-center">
                    <div className="w-full text-sm font-[400]">{amount}</div>
                    <div className="w-full">{currency}</div>
                </div>
                <div className=" w-full gap-2 items-center">
                    <div className={`w-full text-sm font-[400] ${paymentStatus == "Success" ? 'text-successtextcolor' : 'text-failedtextcolor'}`}>{product}</div>
                    <div className="w-full">{currency}</div>
                </div>
                <div className=" w-full gap-2 items-center">
                    <div className="w-full text-sm font-[400] ">{account}</div>
                    <div className="w-full">{currency}</div>
                </div>
                <div className="w-full truncate">{transactionType}</div>
                <div className="w-full ">
                    <div className={`rounded-full px-2 font-[500] max-w-fit flex items-center justify-center ${paymentStatus == "Success" ? 'text-successtextcolor' : 'text-failedtextcolor'} ${paymentStatus == "Success" ? 'bg-successcolor' : 'bg-failedcolor'} whitespace-nowrap`}>
                        {paymentStatus}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TransactionItem;