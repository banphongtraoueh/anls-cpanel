import Image from "next/image";

const OldActivity = ({ time, title, image }) => {
  return (
    <>
      <div className="min-w-[136px] max-w-[212px] h-[106px] overflow-hidden grow">
        {image && (
          <Image
            src={image}
            alt="activity_img"
            className="object-cover w-[120px] h-[82px] md:w-[212px] md:h-[106px]"
            width={212}
            height={106}
          />
        )}
      </div>
      <div className="self-start md:self-center max-w-[346px] min-w-[172px]">
        <span className="block font-bold text-[16px] leading-8 text-[#565656]">
          {time}
        </span>
        <strong className=" block text-[16px] leading-6 event-text">
          {title}
        </strong>
      </div>
    </>
  );
};

export default OldActivity;
