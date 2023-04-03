import Image from 'next/image';

//main
const TopNav = () => {
  return (
    <div className="w-full sticky top-0">
      <div className="bg-white max-[980px]:bg-[#1a1a27] max-[980px]:h-[60px] w-full shadow-md flex justify-between px-6 from-neutral-500 h-[70px]">
        <div className="duration-500 p-1 pl-3">
          <Image
            className="cursor-pointer min-[980px]:hidden"
            src="/images/logo.png"
            width="100"
            height="10"
            alt="logo"
          />
        </div>
        <p className="text-4xl max-[980px]:hidden text-[#04045e] pt-1 font-semibold">
          Cigniti
        </p>
        <button className="w-48 flex h-12 my-1.5 max-[980px]:hidden rounded-lg justify-between px-1.5 py-[5px] border border-gray-200">
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
