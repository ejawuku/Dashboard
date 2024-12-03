import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        nav_hover: "var(--sidebar-hover)",
        'textcolor': '#151515',
        'subtextcolor': '#49454F',
        'valuecolor': '#0B4CA7',
        'captextcolor': '#151515',
        'subtitlecolor': '#49454FCC',
        'bordercolor': '#F3F4F6',
        'successcolor': '#27AE601A',
        'failedcolor': '#EB57571A',
        'pendingcolor': '#F2C94C1A',
        'successbordercolor': '#27AE604D',
        'successtextcolor': '#0EAD69',
        'failedtextcolor': '#D12953',
        'failedbordercolor': '#EB57574D',
        'pendingbordercolor': '#F2C94C4D',
        'summarycolor': '#3E516A',
        'tableheadercolor': '#F2F8FF',
        'headercolor': '#828282',
        'bannercolor': '#FFF7D6',
        'bannertextcolor': '#D97008',
        'bannetsetuptext': '#136DEB',
        'hrcolor': '#F2F2F2',
        'dividercolor': '#E0E0E0',
        'transactiontableheadercolor': '#F9FAFC',
        'transactiontextcolor': '#687182',
      },
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
      },
      fontSize: {
        'base': '10px',
        'xs': '12px',
        'sm': '14px',
        'lg': '16px',
      },
    },
  },
  plugins: [],
} satisfies Config;
