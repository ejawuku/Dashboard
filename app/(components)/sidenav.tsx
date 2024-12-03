import Image from "next/image";
import Link from "next/link";

export default function Sidenav() {
  const navItems = [
    {
      category: "Overview",
      items: [
        { label: "Dashboard", icon: "/icons/dashboard-icon.svg", href: "" },
      ],
    },
    {
      category: "Payment Management",
      items: [
        {
          label: "Transactions",
          icon: "/icons/transactions-icon.svg",
          href: "",
        },
        {
          label: "Settlements",
          icon: "/icons/settlements-icon.svg",
          href: "",
        },
        {
          label: "Transfers",
          icon: "/icons/transfers-icon.svg",
          href: "",
        },
        {
          label: "Disputes",
          icon: "/icons/disputes-icon.svg",
          href: "",
        },
      ],
    },
    {
      category: "Receive Payments",
      items: [
        {
          label: "Sales Mode",
          icon: "/icons/sales-mode-icon.svg",
          href: "",
        },
        {
          label: "Payment Pages",
          icon: "/icons/payment-links-icon.svg",
          href: "",
        },
        {
          label: "Invoices",
          icon: "/icons/invoices-icon.svg",
          href: "",
        },
      ],
    },
    {
      category: "Shop",
      items: [
        {
          label: "Product Catalog",
          icon: "/icons/product-catalog-icon.svg",
          href: "",
        },
        {
          label: "Customers",
          icon: "/icons/customers-icon.svg",
          href: "",
        },
        {
          label: "MarketPlace",
          icon: "/icons/marketplace-icon.svg",
          href: "",
        },
        { label: "Orders", icon: "/icons/orders-icon.svg", href: "" },
      ],
    },
    {
      category: "Extra Services",
      items: [
        {
          label: "Referral",
          icon: "/icons/referral-icon.svg",
          href: "",
        },
        { label: "Billing", icon: "/icons/billing-icon.svg", href: "" },
        // { label: "Settings", icon: "/icons/billing-icon.svg", href: "" },
        // { label: "Logout", icon: "/icons/billing-icon.svg", href: "" },
      ],
    },
  ];

  return (
    <nav className=" font-body sidenav">
      <div className=" text-white h-28 w-full border-b border-blue-600 flex items-center">
        <div className="w-24 mx-auto text-center flex flex-col justify-around h-24">
          <Image
            src="/icons/logo.svg"
            alt="logo"
            width={52}
            height={50}
            className="mx-auto"
          />
          <span className="border border-white py-1 px-2 rounded-md w-24 mx-auto text-xs">
            TM-012934 {/* Replace with actual merchant ID from fetch */}
          </span>
        </div>
      </div>
      <div className="w-52 mx-auto mt-2" style={{ height: "810px" }}>
        {navItems.map((section, index) => (
          <div key={index} className="my-3">
            <span className="text-blue-400 font-light text-sm">
              {section.category}
            </span>
            <ul className="">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className="text-gray-300 w-52 h-9 my-1 items-center text-base hover:bg-nav_hover rounded"
                >
                  <Link
                    href={item.href}
                    className="flex items-center w-full pl-3 my-2 h-full "
                  >
                    {item.icon && (
                      <Image
                        src={item.icon}
                        alt={`${item.label} icon`}
                        width={20}
                        height={20}
                      />
                    )}
                    <span className="font-semibold ml-3">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
