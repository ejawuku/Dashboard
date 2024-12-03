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
}) => {
    return (
        <div className="flex w-full text-xs font-[400] p-4 text-transactiontextcolor gap-4">
            <div className="flex w-full grow items-center">
                <input type="checkbox" checked={selected} readOnly className="mr-4" />
                <div className="w-full truncate">{transactionId}</div>
                <div className="w-full truncate">{customerId}</div>
                <div className="w-full truncate">{source}</div>
                <div className="w-full truncate">{date}</div>
                <div className="w-full truncate">{amount}</div>
                <div className="w-full truncate">{product}</div>
                <div className="w-full truncate">{account}</div>
                <div className="w-full truncate">{currency}</div>
                <div className="w-full truncate">{transactionType}</div>
                <div className="w-full truncate">
                    <div className="rounded-full px-2 py-1 text-successtextcolor bg-successcolor whitespace-nowrap">
                        {paymentStatus}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TransactionItem;
