import "./globals.css";

import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { twMerge } from "tailwind-merge";

export const metadata = {
  metadataBase: new URL("https://anlsueh.vercel.app"),
  title: "A New Lifestyle",
  openGraph: {
    title: "A New Lifestyle",
    siteName: "A New Lifestyle",
    url: "https://anlsueh.vercel.app",
    type: "website",
  },
  description:
    "A New Lifestyle – chuỗi các hoạt động về nâng cao văn hóa thưởng thức được Hội Sinh viên Đại học Kinh tế TP.HCM tổ chức thực hiện. Với sứ mệnh đồng hành cùng sinh viên UEH khám phá những giá trị tinh thần trong cuộc sống, A New Lifestyle truyền tải những trải nghiệm nghệ thuật phong phú từ những mảng văn hóa nghệ thuật khác nhau, từ đó trang bị cho sinh viên những kĩ năng thực tiễn trong môi trường làm việc xã hội.",
  verification: {
    google: "ZKrw7xbrEzDJuQyRY19mrrzuu5fUcMg9yG17tLwP8fM",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={twMerge("bg-layout")}>
        <Navbar />
        <>{children}</>
        <Footer />
      </body>
    </html>
  );
}
