import React from "react";
import Image from "next/image";

interface SummaryItemProps {
  image: string;
  title: string;
  count: number;
  value: number;
  header?: boolean;
}

const Summaryitem: React.FC<SummaryItemProps> = ({
  image,
  title,
  count,
  value,
  header,
}) => {
  return (
    <div
      className={`flex items-center justify-between w-full font-[500] text-summarycolor ${
        header ? "text-sm" : "text-xs"
      } px-5 py-2 ${header ? "font-bold" : ""}`}
    >
      <div className="flex items-center gap-6 w-1/3">
        {!header && <img src={image} alt={title} width={24} height={24} />}
        {header && <div className="md:hidden">{title}</div>}
        <div className="hidden md:block">{title}</div>
      </div>
      <div className="w-1/2 text-left">{count}</div>
      <div className="w-1/5 text-left">{value}</div>
    </div>
  );
};
export default Summaryitem;
