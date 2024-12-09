import Image from "next/image";

interface HeaderProps {
  title: string;
  notificationCount?: number;
}

const Header: React.FC<HeaderProps> = ({ title, notificationCount }) => {
  return (
    <header className="flex justify-center h-16 top-0 w-full border-b border-dividercolor">
      <div className="flex justify-between w-11/12 items-center">
        <span className="font-semibold text-lg text-[#1E1E1E]">{title}</span>
        <span className="flex items-center justify-evenly w-24">
          <span className="relative">
            <Image
              src={"/icons/notification-bell.svg"}
              alt="notification icon"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            {notificationCount! > 0 && (
              <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-[#4190FF] text-white text-vs rounded-full w-4 h-4 flex items-center justify-center">
                {notificationCount! > 99 ? "99+" : notificationCount}
              </span>
            )}
          </span>
          <span className="flex justify-between items-center w-12">
            <Image
              src={"/icons/person-icon.svg"}
              alt="profile-icon"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <Image
              src={"/icons/arrow-down-icon.svg"}
              alt="dropdown"
              width={16}
              height={16}
              className="cursor-pointer"
            />
          </span>
        </span>
      </div>
    </header>
  );
};

export default Header;
