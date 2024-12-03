import React from 'react';

interface TransactionstatuscardProps {
  backgroundColor?: string;
  borderColor?: string;
  caption: string;
  count: string;
}

const Transactionstatuscard: React.FC<TransactionstatuscardProps> = ({ backgroundColor, caption, count, borderColor }) => {
  return (
    <div className={`${backgroundColor ? backgroundColor : 'bg-white'} rounded-md border-2 ${borderColor ? borderColor : 'border-white'} flex flex-col p-4 gap-5 w-full`}>
      <div className='text-xs font-[500] text-textcolor'>{caption}</div>
      <div className='text-3xl font-[600] text-textcolor md:pb-12'>{count}</div>
    </div>
  );
};
export default Transactionstatuscard;
