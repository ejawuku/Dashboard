import Image from 'next/image';

interface IconButtonProps {
    backgroundColor?: string;
    image?: string;
    text?: string;
    outlined?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({ backgroundColor, image, text, outlined }) => {
    return (
        <button className={`flex items-center p-2 ${outlined ? 'border border-black' : ''} ${backgroundColor ? `bg-${backgroundColor}` : ''}`}>
            {image && (
                <Image src={image} alt={text || 'icon'} width={20} height={20} className={`${text ? 'mr-2' : ''}`} />
            )}
            {text && <span>{text}</span>}
        </button>
    );
};
export default IconButton;
