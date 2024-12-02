import Image from "next/image";

const Setupbanner = () => {
    return (
        <div className="bg-bannercolor text-sm p-2.5">
            <div className="flex items-center justify-center gap-2">
                <Image
                    src="/icons/danger.svg"
                    alt="setupbanner"
                    width={20}
                    height={20}
                />
                <div className="text-bannertextcolor font-[600]">
                    Finish setting up your business account
                </div>
                <button className="underline font-[600] text-bannetsetuptext">Setup Account</button>
                <div className="flex items-center gap-1 absolute right-4">
                    <Image
                        src="/icons/close.svg"
                        alt="setupbanner"
                        width={15}
                        height={15}
                    />
                    <div className=" text-[#0C66E4] text-sm font-[300]">Maybe Later</div>
                </div>

            </div>
        </div>
    );
};

export default Setupbanner;
