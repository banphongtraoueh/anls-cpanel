import About from "@/components/About";
import CurrentActivities from "@/components/CurrentActivities";
import HeaderBanner from "@/components/HeaderBanner";
import News from "@/components/News";
import { fieldContents } from "@/constants/fields";
import { textFields } from "@/constants/home";
import { getBannerField } from "@/sanity/queries/sanity-query";

export async function generateMetadata({ params }) {
  const name = params.name;

  let description = "";

  switch (name) {
    case "audio":
      description =
        "Dive into the world of audio at UEH! Explore captivating podcasts, mesmerizing soundscapes, and thought-provoking interviews, all created by our talented students and faculty.";
      break;
    case "artwork":
      description =
        "Embark on a journey through creativity at UEH! Discover stunning artwork crafted by our students and faculty, spanning a wide range of styles and mediums.";
      break;
    case "exploration":
      description =
        "Embark on a journey of exploration at UEH! From exciting field trips to fascinating research projects, our university encourages curiosity and discovery.";
      break;
    case "fashion":
      description =
        "Step into the world of fashion at UEH! Discover the latest trends, runway highlights, and fashion-forward creations crafted by our talented designers.";
      break;
    case "literature":
      description =
        "Immerse yourself in the world of literature at UEH! From classic novels to contemporary poetry, our campus celebrates the power of words and storytelling.";
      break;
    default:
      description =
        "Discover the vibrant cultural landscape of UEH! From audio to artwork, exploration to fashion, literature to dance, our university celebrates creativity, diversity, and expression.";
      break;
  }

  return {
    title: "A New Lifestyle - " + textFields[name].toUpperCase(),
    description: description,
    verification: {
      google: "ZKrw7xbrEzDJuQyRY19mrrzuu5fUcMg9yG17tLwP8fM",
    },
  };
}

export default async function Fields({ params }) {
  const bannerField = await getBannerField(params.name);
  const fieldData = {
    ...fieldContents[params.name],
    headerImage: bannerField.banner,
  };

  return (
    <div className="mt-[124px] max-w-[1440px] overflow-x-hidden mx-auto">
      <HeaderBanner fieldData={fieldData} />
      <About fieldData={fieldData} />
      <CurrentActivities fieldName={fieldData.apiType} />
      <News fieldName={fieldData.apiType} />
    </div>
  );
}
