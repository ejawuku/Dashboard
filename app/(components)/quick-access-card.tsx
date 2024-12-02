import React from 'react';

interface QuickaccesscardProps {
  backgroundColor?: string;
  caption: string;
  balance: string;
  subtext?: string;
  date?: string;
}

const Quickaccesscard: React.FC<QuickaccesscardProps> = ({ backgroundColor, caption, balance, subtext, date }) => {
  return (
    <div className={`${backgroundColor ? backgroundColor : 'bg-white'} rounded-md border border-bordercolor flex flex-col p-4 gap-5`}>
      <div className='text-xs font-[500] text-captextcolor'>{caption}</div>
      <div className='text-3xl font-[600] text-valuecolor'>GHS {balance}</div>
      <div className="flex gap-1 text-xs font-[400] text-">
        <div>{subtext}</div>
        <div>{date}</div>
      </div>
    </div>
  );
};
export default Quickaccesscard;
