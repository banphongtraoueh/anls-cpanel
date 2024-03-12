import ActiveActivitiesHome from "@/components/ActiveActivitiesHome";
import FieldsHome from "@/components/FieldsHome";
import IntroHome from "@/components/IntroHome";
import OldActivitiesHome from "@/components/OldActivitiesHome";
import {
  getActiveActivities,
  getPosterFields,
} from "@/sanity/queries/sanity-query";

export default async function Home() {
  const activeActivities = await getActiveActivities("all");
  const posterFields = await getPosterFields();

  return (
    <main className="bg-layout w-full max-w-[1440px] mx-auto overflow-hidden">
      <IntroHome />
      <FieldsHome posters={posterFields} />
      <section className="mt-[80px] md:mt-[40px] bg-greyBg w-full pt-[52px]">
        <h2 className="text-center text-[36px] lg:text-[76px] font-bold">
          Hoạt động <span className="block md:inline-block">đã diễn ra</span>
        </h2>
        <OldActivitiesHome />
      </section>

      <section className="mt-[50px] mb-[122px]">
        <h2 className="text-center text-[36px] lg:text-[76px] font-bold">
          Hoạt động <span className="block md:inline-block">đang diễn ra</span>
        </h2>
        <ActiveActivitiesHome activities={activeActivities} />
      </section>
    </main>
  );
}
