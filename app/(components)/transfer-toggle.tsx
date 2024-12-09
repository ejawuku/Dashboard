import React from "react";

interface Props {
  isChecked: boolean;
}

const Transfertoggle: React.FC<Props> = ({ isChecked }) => {
  return (
    <div className="flex items-center gap-2">
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" checked={isChecked} />
        <div
          className={`w-11 h-6 rounded-full peer peer-focus:ring-[#136DEB] dark:peer-focus:ring-[#136DEB] bg-[#D2D5DA] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 ${
            isChecked ? "peer-checked:bg-[#136DEB]" : ""
          }`}
        ></div>
      </label>
      <span className="text-[#848A9C] text-sm">Enable Automated Transfer</span>
    </div>
  );
};

export default Transfertoggle;
