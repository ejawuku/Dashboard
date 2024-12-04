interface IconButtonProps {
  backgroundColor?: string;
  image?: string;
  text?: string;
  outlined?: boolean;
  textColor?: string;
  iconSize?: number;
}

const IconButton: React.FC<IconButtonProps> = ({
  backgroundColor,
  image,
  text,
  outlined,
  textColor,
  iconSize = 20,
}) => {
  return (
    <button
      className={`rounded-md flex items-center text-sm px-4 py-2.5 text-center ${
        outlined ? "border border-bordercolor shadow-sm" : ""
      } ${backgroundColor ? backgroundColor : "bg-black"} ${
        textColor ? textColor : "text-black"
      }`}
    >
      {image && (
        <img
          src={image}
          alt={text || "icon"}
          width={iconSize}
          height={iconSize}
          className={`${text ? "mr-2" : ""}`}
        />
      )}
      {text && <div>{text}</div>}
    </button>
  );
};

export default IconButton;
