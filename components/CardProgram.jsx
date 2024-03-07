import Image from "next/image";

const CardProgram = ({
  image,
  text,
  packageContent,
  typeCard = "banner",
  onOpenPopUp,
}) => {
  const cardClass = {
    banner: {
      width: "w-[240px]",
      height: "h-[280px] lg:h-[300px]",
      bgText: "bg-white md:py-[23px]",
      text: "text-[22px] font-medium",
    },

    active: {
      width: "w-[240px]",
      height: "h-[280px] lg:h-[300px]",
      bgText: "bg-[#ffd963] h-[100px] ",
      text: "text-[16px] font-bold text-active-activity",
    },
  };

  return (
    <div
      className={`${cardClass[typeCard].width} rounded-[10px] bg-white drop-shadow-lg cursor-pointer`}
      onClick={onOpenPopUp}
    >
      <div
        className={`w-full ${cardClass[typeCard].height} overflow-hidden rounded-tl-[10px] rounded-tr-[10px]`}
      >
        {image && (
          <Image
            src={image}
            alt={text}
            className="object-cover"
            width={600}
            height={300}
          />
        )}
      </div>

      <div
        className={`w-full px-[14px] flex items-center justify-center ${cardClass[typeCard].bgText} rounded-bl-[10px] rounded-br-[10px]`}
      >
        <div className="">
          <span
            className={`capitalize block text-center ${cardClass[typeCard].text}`}
          >
            {text ? text : ""}
          </span>
          <span className="bg-white px-2 py-1 block font-bold rounded-[3px] text-center mt-2 text-[16px]">
            {packageContent ? packageContent : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardProgram;
