import React from "react";

interface QuickaccesscardProps {
  backgroundColor?: string;
  caption: string;
  balance: string;
  subtext?: string;
  date?: string;
  actiontext?: string;
  textcolor?: string;
  subtitlecolor?: string;
}

const Quickaccesscard: React.FC<QuickaccesscardProps> = ({
  backgroundColor,
  caption,
  balance,
  subtext,
  date,
  actiontext,
  textcolor,
  subtitlecolor,
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
          textcolor ? "text-successtextcolor" : "text-valuecolor"
        }`}
      >
        GHS {balance}
      </div>
      <div className="flex gap-1 text-base font-[400] justify-between">
        <div className="flex flex-row gap-1">
          <div
            className={
              subtitlecolor ? `text-successtextcolor` : "text-subtitlecolor"
            }
          >
            {subtext}
          </div>
          <div
            className={
              subtitlecolor ? `text-${subtitlecolor}` : "text-subtitlecolor"
            }
          >
            {date}
          </div>
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
