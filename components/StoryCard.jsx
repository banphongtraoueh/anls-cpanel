const StoryCard = ({ src, field, text, maxWidthText, style }) => {
  return (
    <div
      className={`overflow-hidden 
      w-full h-full md:w-[45%] md:h-[416px] lg:w-[30%] lg:h-[450px] xl:h-[416px]
      flex items-center lg:items-start gap-[16px] 
      border-access border-[6px] 
      py-[36px] pl-2 pr-[0.3rem] md:px-2 
    ${style}`}
    >
      <div
        className="lg:w-[45%] xl:w-[230px] lg:h-[288px] 
        md:w-[45%] h-[240px] md:h-[280px] w-[50%] overflow-hidden rounded-[10px]"
      >
        {src ? (
          <div
            className="w-full h-full
        hover:scale-125 transition-transform duration-500 ease-in-out
        overflow-hidden rounded-[10px]"
            style={{
              backgroundImage: `url('${src}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        ) : (
          <div
            className="w-full h-full
        hover:scale-125 transition-transform duration-500 ease-in-out
        overflow-hidden rounded-[10px]"
            style={{
              backgroundColor: `white`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        )}
      </div>
      <div className="w-[50%] self-start">
        <h3
          className="capitalize font-bold text-xl md:text-[1.4rem] lg:text-[24px] xl:text-3xl 
        border-b-access border-b-4 pb-1 text-left mb-2 max-w-[162px] md:max-w-[180px]"
        >
          {field}
        </h3>
        <p className={maxWidthText}>{text}</p>
      </div>
    </div>
  );
};

export default StoryCard;
