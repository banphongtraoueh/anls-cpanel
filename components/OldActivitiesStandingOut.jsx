"use client";
import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

import { settingSlidesActivity } from "@/constants/home";
import Link from "next/link";

const OldActivitiesStandingOut = ({ activities }) => {
  const [activePage, setActivePage] = useState(0);
  const settings = {
    ...settingSlidesActivity,
    customPaging: (i) => (
      <div
        style={{
          width: "16px",
          height: "16px",
          border: "1px black solid",
          backgroundColor: i === activePage ? "#ffd862" : "transparent",
        }}
        className="rounded-full"
      ></div>
    ),
    beforeChange: (current, next) => {
      setActivePage((pre) => next);
    },
    nextArrow: <NextArrow length={activities.length} />,
    prevArrow: <PrevArrow length={activities.length} />,
  };

  return (
    <>
      <Slider {...settings}>
        {activities.map((event) => (
          <Link href={`/details/${event._id}`} target="_blank" key={event._id}>
            {event.image_poster ? (
              <Image
                src={event.image_poster}
                alt="image_activity"
                className="ml-[50%] translate-x-[-50%] cursor-pointer"
                width={456}
                height={534}
              />
            ) : (
              <div className="ml-[50%] translate-x-[-50%] cursor-pointer w-[456px] h-[534px] bg-white"></div>
            )}
            <p
              className="max-w-[515px] text-center text-[18px] leading-8 font-bold
            mt-[12px] mb-6"
            >
              {event.title}
            </p>
          </Link>
        ))}
      </Slider>
    </>
  );
};

function NextArrow(props) {
  const { className, style, onClick, length } = props;
  const widthSlider = 520;
  const gap = 34;
  const rightValue = (widthSlider - length * 30) / 2 - gap;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        top: "99.4%",
        right: rightValue + "px",
        position: "absolute",
        backgroundColor: "transparent",
        border: "10px solid #333",
        borderColor: "transparent transparent transparent #333",
        zIndex: 10,
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, length, onClick } = props;
  const widthSlider = 520;
  const gap = 40;
  const leftValue = (widthSlider - length * 30) / 2 - gap;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "transparent",
        top: "99.4%",
        left: leftValue + "px",
        position: "absolute",
        border: "10px solid #333",
        borderColor: "transparent #333 transparent transparent",
        zIndex: 10,
      }}
      onClick={onClick}
    />
  );
}

export default OldActivitiesStandingOut;
