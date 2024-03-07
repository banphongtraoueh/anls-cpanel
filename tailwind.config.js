/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        desktop: "1282px",
        horizonMobile: "560px",
        ipadlg: "820px",
      },
      backgroundImage: {
        "wave-yellow": "url('/Home/yellow_wave.png')",
        "story-banner": "url('/Proposal/Story/story-banner.png')",
      },
      colors: {
        layout: "#f0f0f0",
        primary: "#ffb955",
        access: "#f6b21c",
        greyBg: "#cdcbc9",
      },
    },
    fontFamily: {
      primary: ["Montserrat"],
      second: ["SFU"],
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
