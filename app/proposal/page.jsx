import Backer from "@/components/Backer";
import OnlineMedia from "@/components/OnlineMedia";
import SponsorAdv from "@/components/SponsorAdv";
import StoryProposal from "@/components/StoryProposal";
import {
  getAdminInfoContact,
  getBenefitCompanionByType,
  getBenefitPackages,
  getFieldBenefits,
  getProgramBenefits,
  getTotalBenefitAmount,
} from "@/sanity/queries/sanity-query";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "A New Lifestyle - Proposal",
  description:
    "Bạn có muốn tham gia vào hành trình khám phá và xây dựng phong cách sống cá nhân cùng A New Lifestyle? A New Lifestyle - Đồng hành cùng sinh viên trong hành trình phát triển kỹ năng, khám phá nội tại và khơi dậy sự tự tin , từ đó nâng cấp giá trị bản thân - nâng cấp giá trị cuộc sống.",
  verification: {
    google: "ZKrw7xbrEzDJuQyRY19mrrzuu5fUcMg9yG17tLwP8fM",
  },
};

export default async function Proposal() {
  const adminInfoContact = await getAdminInfoContact();
  const packages = await getBenefitPackages();
  const totalChain = {
    online: await getBenefitCompanionByType(),
    offline: await getBenefitCompanionByType("offline"),
    other: await getBenefitCompanionByType("other"),
    packageSpon: await getTotalBenefitAmount(),
  };
  const programs = await getProgramBenefits();
  const benefitFields = await getFieldBenefits();

  const components = {
    marks: {
      center: ({ children }) => (
        <span className="block text-center">{children}</span>
      ),
      left: ({ children }) => (
        <span className="block text-left">{children}</span>
      ),
      right: ({ children }) => (
        <span className="block text-right">{children}</span>
      ),
    },
  };

  return (
    <main className="mt-[124px] max-w-[1440px] overflow-x-hidden mx-auto">
      <StoryProposal />
      <section className="flex lg:flex-row flex-col xl:px-24 lg:px-16 md:px-10 px-5 items-center">
        <Image
          src="/Footer/hsv_footer.png"
          alt="Image"
          width={400}
          height={400}
          className="md:h-full w-[70%] md:w-[46%] lg:w-[30%] lg:mr-7 mb-7 lg:mb-0"
        />
        <div>
          <div className="md:text-5xl text-4xl md:mb-4 mb-2 font-bold text-center md:text-start uppercase">
            Về chúng tôi
          </div>
          <div className="lg:text-[22px] md:text-lg text-base font-medium text-justify">
            Hội Sinh viên UEH với nhiều năm kinh nghiệm hoạt động trong lĩnh vực
            sáng tạo thu hút đông đảo sinh viên tham gia các sân chơi văn hóa
            văn nghệ, thể dục thể thao thiết thực và hấp dẫn. Với sự chuyên
            nghiệp trong việc tạo ra môi trường, cơ hội phát triển cho sinh
            viên, đồng thời là cầu nối quan trọng trong cộng đồng sinh viên UEH,
            chúng tôi đã và đang khẳng định được vị thế của mình. Hội Sinh viên
            UEH là đơn vị tiên phong trong các hoạt động, là đầu tàu dẫn dắt tập
            thể sinh viên UEH nói riêng và sinh viên toàn thành phố nói chung.
            Đặc biệt, trong những năm gần đây, Hội Sinh viên UEH đã có những
            bước chuyển mình quan trọng, chúng tôi không ngừng đổi mới sáng tạo,
            xây dựng và triển khai các hoạt động theo định hướng công nghệ số,
            ứng dụng công nghệ, Metaverse để từng bước thể hiện vai trò của sinh
            viên UEH trong kỷ nguyên 4.0.
          </div>
        </div>
      </section>
      <Backer />
      <OnlineMedia />
      <section className="pb-8">
        <div className="md:px-7 uppercase font-bold lg:text-5xl md:text-[2.6rem] text-[32px] md:mb-12 mb-5 text-center">
          Kênh truyền thông offline
        </div>
        <div className="bg-primary flex md:flex-row flex-col items-end p-10 justify-center">
          <div className="md:w-1/2 w-full md:mr-10 flex flex-col items-end">
            <div className="lg:text-[28px] lg:leading-[3rem] md:text-lg font-bold md:mb-10 mb-5 lg:pl-[2rem] md:pl-4 ">
              Truyền thông tại sảnh với đa dạng hình thức (Booth, Poster,
              Brochure, Banner, Standee, LCD,...)
            </div>
            <div className="relative md:mb-0 mb-8">
              <Image
                className="relative z-10"
                src="/Proposal/OfflineImg/OFF_2.png"
                alt=""
                width={640}
                height={390}
              />
              <div className="absolute bg-white xl:w-[30rem] xl:h-[21rem] lg:w-[25rem] lg:h-[16rem] md:w-[19rem] md:h-[12rem] w-[19rem] h-[12rem] -bottom-3 -right-5"></div>
            </div>
          </div>
          <div className="relative md:w-[35%]">
            <Image
              className="relative z-10"
              src="/Proposal/OfflineImg/OFF_1.png"
              alt=""
              width={640}
              height={390}
            />
            <div className="absolute bg-white xl:w-[22rem] xl:h-[35rem] lg:w-[16rem] lg:h-[22rem] md:w-[12rem] md:h-[16rem] w-[18rem] h-[22rem] -bottom-3 -right-5"></div>
          </div>
        </div>
      </section>
      <SponsorAdv
        packages={packages}
        totalChain={totalChain}
        programs={programs}
        benefitFields={benefitFields}
      />
      <section className="py-10 xl:px-24 lg:px-16 md:px-10 px-5">
        <div className="md:text-6xl text-4xl text-access font-black uppercase mb-7 text-center text-shadow-2">
          lời cảm ơn
        </div>
        <div className="pl-7 pb-10 border-l-4 border-access mb-10">
          <div className="lg:text-2xl md:text-xl text-lg font-bold">
            Kính gửi quý doanh nghiệp,
          </div>
          <div className="lg:text-2xl md:text-xl text-lg font-semibold text-justify">
            Ban Tổ chức xin chân thành cảm ơn Quý Doanh nghiệp đã dành thời gian
            quan tâm đến chương trình lần này. Chuỗi hoạt động định hướng văn
            hóa thưởng thức “A New Lifestyle” năm nay sẽ là một cơ hội tốt để
            Quý Doanh nghiệp quảng bá thương hiệu của mình đến với cộng đồng
            sinh viên cũng như nguồn nhân lực tiềm năng và chất lượng.
            <br />
            <br />
            Rất mong nhận được phản hồi từ Quý Doanh nghiệp. Kính chúc Quý Doanh
            nghiệp luôn đạt thật nhiều thành công trong sự nghiệp và phát triển
            vững mạnh trong thị trường Việt Nam nói riêng, thị trường quốc tế
            nói chung.
            <br />
            <br />
            Xin trân trọng cảm ơn và kính chào!
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSf-cQwxtZUKCQ6z2bmwPo0DfNw0PxW29nq7ASj8qL-na-yDkw/viewform"
            target="_blank"
            className="uppercase xl:text-4xl lg:text-3xl md:text-2xl text-lg bg-access font-bold py-3 md:px-24 px-1 w-fit text-center"
          >
            liên hệ với chúng tôi tại đây
          </Link>
        </div>
      </section>
      <section className="bg-greyBg py-10 xl:px-24 lg:px-16 md:px-10 px-5 pb-28 mb-10">
        <div className="uppercase md:text-5xl text-[30px] font-bold text-center md:mb-12 mb-5">
          Thông tin liên hệ
        </div>
        {adminInfoContact.map((adminInfo) => (
          <div className="mb-7" key={adminInfo._id}>
            <div className="xl:text-2xl lg:text-xl md:text-lg font-extrabold uppercase mb-2">
              {adminInfo?.name} - {adminInfo?.role}
            </div>
            <div className="xl:text-2xl lg:text-xl md:text-lg font-semibold">
              SĐT: {adminInfo?.phone}
            </div>
            <div className="xl:text-2xl lg:text-xl md:text-lg font-semibold">
              Email: {adminInfo?.email}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
