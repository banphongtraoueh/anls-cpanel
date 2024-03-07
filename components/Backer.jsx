"use client";
import { getUnitCompanions } from "@/sanity/queries/sanity-query";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { twMerge } from "tailwind-merge";

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={twMerge(
        `z-10 !-left-20 md:!-left-[7rem] !w-12 !h-12`,
        className
      )}
      onClick={onClick}
    >
      <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M3 7.5L11 0V15L3 7.5Z" fill="#000000"></path>{" "}
        </g>
      </svg>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={twMerge(
        "z-10 !-right-20 md:!-right-[3.2rem] lg:!-right-[4.2rem] xl:!-right-20 !w-12 !h-12",
        className
      )}
      onClick={onClick}
    >
      <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M12 7.5L4 0V15L12 7.5Z" fill="#000000"></path>
        </g>
      </svg>
    </div>
  );
}
export default function Backer() {
  const [data, setData] = useState();
  const [silderSettings, setSetings] = useState({
    className: "",
    dots: false,
    speed: 600,
    infinity: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
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
  useEffect(() => {
    const fetchData = async () => {
      const data = await getUnitCompanions();
      setData(data);
      setSetings({
        ...silderSettings,
        slidesToShow: data.image.length > 5 ? 5 : data.image.length,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: data.image.length > 5 ? 5 : data.image.length,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: data.image.length > 3 ? 3 : data.image.length,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: data.image.length > 3 ? 3 : data.image.length,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: data.image.length > 2 ? 2 : data.image.length,
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
    };
    fetchData();
  }, []);
  return (
    <section
      className="w-full lg:h-[40rem] md:h-[30rem] my-16 xl:px-24 lg:px-16 md:px-10 px-5 font-second font-black"
      style={{ background: 'url("/Background/Background.png")' }}
    >
      <div className="uppercase font-primary lg:text-5xl md:text-[2.7rem] text-[32px] text-center md:text-left font-bold lg:w-[40%] md:w-[50%] md:mb-16 mb-8">
        Các đơn vị
        <span className="block md:w-[125%] md:mt-4">đã đồng hành</span>
      </div>
      <div className="pl-[3.7rem] md:ml-[12px] xl:ml-0 md:pl-16 pr-[3.5rem] md:px-0 xl:px-16">
        <Slider {...silderSettings}>
          {data &&
            data?.image.map((item, index) => {
              return (
                <div
                  key={index}
                  className="!w-[12.5rem] h-[14.5rem] !flex items-center justify-center rounded-2xl"
                >
                  <Image
                    src={item}
                    alt="Image"
                    className="w-full"
                    width={100}
                    height={100}
                  />
                </div>
              );
            })}
        </Slider>
      </div>
    </section>
  );
}
