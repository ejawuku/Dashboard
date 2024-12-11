"use client";
import Image from "next/image";

interface HeaderProps {
  title: string;
  notificationCount?: number;
  clicked?: boolean;
  issubpage?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  notificationCount,
  clicked,
  issubpage,
}) => {
  const handleBackNavigation = () => {
    window.history.back();
  };

  return (
    <header className="flex justify-center h-16 top-0 w-full border-b border-dividercolor shadow-lg md:shadow-none">
      <div className="hidden lg:flex justify-between w-11/12 items-center">
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
            {notificationCount! < 0 && (
              <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-[#4190FF]  border-2 border-white text-white text-vs rounded-full w-3 h-3 flex items-center justify-center"></span>
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
      {issubpage == null ? (
        <div className="lg:hidden flex flex-row justify-between px-5 w-full lg:w-11/12 items-center">
          <img src="/icons/options-buttonicon.svg" />
          <div className="flex flex-row gap-3 items-center">
            <span className="relative">
              <Image
                src={"/icons/notification-bell.svg"}
                alt="notification icon"
                width={20}
                height={20}
                className="cursor-pointer"
              />
              {notificationCount! < 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-[#4190FF]  border-2 border-white text-white text-vs rounded-full w-3 h-3 flex items-center justify-center"></span>
              )}
            </span>
            <img src="/icons/mobilelogo.svg" />
          </div>
        </div>
      ) : (
        <div className="lg:hidden flex flex-row justify-between px-5 w-full lg:w-11/12 items-center">
          <div className="flex flex-row justify-between items-center w-full ">
            <div className="flex flex-row items-center gap-2.5">
              <img src="/icons/arrow-left.svg" onClick={handleBackNavigation} />
              <span className="font-[600] text-[18px] text-[#1E1E1E]">
                {title}
              </span>
            </div>

            <img src="/icons/menu.svg" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
