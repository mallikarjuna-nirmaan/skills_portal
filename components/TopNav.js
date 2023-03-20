//main
const TopNav = () => {
  return (
    <div className="w-full sticky top-0">
      <div className="bg-white w-full shadow-md flex justify-between px-6 from-neutral-500 h-[70px]">
        <p className="text-4xl text-[#04045e] pt-1 font-semibold">Cigniti</p>
        <button className="w-48 flex h-12 my-1.5 rounded-lg justify-between px-1.5 py-[5px] border border-gray-200">
          <p className="py-2 text-[14px]">
            <span className="text-gray-400">Hi,</span> Mallikarjuna
          </p>
          <span className="h-9 w-9 py-1 font-semibold text-teal-500 rounded-lg bg-[#c9f7f5]">
            M
          </span>
        </button>
      </div>
    </div>
  );
};

export default TopNav;
