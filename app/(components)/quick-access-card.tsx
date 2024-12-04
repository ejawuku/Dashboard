import React from "react";

interface QuickaccesscardProps {
  backgroundColor?: string;
  caption: string;
  balance: string;
  subtext?: string;
  date?: string;
  actiontext?: string;
}

const Quickaccesscard: React.FC<QuickaccesscardProps> = ({
  backgroundColor,
  caption,
  balance,
  subtext,
  date,
  actiontext,
}) => {
  return (
    <div
      className={`${
        backgroundColor ? backgroundColor : "bg-white"
      } rounded-md border   ${
        backgroundColor ? "border-successcolor" : "border-bordercolor"
      } flex flex-col py-5 px-4 gap-5 w-full`}
    >
      <div className="text-xs font-[500] text-[#222222E5]">{caption}</div>
      <div
        className={`text-3xl font-[600]  ${
          backgroundColor ? "text-successtextcolor" : "text-valuecolor"
        }`}
      >
        GHS {balance}
      </div>
      <div className="flex gap-1 text-base font-[400] text-subtitlecolor justify-between">
        <div className="flex flex-row gap-1">
          <div>{subtext}</div>
          <div>{date}</div>
        </div>
        {actiontext && (
          <div className="text-xs text-[#3E516A] font-[500] underline decoration-solid">
            {actiontext}
          </div>
        )}
      </div>
    </div>
  );
};
export default Quickaccesscard;
