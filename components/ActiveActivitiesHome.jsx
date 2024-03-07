"use client";
import { useState } from "react";
import Slider from "react-slick";
import {
  getActiveActivityDetail,
  getProgramBenefitDetail,
} from "@/sanity/queries/sanity-query";
import { settingSlides } from "@/constants/home";

import CardHome from "./CardHome";
import Popup from "./Popup";
import PopupProgram from "./PopupProgram";
import CardProgram from "./CardProgram";

const ActiveActivitiesHome = ({ activities, type = "activity" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentPopup, setContentPopup] = useState(null);

  const handleOpenPopup = async (id) => {
    try {
      let contentPopup;
      switch (type) {
        case "activity":
          contentPopup = await getActiveActivityDetail(id);
          break;
        case "program":
          contentPopup = await getProgramBenefitDetail(id);
          break;
        default:
          break;
      }
      setContentPopup(contentPopup[0]);
      setIsOpen(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClosePopup = async () => setIsOpen(false);

  const numbersDisplay =
    activities.length <= 2
      ? activities.length
      : activities.length <= 5
      ? activities.length - 1
      : 5;

  let numbersShowMd = numbersDisplay === 1 ? 1 : 2;
  let numbersShowLg = numbersDisplay === 1 ? 1 : numbersDisplay === 2 ? 2 : 3;

  const settings = {
    ...settingSlides,
    focusOnSelect: false,
    slidesToShow: numbersDisplay,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: numbersShowMd,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: numbersShowLg,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const paddingList = {
    lg: {
      1: "lg:pl-[36%]",
      2: "lg:pl-[21%]",
      3: "lg:pl-[12%]",
      4: "lg:pl-[7%]",
      5: "lg:pl-[3%]",
    },
    md: {
      1: "md:pl-[36%]",
      2: "md:pl-[12%]",
      3: "md:pl-[12%]",
      4: "md:pl-[12%]",
      5: "md:pl-[12%]",
    },
    ipad: {
      1: "ipadlg:pl-[36%]",
      2: "ipadlg:pl-[16%]",
      3: "ipadlg:pl-[3%]",
      4: "ipadlg:pl-[3%]",
      5: "ipadlg:pl-[3%]",
    },
  };
  const CardDisplay = type === "activity" ? CardHome : CardProgram;

  return (
    <>
      <div className="mt-[65px] w-full overflow-hidden fade-in">
        <div
          className={`w-[98%] pl-[18%] ${paddingList["lg"][numbersDisplay]} ${paddingList["md"][numbersDisplay]} ${paddingList["ipad"][numbersDisplay]} `}
        >
          <Slider {...settings}>
            {activities.map((item) => (
              <CardDisplay
                key={item._id}
                image={item?.image}
                text={item?.title}
                packageContent={item?.sponsors ?? ""}
                onOpenPopUp={() => handleOpenPopup(item._id)}
                typeCard="active"
              />
            ))}
          </Slider>
        </div>
      </div>
      {isOpen && type === "activity" && (
        <Popup closePopup={handleClosePopup} content={contentPopup} />
      )}

      {isOpen && type === "program" && (
        <PopupProgram closePopup={handleClosePopup} content={contentPopup} />
      )}
    </>
  );
};

export default ActiveActivitiesHome;
