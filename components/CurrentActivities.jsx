"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import Popup from "./Popup";
import {
  getActiveActivities,
  getActiveActivityDetail,
} from "@/sanity/queries/sanity-query";
import { textFields } from "@/constants/home";
export default function CurrentActivities({ fieldName }) {
  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState();
  const [contentPopup, setContentPopup] = useState();
  const [sliderSetting, setSliderSetting] = useState({
    className: "custome-slick",
    dots: true,
    speed: 600,
    infinity: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dotsClass: "custome-dot slick-dots",
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  const year = new Date().getFullYear();

  const handleOpenPopup = async (id) => {
    try {
      const contentPopup = await getActiveActivityDetail(id);
      setContentPopup(contentPopup[0]);
      setOpen(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClosePopup = async () => setOpen(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getActiveActivities(fieldName);
      setData(data);
      const newSetting = {
        ...sliderSetting,
        slidesToShow: data.length > 2 ? 3 : data.length,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: data.length > 2 ? 3 : data.length,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: data.length > 2 ? 2 : data.length,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      setSliderSetting(newSetting);
    };
    fetchData();
  }, [fieldName]);

  return (
    <div className="xl:px-20 lg:px-9 md:px-7 px-6 pt-9 relative">
      <div className="bg-[rgba(255,217,99,0.4)] inline-block px-4 pb-4 uppercase font-bold xl:text-5xl md:text-4xl text-2xl mb-4">
        Hoạt động{" "}
        <span className="block md:inline-block">đang diễn ra {year}</span>
      </div>
      <div className="xl:text-4xl lg:text-2xl pl-4 pr-[4rem ] md:px-4 md:text-xl mb-8 uppercase">
        thuộc mảng văn hóa{" "}
        <span className="block md:inline-block">
          nghệ thuật {textFields[fieldName]}
        </span>
      </div>
      <div>
        <Slider {...sliderSetting}>
          {data &&
            data.map((item, index) => {
              return (
                <div className="!flex justify-center" key={index}>
                  <div
                    className="!flex flex-col xl:w-[392px] md:w-[290px] w-full bg-white p-5 pt-10 px-5 card-shadow cursor-pointer"
                    onClick={() => handleOpenPopup(item._id)}
                  >
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt="Image"
                        width={310}
                        height={170}
                        className="w-full xl:h-[27.5rem] lg:h-[18.5rem] md:h-[19.5rem] h-[23.5rem] object-cover"
                      />
                    ) : (
                      <div className="w-full xl:h-[27.5rem] lg:h-[18.5rem] md:h-[19.5rem] h-[23.5rem] object-cover"></div>
                    )}
                    <div className="bg-[#ffd963] p-1 xl:text-lg lg:text-base my-3 font-bold text-center whitespace-nowrap overflow-hidden px-5 text-ellipsis">
                      {item.title}
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
      {isOpen && <Popup closePopup={handleClosePopup} content={contentPopup} />}
    </div>
  );
}
