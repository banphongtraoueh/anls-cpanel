"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import {
  getHelpInfomations,
  getHelpfulInfomationDetail,
  getOldActivities,
} from "@/sanity/queries/sanity-query";
import { PortableText } from "@portabletext/react";
import { changeISOtoNormalDate } from "@/utils";
import Link from "next/link";
import Popup from "./Popup";
import { twMerge } from "tailwind-merge";
function SamplePrevArrow(props) {
  const { className, onClick, length } = props;
  const arrowPosition = 12 - (length - 2);
  return (
    <div
      className={twMerge(
        `z-10 !top-[28.2rem] !w-12 !h-12 xl:!flex !items-center justify-center !hidden`,
        className
      )}
      style={{ left: arrowPosition + "rem" }}
    >
      <svg
        onClick={onClick}
        viewBox="0 0 16 16"
        width={24}
        height={24}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <rect width="16" height="16" id="icon-bound" fill="none"></rect>
          <polygon points="5,8 10,3 10,13"></polygon>
        </g>
      </svg>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, onClick, length } = props;
  const arrowPosition = 12.5 - (length - 2);
  return (
    <div
      className={twMerge(
        `z-10 !top-[28.2rem] !w-12 !h-12 xl:!flex !items-center justify-center !hidden`,
        className
      )}
      style={{
        right: arrowPosition + "rem",
      }}
    >
      <svg
        onClick={onClick}
        viewBox="0 0 16 16"
        width={24}
        height={24}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <rect width="16" height="16" id="iconBound" fill="none"></rect>
          <polygon points="11,8 6,13 6,3"></polygon>
        </g>
      </svg>
    </div>
  );
}
export default function News({ fieldName }) {
  const [data, setData] = useState();
  const [info, setInfo] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [imagePopup, setImagePopup] = useState("");
  const [sliderSetting, setSliderSetting] = useState({
    className: "custome-slick",
    dots: true,
    speed: 600,
    infinity: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dotsClass: "custome-dot slick-dots custome-dot-2",
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  });

  useEffect(() => {
    const fetchData = async () => {
      const activeData = await getOldActivities({ type: fieldName });
      setData(activeData);
      const infoData = await getHelpInfomations(fieldName);
      const result = [];
      let subArray = [];
      for (let i = 0; i < infoData.length; i++) {
        subArray.push(infoData[i]);
        if (subArray.length === 3) {
          result.push(subArray);
          subArray = [];
        }
      }
      if (subArray.length) {
        result.push(subArray);
      }
      setInfo(result);
      setSliderSetting({
        ...sliderSetting,
        nextArrow: <SampleNextArrow length={result.length} />,
        prevArrow: <SamplePrevArrow length={result.length} />,
      });
    };
    fetchData();
  }, [fieldName]);

  const handleOpenPopup = async (id) => {
    try {
      const contentPopup = await getHelpfulInfomationDetail(id);
      setImagePopup(contentPopup[0].image);
      setIsOpen(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClosePopup = async () => setIsOpen(false);

  return (
    <>
      <div className="py-20 pt-24 lg:pr-4 lg:pl-10 md:px-9 px-5 flex justify-between lg:h-[46.2rem] lg:flex-row flex-col">
        <div className="lg:w-[58%] h-full">
          <div className="uppercase bg-primary px-7 py-2 text-2xl md:text-4xl w-fit font-bold mb-7">
            Tin tức mới nhất
          </div>
          <div
            className={twMerge(
              "lg:h-[89%] md:max-h-[30.5rem] h-fit md:mb-10 max-h-[38.5rem] mb-10 md:pr-5 pr-0",
              data?.length > 2 && "news-scroll overflow-y-scroll"
            )}
          >
            {data &&
              data.map((item, index) => {
                return (
                  <Link
                    href={`/details/${item._id}`}
                    target="_blank"
                    key={index}
                    className="flex mb-4 md:flex-row flex-col md:h-[9.6rem] h-[18.5rem]"
                  >
                    {item.image_recap ? (
                      <Image
                        src={item.image_recap}
                        alt="Image"
                        width={310}
                        height={170}
                        className="xl:w-1/2 md:mr-5 mr-0 md:h-full md:w-[80%] w-[95%] h-[65%] object-cover overflow-hidden"
                      />
                    ) : (
                      <div className="xl:w-1/2 md:mr-5 mr-0 md:h-full md:w-[80%] w-[95%] h-[65%] object-cover overflow-hidden"></div>
                    )}
                    <div className="flex flex-col w-[93%] md:h-full h-2/5">
                      <div className="xl:text-2xl lg:text-base font-bold text-[#565656] overflow-hidden h-1/5">
                        {changeISOtoNormalDate(item.time)}
                      </div>
                      <div className="xl:text-2xl lg:text-base md:text-lg text-lg font-bold overflow-hidden xl:h-[40%] lg:h-[30%] md:h-[75%] h-1/2">
                        {item.title}
                      </div>
                      <div className="hidden md:block xl:text-lg lg:text-sm overflow-hidden max-h-[25%] md:max-h-[35%] lg:max-h-[40%]">
                        <PortableText value={item.subtext} />
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
        <div className="lg:w-[40%] bg-greyBg xl:h-[36rem] lg:h-[35rem] md:h-[42rem] h-[58rem]">
          <div className="uppercase text-2xl md:text-4xl font-bold p-5">
            Thông tin bổ ích
          </div>
          <Slider {...sliderSetting}>
            {info &&
              info.map((item, index) => {
                return (
                  <div key={index} className="cursor-pointer">
                    {item.map((subItem, subIndex) => {
                      return (
                        <div
                          key={subIndex}
                          className="!flex mb-5 md:flex-row flex-col items-center xl:px-5 "
                          onClick={() => handleOpenPopup(subItem._id)}
                        >
                          <div className="w-[260px] flex lg:h-32 h-40 overflow-hidden md:mr-4 mr-0">
                            {subItem.image ? (
                              <Image
                                src={subItem.image}
                                alt="Image"
                                width={310}
                                height={170}
                                className="w-full self-center object-cover"
                              />
                            ) : (
                              <div className="w-full self-center object-cover"></div>
                            )}
                          </div>
                          <div className="flex flex-col md:w-[55%] w-full lg:h-[120px] h-20 overflow-hidden">
                            <div className="xl:text-base lg:text-base md:text-xl text-lg font-bold px-8 md:px-0">
                              {subItem.title}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
      {isOpen && (
        <Popup
          isHelpfulContent
          closePopup={handleClosePopup}
          imagePopup={imagePopup}
        />
      )}
    </>
  );
}
