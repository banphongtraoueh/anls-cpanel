"use client";

import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

import CardHome from "./CardHome";
import { fieldsCulture, settingSlides, textFields } from "@/constants/home";

const FieldsHome = ({ posters = [] }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const fieldsCultureFetch = posters.map((item, index) => {
    return {
      image: item.poster,
      index,
      type: fieldsCulture[item.field].type,
      content: fieldsCulture[item.field].content,
    };
  });

  const settings = {
    ...settingSlides,
    beforeChange: (current, next) => setActiveSlide((pre) => next),
  };

  const fieldActive = fieldsCultureFetch.filter(
    (field) => field.index === activeSlide
  );

  return (
    <section
      className="mt-[60px] md:mt-[128px] flex justify-center lg:justify-normal
       lg:gap-[80px] bg-wave-yellow w-full h-[770px] relative overflow-x-hidden"
    >
      {fieldActive[0].image ? (
        <Image
          src={fieldActive[0].image}
          alt="fields_main"
          className="hidden lg:block object-cover"
          width={567}
          height={774}
        />
      ) : (
        <div className="hidden lg:block w-[780px] bg-white h-[774px]"></div>
      )}

      <article className="mt-[40px] text-center lg:text-left">
        <h2 className="font-bold text-center lg:text-left text-[38px] md:text-[42px] xl:text-[65px] leading-[64px]">
          Các mảng <span className="2xl:block">văn hóa nghệ thuật</span>
        </h2>
        <h3 className="font-medium text-[32px] xl:text-[40px] leading-10 text-[#434242] mt-2 xl:mt-6 mb-2">
          {fieldActive[0].type}
        </h3>
        <p className="text-[20px] pr-4 md:pr-2 lg:pr-0 text-justify ml-6 lg:ml-0 xl:text-[26px] text-[#434242] leading-7 max-w-[730px]">
          {fieldActive[0].content}
        </p>
      </article>

      <div className="absolute w-[90%] md:w-[93%] ipadlg:w-[100%] xl:w-[80%] desktop:w-[72%] -bottom-[28px] md:bottom-[80px] lg:bottom-[25px] -right-[36px]">
        <Slider {...settings}>
          {posters.map((post) => (
            <CardHome
              key={post._id}
              image={post.poster}
              text={textFields[post.field]}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FieldsHome;
