import Image from "next/image";

export default function About({ fieldData }) {
  return (
    <div className="lg:px-8 xl:px-20 pt-7 flex justify-between lg:flex-row flex-col items-center">
      <div className="lg:w-[65%] w-[90%]">
        <div className="flex w-full mb-7 items-center">
          <Image
            className="w-1/5 mr-7 blink-1"
            src="/Icons/icon_search.png"
            width={130}
            height={130}
            alt="Image"
          />
          <div className="w-[75%]">
            <div className="md:text-[2.5rem] text-3xl font-second font-bold">
              {fieldData.name}
            </div>
            <div className="xl:text-2xl lg:text-base md:text-xl font-semibold">
              {fieldData.leftSection[0]}
            </div>
          </div>
        </div>
        <div className="flex w-full mb-7 items-center">
          <Image
            className="w-1/5 mr-7 blink-1"
            src="/Icons/icon_book.png"
            width={130}
            height={130}
            alt="Image"
          />
          <div className="w-[75%]">
            <div className="md:text-[2.5rem] text-3xl font-second font-bold">
              {fieldData.name}
            </div>
            <div className="xl:text-2xl lg:text-base md:text-xl font-semibold">
              {fieldData.leftSection[1]}
            </div>
          </div>
        </div>
        <div className="flex w-full mb-7 items-center">
          <Image
            className="w-1/5 mr-7 blink-1"
            src="/Icons/icon_eyes.png"
            width={130}
            height={130}
            alt="Image"
          />
          <div className="w-[75%]">
            <div className="md:text-[2.5rem] text-3xl font-second font-bold">
              {fieldData.name}
            </div>
            <div className="xl:text-2xl lg:text-base md:text-xl font-semibold">
              {fieldData.leftSection[2]}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[30%] md:w-[60%] w-[90%] flex flex-col xl:gap-5 lg:gap-4 md:gap-4 gap-3">
        <div className="flex xl:gap-5 lg:gap-3 md:gap-3 gap-3 justify-between">
          <div className="w-1/2 xl:h-[11.7rem] lg:h-36 md:h-[13.5rem] h-[12rem] bg-primary fade-in">
            {fieldData.rightSection.imageUrls[0] && (
              <Image
                src={fieldData.rightSection?.imageUrls[0]}
                alt="Image"
                width={275}
                height={212}
                className="w-full h-full"
              />
            )}
          </div>
          <div className="w-1/2 xl:h-[11.7rem] lg:h-36 md:h-[13.5rem] h-[12rem] bg-primary p-4 font-black text-white xl:text-2xl md:text-base text-2xl flex items-end fade-in">
            About {fieldData.name}
          </div>
        </div>
        <div className="lg:h-[6.3rem] md:h-[7.75rem] h-[8rem] w-full bg-primary fade-in">
          <Image
            src={fieldData.rightSection?.imageUrls[1]}
            alt="Image"
            width={275}
            height={212}
            className="w-full h-full"
          />
        </div>
        <div className="h-fit w-full bg-primary p-3 flex flex-col fade-in">
          <Image
            src="/Icons/icon_quotes.png"
            alt="Image"
            width={50}
            height={50}
          />
          <div className="ml-[12px]  px-4 xl:text-2xl lg:text-base md:text-[1.3rem] text-xl">
            “{fieldData.rightSection.bookQuotes}”
          </div>
          <div className="font-black text-white xl:text-2xl lg:text-base md:text-lg text-xl self-end">
            {fieldData.rightSection.bookAuthor}
          </div>
        </div>
      </div>
    </div>
  );
}
