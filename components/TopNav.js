import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";

//main
const TopNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full sticky top-0">
      <div className="bg-white max-[980px]:bg-[#1a1a27] max-[980px]:h-[58px] w-full shadow-md flex justify-between px-6 from-neutral-500 h-[68px]">
        {/* <div className="duration-500 pl-0 p-1">
          <Image
            className="cursor-pointer min-[980px]:hidden"
            src="/images/logo.png"
            width="100"
            height="10"
            alt="logo"
          />
        </div> */}
        <p className="text-4xl max-[980px]:hidden text-[#04045e] pt-2 font-semibold">
          Cigniti
        </p>

        {/* medium screen side drawer */}
        <div className="min-[980px]:hidden justify-between">
          <HiMenuAlt3
            // onClick={() => setOpen(!open)}
            className="text-4xl absolute w-[120px]  hover:text-blue-400 my-3 cursor-pointer duration-500 text-gray-600 right-6"
          />

          <IoPerson className="text-2xl absolute hover:text-blue-400 my-[17px] cursor-pointer duration-500 text-gray-600 right-6" />
        </div>

        {/* when drawer is opened */}

        <button className="w-48 flex h-12 mt-2.5 max-[980px]:hidden rounded-lg justify-between px-1.5 py-[5px] border border-gray-200">
          <p className="py-2 text-[14px]">
            <span className="text-gray-400">Hi, </span>
            Mallikarjua
          </p>
          <span className="h-9 w-9 py-1 font-semibold text-teal-500 rounded-lg bg-[#c9f7f5]">
            M
          </span>
        </button>

        {/* drawerButton */}
      </div>
    </div>
  );
};

export default TopNav;
