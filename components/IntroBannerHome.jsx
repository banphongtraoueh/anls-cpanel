"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const IntroBannerHome = ({ banners }) => {
  const [activeBanners, setActiveBanners] = useState(banners);
  const [display, setDisplay] = useState("block");

  useEffect(() => {
    const timer = setInterval(() => {
      const newBanners = [...activeBanners];

      const firstBanner = newBanners.shift();
      newBanners.push(firstBanner);

      setActiveBanners(newBanners);
      setDisplay("hidden");
    }, 3000);

    const timeDisplay = setTimeout(() => {
      setDisplay("block");
    }, 10);

    return () => {
      clearInterval(timer);
      clearTimeout(timeDisplay);
    };
  }, [activeBanners]);

  return (
    <>
      <div
        className="w-[382px] h-[465px] border border-black 
        rounded-tr-[40px] rounded-bl-[40px] overflow-hidden relative z-[1]
        "
      >
        {activeBanners[0] && (
          <Image
            src={activeBanners[0]}
            alt="banner_1"
            className={`object-cover fade-in ${display}`}
            width={408}
            height={494}
          />
        )}
      </div>
      <div
        className="w-[382px] h-[465px] border border-black 
        rounded-tr-[40px] rounded-bl-[40px] overflow-hidden absolute 
        rotate-[10deg] left-[108px] top-[105px]"
      >
        {activeBanners[1] && (
          <Image
            src={activeBanners[1]}
            alt="banner_2"
            className={`object-cover scale-150 fade-in ${display}`}
            width={408}
            height={494}
          />
        )}
      </div>
    </>
  );
};

export default IntroBannerHome;
