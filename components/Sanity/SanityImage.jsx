import sanityClient from "@/sanity/config/client-config";
import { getImageDimensions } from "@sanity/asset-utils";

import urlBuilder from "@sanity/image-url";
import Image from "next/image";

const SanityImage = ({ value }) => {
  const { width, height } = getImageDimensions(value);

  return (
    <div className="flex text-center">
      <Image
        src={`${urlBuilder(sanityClient).image(value).url()}`}
        alt={value.alt || " "}
        loading="lazy"
        width={width}
        height={height}
        className="shadow-xl object-cover m-auto aspect-video"
      />
    </div>
  );
};

export default SanityImage;
