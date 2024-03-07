export default function HeaderBanner({ fieldData }) {
  return (
    <div
      className="h-[17rem] lg:px-32 xl:px-40 md:px-3 py-5 text-white flex flex-col items-center 
     "
      style={{
        background: `url(${fieldData?.headerImage}) no-repeat center`,
        backgroundSize: "cover",
      }}
    >
      <div className="md:text-2xl text-lg text-center font-bold text-shadow uppercase mb-1">
        Chuỗi hoạt động nâng cao văn hoá thưởng thức
      </div>
      <div className="md:text-2xl text-xl text-center mb-5 font-bold text-shadow">
        A NEW LIFESTYLE
      </div>
      <div className="xl:text-8xl lg:text-7xl md:text-6xl  text-4xl mb-5 font-bold font-second text-shadow uppercase">
        {fieldData.name}
      </div>
      {!!fieldData.headerQuotes.content && (
        <div className="md:text-2xl text-lg text-shadow text-center px-2 md:px-0">
          <strong>{fieldData.headerQuotes.author}</strong>{" "}
          {fieldData.headerQuotes.content}
        </div>
      )}
    </div>
  );
}
