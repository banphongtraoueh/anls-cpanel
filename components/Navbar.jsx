"use client";

//library
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, SetOpen] = useState(false);
  const [isMenuMobileOpen, SetOpenMenu] = useState(false);

  const [currentPage, setCurrentPage] = useState(
    pathname === "/" ? "home" : pathname === "/proposal" ? "proposal" : "field"
  );

  const handleToggleMenu = () => {
    isMenuOpen ? SetOpen(false) : SetOpen(true);
  };
  const handleToggleMobileMenu = () => {
    isMenuMobileOpen ? SetOpenMenu(false) : SetOpenMenu(true);
  };

  return (
    <nav
      className={twMerge(
        "bg-layout z-50 font-semibold py-6 px-[24px] md:pl-[16px] md:pr-[4px] lg:px-[34px] select-none fixed top-0 left-0 right-0"
      )}
    >
      <div className="max-w-[1440px] flex-between mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="/Navbar/logo_ueh_green.png"
            alt="image"
            className="mr-3"
            width={95}
            height={58}
          />
          <Image
            src="/Navbar/logo_hsv.png"
            alt="image"
            className="mr-3"
            width={51}
            height={51}
          />
        </Link>
        <div className="md:flex horizonMobile:flex lg:flex md:gap-6 gap-2 items-center text-black text-[30px] hidden">
          <Link
            href="/"
            className={`lg:text-2xl md:text-xl text-lg px-4 py-2 font-semibold
            ${currentPage === "home" ? "border border-black" : ""}`}
            onClick={() => {
              setCurrentPage("home");
            }}
          >
            Trang chủ
          </Link>

          <div
            className={`lg:text-2xl md:text-xl text-lg flex items-center cursor-pointer
            ${currentPage === "field" ? "" : ""}`}
            onClick={() => {
              handleToggleMenu();

              setCurrentPage("field");
            }}
          >
            {isMenuOpen && (
              <div
                onClick={handleToggleMenu}
                className="absolute w-[100vw] h-[100vh] top-0 left-0"
              ></div>
            )}
            <div className="mr-3 relative font-semibold">Mảng</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="11"
              viewBox="0 0 15 13"
              fill="none"
            >
              <path
                d="M7.5 13L0.138784 0.25L14.8612 0.25L7.5 13Z"
                fill="black"
              />
            </svg>
            <div
              className={twMerge(
                "bg-layout absolute top-16 hidden flex-col border-2 border-black mt-5",
                isMenuOpen && "flex"
              )}
            >
              <Link
                href="/fields/fashion"
                className="px-4 py-2 border-b-2 border-black"
              >
                Fashion
              </Link>
              <Link
                href="/fields/audio"
                className="px-4 py-2 border-b-2 border-black"
              >
                Audio
              </Link>
              <Link
                href="/fields/artwork"
                className="px-4 py-2 border-b-2 border-black"
              >
                Artwork & Film
              </Link>
              <Link
                href="/fields/literature"
                className="px-4 py-2 border-b-2 border-black"
              >
                Literature
              </Link>
              <Link href="/fields/exploration" className="px-4 py-2 border-2">
                Exploration
              </Link>
            </div>
          </div>
          <Link
            href="/proposal"
            className={`lg:text-2xl md:text-xl text-lg font-semibold px-4 py-2
          ${currentPage === "proposal" ? "border border-black" : ""}`}
            onClick={() => {
              setCurrentPage("proposal");
            }}
          >
            Proposal
          </Link>
        </div>
        <div
          className="md:hidden items-center block horizonMobile:hidden"
          onClick={handleToggleMobileMenu}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <div>
            <div
              className={twMerge(
                "absolute h-[100vh] w-[100vw] bg-black opacity-20 left-0 top-full hidden",
                isMenuMobileOpen && "block"
              )}
              onClick={handleToggleMobileMenu}
            ></div>
            <div
              className={twMerge(
                "bg-primary flex flex-col absolute top-full items-end right-0 w-3/5 h-[100vh] text-xl pl-5 pt-8 sidebar-shadow sidebarMobile",
                isMenuMobileOpen && "activeSidebarMobile"
              )}
            >
              <Link
                href="/"
                className="px-4 pt-4 pb-2 border-b-2 border-[#000000] w-full text-end font-bold "
              >
                Trang chủ
              </Link>
              <Link
                href="/fields/literature"
                className="px-4 pt-4 pb-2 border-b-2 border-[#161616] w-full text-end font-bold"
              >
                Literature
              </Link>
              <Link
                href="/fields/artwork"
                className="px-4 pt-4 pb-2 border-b-2 border-[#161616] w-full text-end font-bold"
              >
                Artwork & Film
              </Link>
              <Link
                href="/fields/audio"
                className="px-4 pt-4 pb-2 border-b-2 border-[#161616] w-full text-end font-bold"
              >
                Audio
              </Link>
              <Link
                href="/fields/exploration"
                className="px-4 pt-4 pb-2 border-b-2 border-[#161616] w-full text-end font-bold"
              >
                Exploration
              </Link>
              <Link
                href="/fields/fashion"
                className="px-4 pt-4 pb-2 border-b-2 border-[#161616] w-full text-end  font-bold"
              >
                Fashion
              </Link>
              <Link
                href="/proposal"
                className="px-4 pt-4 pb-2 border-b-2 border-[#161616] w-full text-end font-bold"
              >
                Proposal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
