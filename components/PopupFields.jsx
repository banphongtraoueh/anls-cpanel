import { PortableText } from "@portabletext/react";

import SanityImage from "./Sanity/SanityImage";

import { textFields } from "@/constants/home";

export default function PopupFields({ closePopup, content }) {
  const components = {
    types: {
      image: SanityImage,
    },
    marks: {
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
    <>
      <div className="fixed top-0 left-0 h-[100vh] w-[100vw] z-50 flex justify-center scale-in-center">
        <div
          className="bg-black opacity-20 w-full h-full absolute cursor-pointer"
          onClick={closePopup}
        ></div>
        <div className="flex w-full h-full  justify-center items-center">
          <div className="bg-white w-[90%] h-[95%] lg:h-[95%] md:h-fit rounded-xl overflow-hidden z-30 relative">
            <div
              className="absolute top-0 right-0 md:w-12 w-10 mr-3 mt-3 cursor-pointer hover:opacity-50"
              onClick={closePopup}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                  ></circle>
                  <path
                    d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="bg-primary text-xl md:text-3xl lg:text-4xl xl:text-5xl lg:py-10 lg:px-16 md:p-10 p-5">
              <div className="uppercase font-bold w-[90%] pt-[6px] pb-[5px] lg:w-full text-active-activity">
                {`mảng ${textFields[content?.field ?? "fashion"]}`}
              </div>
            </div>
            <div className="lg:py-10 lg:px-16 md:p-10 p-5 flex md:flex-row flex-col md:justify-between md:max-h-[40rem] h-[90%] md:h-auto lg:h-[80%] overflow-y-scroll">
              <div className="xl:text-2xl lg:text-xl ">
                <div className="mb-5 font-medium space-y-4">
                  <PortableText
                    value={content?.content}
                    components={components}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
