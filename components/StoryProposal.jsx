import { getFieldStoryImages } from "@/sanity/queries/sanity-query";
import StoryCard from "./StoryCard";

const StoryProposal = async () => {
  const storyImages = await getFieldStoryImages();
  const getImageByField = (field = "fashion") => {
    return storyImages.find((image) => image.field === field)?.storyImage;
  };

  return (
    <>
      <h2 className="mt-12 font-black text-4xl md:text-5xl xl:text-6xl uppercase text-center">
        hồ sơ tài trợ
      </h2>
      <section className="py-10 mb-[220px]">
        <h2 className="xl:text-6xl md:text-5xl text-4xl text-access font-black uppercase mb-[60px] text-center text-shadow-2">
          our story
        </h2>
        <div className="relative bg-story-banner bg-no-repeat bg-center bg-cover h-[490px]">
          <div className="absolute inset-0 bg-black/45"></div>
          <div className="pl-3 md:pr-0 md:pl-10 lg:pl-[9rem] w-full h-full">
            <p
              className="pl-4 md:pl-7 border-l-4 border-access max-w-[1244px] 
  xl:text-[48px] lg:text-[36px] md:text-[1.65rem] text-[1.38rem] font-bold leading-10 
  md:leading-[80px] lg:leading-[60px] text-white z-10 absolute top-[50%] translate-y-[-50%]"
            >
              Bạn có muốn tham gia vào hành trình khám phá và xây dựng phong
              cách sống cá nhân cùng A New Lifestyle?
            </p>
          </div>
          <div
            className="absolute bg-access h-[160px] md:h-[200px] lg:h-[180px] 
        lg:-bottom-[180px] lg:left-[112px] lg:right-[112px]
        md:-bottom-[200px] md:left-[12px] md:right-[12px]
        -bottom-[160px] left-[0px] right-[0px]"
          ></div>
          <div
            className="text-[18px] lg:text-[1.7rem] md:text-[1.2rem] absolute bg-[#cdcbc9] p-6 
            md:px-[45px] md:py-[60px] lg:py-[30px] xl:py-[60px] z-30 
            lg:-bottom-[152px] lg:left-[138px] lg:right-[138px]
            md:-bottom-[177px] md:left-[32px] md:right-[32px]
            -bottom-[146px] left-[10px] right-[10px]"
          >
            <span className="font-bold">A New Lifestyle</span> - Đồng hành cùng
            sinh viên trong hành trình phát triển kỹ năng, khám phá nội tại và
            khơi dậy sự tự tin , từ đó nâng cấp giá trị bản thân - nâng cấp giá
            trị cuộc sống.
          </div>
        </div>
      </section>
      <section className="mb-[120px] mt-[160px] md:mt-[275px] lg:mt-0 px-2 md:px-4 lg:px-0">
        <div className="flex flex-wrap gap-[12px] lg:gap-[22px] gap-y-[50px] justify-center mb-[50px]">
          <StoryCard
            src={getImageByField("fashion")}
            field="fashion"
            text="Định hình phong cách và giá trị mà mỗi cá nhân mong muốn thể hiện thông qua thời trang, đồng thời đề cao tính phù hợp trong các môi trường khác nhau."
            maxWidthText="max-w-[160px] md:max-w-[184px]"
          />
          <StoryCard
            src={getImageByField("artwork")}
            field="artwork & film"
            text="Văn hóa được thể hiện qua cách mà mỗi cá nhân chiêm nghiệm, cảm nhận và đưa ra nhận định về những sản phẩm nghệ thuật dưới dạng điện ảnh, kịch, hội họa."
            maxWidthText="max-w-[160px] md:max-w-[190px]"
          />
        </div>
        {/* PC */}
        <div className="flex gap-[12px] lg:gap-[22px] flex-wrap justify-center gap-y-[50px]">
          <StoryCard
            src={getImageByField("literature")}
            field="literature"
            text="Literature trang bị khả năng sử dụng ngôn ngữ linh hoạt trong môi trường thực tiễn xã hội, đồng thời, lan tỏa các thông điệp tinh thần thông qua các nền tảng con chữ."
            maxWidthText="max-w-[160px] md:max-w-[184px]"
          />
          <StoryCard
            src={getImageByField("exploration")}
            field="exploration"
            text="Exploration là cách bạn trải nghiệm, cảm nhận và chiêm nghiệm thế giới thông qua loại hình du lịch và trải nghiệm văn hóa."
            maxWidthText="max-w-[160px] md:max-w-[184px]"
          />
          <StoryCard
            src={getImageByField("audio")}
            field="audio"
            text="Nêu cao tầm quan trọng của kỹ năng lắng nghe và tiếp nhận thông tin hai chiều trong giao tiếp đối thoại, và đồng thời, lan tỏa những thông điệp cuộc sống qua các loại hình nghệ thuật thanh âm đa dạng."
            maxWidthText="max-w-[160px] md:max-w-[184px]"
          />
        </div>
      </section>
    </>
  );
};

export default StoryProposal;
