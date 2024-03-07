"use client";
import { useState } from "react";
import SponsorTotalChain from "./SponsorTotalChain";
import SponsorContent from "./SponsorContent";
import ActiveActivitiesHome from "./ActiveActivitiesHome";

export default function SponsorAdv({
  totalChain,
  programs,
  packages,
  benefitFields,
}) {
  const [currentTabIndex, setTabIndex] = useState("totalChain");

  const layoutBenefits = {
    totalChain: <SponsorTotalChain data={totalChain} />,
    fields: <SponsorContent data={packages} benefits={benefitFields} />,
    program: <ActiveActivitiesHome activities={programs} type="program" />,
  };

  const tabs = [
    {
      tab: "totalChain",
      title: "toàn dự án",
    },
    {
      tab: "fields",
      title: "theo mảng",
    },
    {
      tab: "program",
      title: "theo chương trình",
    },
  ];

  return (
    <section className="md:py-12 py-6 ">
      <div className="px-4 md:px-7 uppercase font-bold md:text-5xl text-[32px] mb-7 text-center">
        quyền lợi của{" "}
        <span className="block lg:inline-block mt-1 md:mt-4 lg:mt-0">
          nhà tài trợ
        </span>
      </div>
      <div className="flex mb-7 px-4 md:px-0 w-full lg:justify-center justify-evenly">
        {tabs.map((item) => (
          <button
            key={item.tab}
            className={`border border-black font-bold  cursor-pointer md:text-2xl text-base p-[0.6rem] md:p-3 lg:p-4 uppercase lg:mr-10
            ${item.tab === currentTabIndex ? "activeTabProposal" : ""}`}
            onClick={() => setTabIndex(item.tab)}
          >
            {item.title}
          </button>
        ))}
      </div>

      {layoutBenefits[currentTabIndex]}
      <div className="font-bold mt-7 text-center xl:text-xl llg:text-base">
        Gói tài trợ và quyền lợi đi kèm có thể thay đổi cho phù hợp với nhu cầu
        và tính chất của doanh nghiệp
        <div>(Vui lòng liên hệ chúng tôi)</div>
      </div>
    </section>
  );
}
