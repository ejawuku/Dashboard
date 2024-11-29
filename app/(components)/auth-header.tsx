import Image from "next/image";

export default function AuthHeader() {
  return (
    <div className="w-full border-b-2 flex pb-1.5" style={{ height: "88px" }}>
      <div
        className="flex justify-between self-end mx-auto items-center h-14"
        style={{ width: "95%", maxWidth: "1355px" }}
      >
        <Image alt="logo" src="/icons/auth-logo.svg" width={150} height={54} />
        <div className="flex">
          <Image
            alt="customer-support-icon"
            src="/icons/support-icon.svg"
            width={16}
            height={16}
          />
          <span className="ml-1 text-sm text-blue-600 font-semibold">
            Contact Support
          </span>
        </div>
      </div>
    </div>
  );
}
