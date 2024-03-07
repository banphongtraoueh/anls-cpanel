import SanityImage from "@/components/Sanity/SanityImage";
import { getOldActivityDetail } from "@/sanity/queries/sanity-query";
import { changeISOtoNormalDate } from "@/utils";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const id = params.slug;
  const content = await getOldActivityDetail(id);

  let description = "The detail page about the old activity";

  return {
    title: content[0].title,
    description: description,
    verification: {
      google: "ZKrw7xbrEzDJuQyRY19mrrzuu5fUcMg9yG17tLwP8fM",
    },
  };
}

export default async function DetailOldActivity({ params }) {
  const id = params.slug;
  const content = await getOldActivityDetail(id);

  const acti = {
    ...content[0],
    time: changeISOtoNormalDate(content[0].time),
  };

  const components = {
    types: {
      image: SanityImage,
    },
    listItem: {
      bullet: ({ children }) => <li className="list-disc">{children}</li>,
    },
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
      link: ({ children, value }) => {
        const rel = !value?.href?.startsWith("/")
          ? "noreferrer noopener"
          : undefined;
        return (
          <a
            href={value.href}
            rel={rel}
            target="_blank"
            className="text-blue-500"
          >
            {children}
          </a>
        );
      },
    },
  };

  return (
    <section className="mb-40 mt-[120px] max-w-[1440px] mx-auto px-[48px] md:px-[62px] text-[18px] md:text-[24px]">
      <h2 className="uppercase font-medium mb-4">
        <Link href="/" className="mr-4">
          Trang chủ
        </Link>
        <span className="font-bold text-[#f6b21c] mr-4">&gt;</span>
        Hoạt động đã diễn ra
      </h2>

      <h3 className="font-bold text-[28px] md:text-[33px] mb-4">
        {acti?.title}
      </h3>
      <span className="block">{acti?.time}</span>
      <article className="mt-4 leading-relaxed space-y-4 text-justify">
        <PortableText value={acti?.content} components={components} />
      </article>
    </section>
  );
}
