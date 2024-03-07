const SponsorContentCard = ({
  field,
  amount,
  hiddenOnDesktop,
  hiddenOnMobile,
  classButton,
  handleOpenPopup,
}) => {
  return (
    <div
      className={`bg-[#f6b21c] p-2 md:p-4 shadow-xl rounded-[10px] ${
        hiddenOnDesktop ? "md:hidden" : ""
      } ${hiddenOnMobile ? "hidden md:block" : ""}`}
    >
      <button onClick={handleOpenPopup} className={classButton}>
        <div className="text-white xl:text-4xl lg:text-3xl md:text-2xl text-lg font-black text-shadow-2 uppercase ">
          {field}
        </div>
        <div className="xl:text-[4rem] lg:text-5xl md:text-4xl text-xl font-bold">
          {amount} triệu
        </div>
      </button>
    </div>
  );
};

export default SponsorContentCard;
