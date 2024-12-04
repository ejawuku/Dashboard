const Gradientbutton = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className={`rounded-md flex items-center justify-center text-xs px-2.5 py-2.5 text-center shadow-sm bg-gradient-to-b from-[#F3F3F3] to-[#EBEBEB] text-black`}
  >
    <div className="text-xs text-[#201F21] font-[500]">{text}</div>
  </button>
);

export default Gradientbutton;
