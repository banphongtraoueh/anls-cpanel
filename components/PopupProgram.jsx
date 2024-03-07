import { changeISOtoNormalDate } from "@/utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

import SanityImage from "./Sanity/SanityImage";

export default function PopupProgram({ closePopup, content }) {
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
              <h3 className="uppercase font-bold w-[90%] pt-[6px] pb-[5px] lg:w-full text-active-activity">
                {`chương trình ${content.title}`}
              </h3>
            </div>
            <div className="lg:py-10 lg:px-16 md:p-10 pt-5 pb-10 px-5 flex-col justify-between md:max-h-[40rem] h-[90%] md:h-auto lg:h-[80%] overflow-y-scroll">
              <div className="xl:text-2xl lg:text-xl">
                <div className="mb-5 flex flex-col lg:flex-row font-medium justify-center lg:items-center lg:justify-between text-[14px] md:text-xl">
                  {/* Đơn vị tổ chức */}
                  <div className="text-center">
                    <div className="flex mb-2 lg:mb-0">
                      {content.logo ? (
                        <div
                          className="w-[258px] h-[128px] overflow-hidden mx-auto"
                          style={{
                            backgroundImage: `url(${content?.logo})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                          }}
                        ></div>
                      ) : (
                        <div
                          className="w-[258px] h-[128px] overflow-hidden mx-auto"
                          style={{
                            backgroundColor: `white`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                          }}
                        ></div>
                      )}
                    </div>
                    <div className="p-2 mt-2 mb-4 lg:mb-0 bg-[#fdb44c] inline-block font-medium text-[16px] md:text-xl">
                      Đơn vị tổ chức
                    </div>
                  </div>

                  {/* Chương trình */}
                  <div className="space-y-2 lg:max-w-[418px]">
                    <p>
                      Tên chương trình:{" "}
                      <span className="uppercase">{content?.title}</span>
                    </p>
                    <p>
                      Thời gian: {changeISOtoNormalDate(content?.time_start)} -{" "}
                      {changeISOtoNormalDate(content?.time_end)}
                    </p>
                    <p>Chủ đề: {content?.topic}</p>
                  </div>

                  {/* Quy mô */}

                  <div className="space-y-2 mt-2 lg:mt-0 lg:mb-[2.4rem]">
                    <p>Quy mô: {content.size} sinh viên</p>
                    <p>Hình thức: {content.form}</p>
                  </div>
                </div>
                <div className="mb-5 w-full h-[160px] md:h-[200px] lg:h-[288px] overflow-hidden">
                  {content.banner ? (
                    <Image
                      src={content?.banner}
                      alt="Image"
                      className="object-cover w-full h-full"
                      width={450}
                      height={480}
                    />
                  ) : (
                    <div className="w-full h-full bg-white"></div>
                  )}
                </div>
                <article className="pb-5 font-medium space-y-4 text-[14px] md:text-xl">
                  <PortableText
                    value={content?.content}
                    components={components}
                  />
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
