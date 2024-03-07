import { groq } from "next-sanity";
import sanityClient from "../config/client-config";

const typeCache =
  process.env.NODE_ENV === "development" ? "no-cache" : "force-cache";

const getAllBannersHome = async () => {
  return sanityClient.fetch(
    groq`*[_type=="banners"][0]{
                "image": image[].asset -> url,
            }`,
    {},
    {
      cache: typeCache,
      next: {
        tags: ["banner"],
      },
    }
  );
};

const getActiveActivities = async (type = "all") => {
  if (type === "all") {
    return sanityClient.fetch(
      groq`*[_type=="active_activities" && 
      dateTime(now()) <= dateTime(time_end) && 
      dateTime(now()) >= dateTime(time_start)] | order(time_start asc){
                        _id,  
                        title,
                        field,
                        time_start,
                        time_end,
                        "image": image.asset->url,
                        content,
            }`,
      {},
      { cache: typeCache, next: { tags: ["active_activities"] } }
    );
  } else {
    return sanityClient.fetch(
      groq`*[_type=="active_activities" && 
      dateTime(now()) <= dateTime(time_end) && 
      dateTime(now()) >= dateTime(time_start) && field == $type] | order(time_start asc){
                        _id,  
                        title,
                        field,
                        time_start,
                        time_end,
                        "image": image.asset->url,
                        content,

            }`,
      { type },
      { cache: typeCache, next: { tags: ["active_activities"] } }
    );
  }
};

const getOldActivities = async ({ type = "all", isStanding = false }) => {
  if (type === "all" && !isStanding) {
    return sanityClient.fetch(
      groq`*[_type=="old_activities"]| order(time desc){
                        _id,  
                        title,
                        field,
                        time,
                        "image_poster": image_poster.asset->url,
                        "image_recap": image_recap.asset->url,
                        outstanding,
                        subtext,
                        content,

            }`,
      {},
      {
        cache: typeCache,
        next: {
          tags: ["old_activities"],
        },
      }
    );
  } else if (!isStanding) {
    return sanityClient.fetch(
      groq`*[_type=="old_activities" && field == $type]| order(time desc){
                       _id,  
                        title,
                        field,
                        time,
                        "image_poster": image_poster.asset->url,
                        "image_recap": image_recap.asset->url,
                        outstanding,
                        subtext,
                        content,

            }`,
      { type },
      {
        cache: typeCache,
        next: {
          tags: ["old_activities"],
        },
      }
    );
  } else if (type == "all" && isStanding) {
    return sanityClient.fetch(
      groq`*[_type=="old_activities" && outstanding == true]| order(time desc){
                       _id,  
                        title,
                        field,
                        time,
                        "image_poster": image_poster.asset->url,
                        "image_recap": image_recap.asset->url,
                        outstanding,
                        subtext,
                        content,

            }`,
      {},
      {
        cache: typeCache,
        next: {
          tags: ["old_activities"],
        },
      }
    );
  }
};

const getHelpInfomations = async (type = "fashion") => {
  return sanityClient.fetch(
    groq`*[_type=="helpful_infomation" && field == $type] | order(time desc){
      _id,
      title,
      field,
      "image": image_cover.asset->url,
      time,
    }`,
    { type },
    { cache: typeCache, next: { tags: ["helpful_infomation"] } }
  );
};

const getActiveActivityDetail = async (id) => {
  return sanityClient.fetch(
    groq`*[_type=="active_activities" && _id == $id 
    &&  dateTime(now()) <= dateTime(time_end) 
    &&  dateTime(now()) >= dateTime(time_start)]{
      _id,
      title,
      field,
      "image": image.asset->url,
      time_start,
      time_end,
      content,
    }`,
    { id },
    { cache: typeCache, next: { tags: ["active_activities"] } }
  );
};

const getOldActivityDetail = async (id) => {
  return sanityClient.fetch(
    groq`*[_type=="old_activities" && _id == $id]{
      _id,
      title,
      field,
      "image_poster": image_poster.asset->url,
      "image_recap": image_recap.asset->url,
      time,
      subtext,
      content,
      outstanding
    }`,
    { id },
    { cache: typeCache, next: { tags: ["old_activities"] } }
  );
};

const getHelpfulInfomationDetail = async (id) => {
  return sanityClient.fetch(
    groq`*[_type=="helpful_infomation" && _id == $id]{
      _id,
      title,
      field,
      "image": image.asset->url,
      time,
    }`,
    { id },
    { cache: typeCache, next: { tags: ["helpful_infomation"] } }
  );
};

const getBenefitCompanionByType = async (type = "online") => {
  return sanityClient.fetch(
    groq`*[_type=="sponsored_benefit" && benefit == $type]{
      _id,
      benefit_content,  
    }`,
    { type },
    { cache: typeCache, next: { tags: ["sponsored_benefit"] } }
  );
};

const getBenefitPackages = async () => {
  return sanityClient.fetch(
    groq`*[_type=="sponsored_content"]{
     field,
     amount
    }`,
    {},
    { cache: typeCache, next: { tags: ["sponsored_content"] } }
  );
};

const getOnlineChannels = async () => {
  return sanityClient.fetch(
    groq`*[_type=="online_channel"]{
      _id,
      link,
      "image": image.asset->url,
      like_amount
    }`,
    {},
    { cache: typeCache, next: { tags: ["online_channel"] } }
  );
};

const getUnitCompanions = async () => {
  return sanityClient.fetch(
    groq`*[_type=="unit_companion"][0]{
      _id,
      "image": image[].asset->url,
    }`,
    {},
    { cache: typeCache, next: { tags: ["unit_companion"] } }
  );
};

const getOpenLetter = async () => {
  return sanityClient.fetch(
    groq`*[_type=="open_letter"][0]{
      _id,
      
      content,
    }`,
    {},
    { cache: typeCache, next: { tags: ["open_letter"] } }
  );
};

const getAdminInfoContact = async () => {
  return sanityClient.fetch(
    groq`*[_type=="admin_infomation"] | order(order asc) {
      _id,
      name,
      role,
      email,
      phone,
    }`,
    {},
    { cache: typeCache, next: { tags: ["admin_infomation"] } }
  );
};

const getBannerField = async (type = "fashion") => {
  return sanityClient.fetch(
    groq`*[_type=="banner_field" && field == $type][0]{
      "banner": banner.asset -> url,
    }`,
    { type },
    { cache: typeCache, next: { tags: ["banner_field"] } }
  );
};

const getPosterFields = async () => {
  return sanityClient.fetch(
    groq`*[_type=="banner_field"]{
      _id,
      field,
      "poster": poster.asset -> url,
    }`,
    {},
    { cache: typeCache, next: { tags: ["banner_field"] } }
  );
};

const getProgramBenefits = async () => {
  return sanityClient.fetch(
    groq`*[_type=="program_benefit"]{
      _id,
      title,
      "image": image.asset -> url,
      sponsors,
    }`,
    {},
    { cache: typeCache, next: { tags: ["program_benefit"] } }
  );
};

const getProgramBenefitDetail = async (id) => {
  return sanityClient.fetch(
    groq`*[_type=="program_benefit" && _id == $id]{
      _id,
      title,
      topic,
      size,
      form, 
      "banner": banner.asset -> url,
      "logo": logo.asset -> url,
      time_start,
      time_end,
      content,
      "image": image.asset -> url,
    }`,
    { id },
    { cache: typeCache, next: { tags: ["program_benefit"] } }
  );
};

const getFieldBenefitsDetail = async (id) => {
  return sanityClient.fetch(
    groq`*[_type=="banner_field" && _id == $id]{
      _id,
      field,
      content,
      "image": poster.asset -> url,
    }`,
    { id },
    { cache: typeCache, next: { tags: ["banner_field"] } }
  );
};

const getFieldBenefits = async () => {
  return sanityClient.fetch(
    groq`*[_type=="banner_field"]{
      _id,
      field,
    }`,
    {},
    { cache: typeCache, next: { tags: ["banner_field"] } }
  );
};

const getTotalBenefitAmount = async () => {
  return sanityClient.fetch(
    groq`*[_type=="sponsored_content" && field == "totalproject"][0]{
      amount,
      numbers
    }`,
    {},
    { cache: typeCache, next: { tags: ["sponsored_content"] } }
  );
};

const getFieldStoryImages = async () => {
  return sanityClient.fetch(
    groq`*[_type=="banner_field"]{
      _id,
      field,
      "storyImage": storyImage.asset -> url,
    }`,
    {},
    { cache: typeCache, next: { tags: ["banner_field"] } }
  );
};

export {
  getAllBannersHome,
  getActiveActivities,
  getActiveActivityDetail,
  getOldActivities,
  getOldActivityDetail,
  getHelpInfomations,
  getHelpfulInfomationDetail,
  getBenefitCompanionByType,
  getBenefitPackages,
  getOnlineChannels,
  getUnitCompanions,
  getOpenLetter,
  getAdminInfoContact,
  getBannerField,
  getPosterFields,
  getProgramBenefits,
  getProgramBenefitDetail,
  getFieldBenefitsDetail,
  getFieldBenefits,
  getTotalBenefitAmount,
  getFieldStoryImages,
};
