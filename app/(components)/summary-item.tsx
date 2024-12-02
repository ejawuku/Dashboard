import React from 'react';
import Image from 'next/image';

interface SummaryItemProps {
    image: string;
    title: string;
    count: number;
    value: number;
}

const Summaryitem: React.FC<SummaryItemProps> = ({ image, title, count, value }) => {
    return (
        <div className="flex items-center justify-between w-full font-[500 text-summarycolor text-base px-5 py-2">
            <div className="flex items-center gap-8 w-1/2">
                <Image src={image} alt={title} width={24} height={24} />
                <div className="">{title}</div>
            </div>
            <div className="w-1/2 text-left">{count}</div>
            <div className="w-1/5 text-left">{value}</div>

        </div>
    );
};
export default Summaryitem;
