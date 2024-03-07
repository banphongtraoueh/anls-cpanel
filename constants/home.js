export const numbersAccessHome = [
  {
    icon: "/Home/shake_hands.png",
    number: 10,
    suffix: "+",
    text: "Đối tác, nhãn hàng tài trợ",
  },
  {
    icon: "/Home/laptop.png",
    number: 30,
    suffix: "M+",
    text: "Lượt tiếp cận trực tuyến",
  },
  {
    icon: "/Home/group_people.png",
    number: 100000,
    suffix: "",
    text: "Lượt tiếp cận trực tiếp",
  },
];

export const fieldsCulture = {
  fashion: {
    type: "Fashion",
    content: `"Đừng chạy theo xu hướng. Đừng khiến bản thân lệ thuộc vào thời trang. Hãy để chính mình là người quyết định bản thân sẽ mặc gì cũng như sẽ sống ra sao.” - Versace`,
  },
  exploration: {
    type: "Exploration",
    content: `"Người sống nhiều nhất không phải người sống lâu năm nhất mà là người có nhiều trải nghiệm phong phú nhất." – Jean Jacques Rousseau`,
  },
  artwork: {
    type: "Artwork & Film",
    content: `"Nếu một triệu người xem phim của tôi, tôi hy vọng họ thấy một triệu bộ phim khác nhau." - Quentin Tarantino`,
  },
  literature: {
    type: "Literature",
    content: `"Thế giới vô cùng vĩ đại. Cặp mắt của bạn chỉ thấy được một phần nhỏ bé không đáng kể. Bởi vậy bạn hãy tìm lấy các sự kiện ở trong sách. Hãy tích lũy đều đặn hàng ngày các sự kiện ấy." - V.Ôbrưsép`,
  },
  audio: {
    type: "Audio",
    content: `"Cách nhìn của chúng ta về thế giới thực sự được định hình bởi điều chúng ta quyết định lắng nghe." - William James`,
  },
};

export const textFields = {
  exploration: "Exploration",
  fashion: "Fashion",
  artwork: "Artwork & Film",
  literature: "Literature",
  audio: "Audio",
};

// Settings react-slick

export const settingSlides = {
  className: "w-full h-full",
  focusOnSelect: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

export const settingSlidesActivity = {
  dots: true,
  dotsClass: "slick-dots",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  appendDots: (dots) => (
    <div
      style={{
        backgroundColor: "transparent",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
};
