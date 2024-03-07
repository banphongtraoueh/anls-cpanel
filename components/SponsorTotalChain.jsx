const SponsorTotalChain = ({
  data: { online, offline, other, packageSpon },
}) => {
  const allBenefits = [
    {
      id: "online",
      content: online,
    },
    {
      id: "offline",
      content: offline,
    },
    {
      id: "khác",
      content: other,
    },
  ];

  return (
    <section className="fade-in">
      <div>
        <h3 className="px-4 mt-12 md:px-7 uppercase font-bold md:text-4xl text-[32px] mb-7 text-center">
          Nội dung tài trợ
        </h3>
        <div className="flex mb-[60px]">
          <div className="mx-auto bg-access px-20 py-2 space-y-4">
            <p className="font-bold pb-2 text-2xl border-b-4 border-white block text-center">
              Gói tài trợ
            </p>
            <p className="font-black lg:text-6xl text-4xl text-center">
              {packageSpon?.amount} Triệu
            </p>
            <p className="font-bold text-xl text-center">
              Số lượng: {packageSpon?.numbers}
            </p>
          </div>
        </div>
      </div>
      <div className="font-semibold mb-7 text-center">
        (*) Có thương lượng về số lượng, nội dung, hình thức
      </div>
      <article className="lg:px-16 md:px-10 px-4">
        {allBenefits.map((item) => (
          <div
            key={item.id}
            className="w-full border-t-0 first:border-t-2 border-2 border-black"
          >
            <div className="uppercase border-black bg-access font-black text-2xl text-center py-2 block">
              quyền lợi {item.id}
            </div>

            {item?.content[0]?.benefit_content.map((item, index) => {
              return (
                <div
                  key={index}
                  className="block py-2 border-t-2 border-black px-7 lg:text-xl text-base font-semibold"
                >
                  {item}
                </div>
              );
            })}
          </div>
        ))}
      </article>
    </section>
  );
};

export default SponsorTotalChain;
