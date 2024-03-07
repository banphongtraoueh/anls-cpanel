"use client";
import Slider from "react-slick";
import { getOnlineChannels } from "@/sanity/queries/sanity-query";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function OnlineMedia() {
  const [data, setData] = useState();
  const [silderSettings, setSetings] = useState({
    className: "custome-slick",
    dots: false,
    speed: 4000,
    infinity: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  useEffect(() => {
    const fetchData = async () => {
      const data = await getOnlineChannels();
      setData(data);
      setSetings({
        ...silderSettings,
        slidesToShow: data.length > 3 ? 3 : data.length,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: data.length > 3 ? 3 : data.length,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: data.length > 2 ? 2 : data.length,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 700,
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
    <section className="md:py-12 py-6">
      <div className="px-7 uppercase font-bold lg:text-5xl md:text-[2.7rem] text-[32px] md:mb-12 mb-5 text-center">
        Kênh truyền thông online
      </div>
      <div className="px-7 pt-8 pb-12 bg-greyBg">
        <Slider {...silderSettings}>
          {data &&
            data.map((item, index) => {
              return (
                <div key={index} className="!flex justify-center">
                  <Link
                    href={item.link}
                    className="!flex flex-col !w-[445px] !h-[17rem]"
                    target="_blank"
                  >
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt="Image"
                        height={210}
                        width={445}
                        className="h-full object-cover object-left-top"
                      />
                    ) : (
                      <div className="h-full bg-white w-[445px]"></div>
                    )}
                    <div className="bg-access w-full text-center text-3xl font-bold py-2">
                      {item?.like_amount}+ likes
                    </div>
                  </Link>
                </div>
              );
            })}
        </Slider>
      </div>
    </section>
  );
}
