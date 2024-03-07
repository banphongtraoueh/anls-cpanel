import { numbersAccessHome } from "@/constants/home";
import Image from "next/image";
import IntroBannerHome from "./IntroBannerHome";
import { getAllBannersHome } from "@/sanity/queries/sanity-query";

const chooseNumberIncre = {
  10: "animate-[counter-10_3s_ease-out_forwards]",
  30: "animate-[counter-30_2s_ease-out_forwards]",
  100000: "animate-[counter-100k_2s_ease-out_forwards]",
};

const IntroHome = async () => {
  const listBanners = await getAllBannersHome();

  return (
    <section className="mt-[124px] lg:flex items-start gap-[100px] px-4 lg:pl-8">
      <article className="flex flex-col items-center justify-between self-start gap-6">
        <h1 className="uppercase text-center md:text-left text-[18px] md:text-[24px] leading-10 font-bold lg:self-start">
          Chuỗi hoạt động nâng cao văn hóa thưởng thức
        </h1>
        <Image
          src="/Footer/anls_black_footer.png"
          alt="logo_anls"
          className="w-[200px] lg:w-[344px]"
          width={344}
          height={180}
        />

        <p className="max-w-[600px] md:max-w-[720px] text-[16px] md:text-[20px] leading-8 font-medium text-justify">
          <span className="font-semibold">A New Lifestyle </span>– chuỗi các
          hoạt động về nâng cao văn hóa thưởng thức được Hội Sinh viên Đại học
          Kinh tế TP.HCM tổ chức thực hiện. Với sứ mệnh đồng hành cùng sinh viên
          UEH khám phá những giá trị tinh thần trong cuộc sống, A New Lifestyle
          truyền tải những trải nghiệm nghệ thuật phong phú từ những mảng văn
          hóa nghệ thuật khác nhau, từ đó trang bị cho sinh viên những kĩ năng
          thực tiễn trong môi trường làm việc xã hội.
        </p>

        <div className="flex-center md:flex-between gap-y-6 gap-10 w-full mt-[10px] flex-wrap">
          {numbersAccessHome.map((item) => {
            return (
              <article key={item.number} className="flex flex-col items-center">
                <h2 className="flex items-center">
                  <div className="mx-auto flex gap-2 items-center">
                    <Image
                      src={item.icon}
                      alt={item.icon}
                      className="object-cover relative bottom-1"
                      width={50}
                      height={40}
                    />
                    <span
                      className={`flex tabular-nums ${
                        chooseNumberIncre[item.number]
                      } [counter-set:_num_var(--num)] before:content-[counter(num)]
                    text-access drop-shadow-md text-4xl lg:text-5xl font-extrabold mb-2
                      `}
                    >
                      <span className="sr-only">{item.number}</span>
                      {item.suffix}
                    </span>
                  </div>
                </h2>
                <p className="font-bold leading-4 text-center max-w-[120px] md:max-w-[220px]">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </article>

      <div className="grow relative hidden lg:block">
        <IntroBannerHome banners={listBanners.image} />
      </div>
    </section>
  );
};

export default IntroHome;
