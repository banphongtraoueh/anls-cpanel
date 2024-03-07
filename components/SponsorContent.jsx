import { getFieldBenefitsDetail } from "@/sanity/queries/sanity-query";
import { useState } from "react";
import PopupFields from "./PopupFields";
import SponsorContentCard from "./SponsorContentCard";
export default function SponsorContent({ data, benefits }) {
  const [isOpen, setIsOpen] = useState(false);
  const [contentPopup, setContentPopup] = useState(null);

  const handleOpenPopup = async (id) => {
    try {
      const contentPopup = await getFieldBenefitsDetail(id);
      setContentPopup(contentPopup[0]);
      setIsOpen(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClosePopup = async () => setIsOpen(false);

  const getMoneySpon = (type) => {
    return data.filter((item) => item.field === type)[0]?.amount;
  };
  const getIdSpon = (type) => {
    return benefits.filter((item) => item.field === type)[0]._id;
  };

  const sponsorInfo = {
    fashion: {
      id: getIdSpon("fashion"),
      amount: getMoneySpon("fashion"),
    },
    literature: {
      id: getIdSpon("literature"),
      amount: getMoneySpon("literature"),
    },
    exploration: {
      id: getIdSpon("exploration"),
      amount: getMoneySpon("exploration"),
    },
    audio: {
      id: getIdSpon("audio"),
      amount: getMoneySpon("audio"),
    },
    artwork: {
      id: getIdSpon("artwork"),
      amount: getMoneySpon("artwork"),
    },
  };

  return (
    data && (
      <>
        <section className="fade-in md:py-12 py-6 xl:px-24 lg:px-16 md:px-10 px-5">
          <div className="flex md:justify-between justify-between mb-12">
            <SponsorContentCard
              field="fashion"
              classButton="border-l-4 border-white pl-5"
              amount={sponsorInfo["fashion"].amount}
              handleOpenPopup={() => handleOpenPopup(sponsorInfo["fashion"].id)}
            />
            <SponsorContentCard
              field="literature"
              amount={sponsorInfo["literature"].amount}
              handleOpenPopup={() =>
                handleOpenPopup(sponsorInfo["literature"].id)
              }
              classButton="border-l-4 border-white pl-5 md:mr-0 mr-[1.3rem]"
            />
            <SponsorContentCard
              field="exploration"
              amount={sponsorInfo["exploration"].amount}
              handleOpenPopup={() =>
                handleOpenPopup(sponsorInfo["exploration"].id)
              }
              hiddenOnMobile={true}
              classButton="border-l-4 border-white pl-5 md:block hidden"
            />
          </div>
          <div className="flex md:justify-evenly justify-between mb-12">
            <SponsorContentCard
              field="audio"
              amount={sponsorInfo["audio"].amount}
              handleOpenPopup={() => handleOpenPopup(sponsorInfo["audio"].id)}
              classButton="border-l-4 border-white pl-5"
            />
            <SponsorContentCard
              field="exploration"
              amount={sponsorInfo["exploration"].amount}
              handleOpenPopup={() =>
                handleOpenPopup(sponsorInfo["exploration"].id)
              }
              hiddenOnDesktop={true}
              classButton="border-l-4 border-white pl-5 block md:hidden"
            />
            <SponsorContentCard
              field="artwork & film"
              amount={sponsorInfo["artwork"].amount}
              handleOpenPopup={() => handleOpenPopup(sponsorInfo["artwork"].id)}
              hiddenOnMobile={true}
              classButton="border-l-4 border-white pl-5 hidden md:block"
            />
          </div>
          <div className="md:hidden flex justify-start">
            <SponsorContentCard
              field="artwork & film"
              amount={sponsorInfo["artwork"].amount}
              handleOpenPopup={() => handleOpenPopup(sponsorInfo["artwork"].id)}
              classButton="border-l-4 border-white pl-5"
            />
          </div>
        </section>
        {isOpen && (
          <PopupFields closePopup={handleClosePopup} content={contentPopup} />
        )}
      </>
    )
  );
}
