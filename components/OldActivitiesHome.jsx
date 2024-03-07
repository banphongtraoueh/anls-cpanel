import OldActivity from "./OldActivity";
import OldActivitiesStandingOut from "./OldActivitiesStandingOut";
import { getOldActivities } from "@/sanity/queries/sanity-query";
import { changeISOtoNormalDate } from "@/utils";
import Link from "next/link";

const OldActivitiesHome = async () => {
  const oldActivities = await getOldActivities({});
  const oldActivitiesStanding = await getOldActivities({ isStanding: true });

  return (
    <div className="flex-center gap-x-[80px] mt-[60px] lg:mt-[80px] pb-[44px]">
      <div className="w-[520px] hidden lg:block">
        <OldActivitiesStandingOut activities={oldActivitiesStanding} />
      </div>
      <ul className="px-4 md:p-0 self-start h-[600px] overflow-y-scroll flex flex-col gap-6 event-container">
        {oldActivities.map((event) => {
          const time = changeISOtoNormalDate(event.time);
          return (
            <li key={event._id} className="cursor-pointer">
              <Link
                href={`/details/${event._id}`}
                target="_blank"
                className="flex items-center gap-4 mr-6 "
              >
                <OldActivity
                  image={event.image_recap}
                  time={time}
                  title={event.title}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OldActivitiesHome;
