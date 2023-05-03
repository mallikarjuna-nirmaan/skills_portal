import Image from "next/image";
import { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { BsLayersFill, BsPersonSquare, BsPersonPlusFill } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { IoIosPeople } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { HiOfficeBuilding, HiMenuAlt3 } from "react-icons/hi";
import { RiMailSendFill } from "react-icons/ri";
import { AiTwotoneSetting } from "react-icons/ai";
import AccordionMenu from "./AccordionMenu";
import Link from "next/link";

const SideNav = () => {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const Menus = [
    { title: "Dashboard", path: "dashboard" },
    {
      title: "Employees",
      path: "employees/create",
      icon: <BsPersonSquare />,
      // submenu: true,
      // submenuItems: [{ title: 'Submenu 1' }, { title: 'Submenu 1' }],
    },
    {
      title: "Courses",
      path: "courses/create",
      icon: <ImBooks />,
      // submenu: true,
      // submenuItems: [{ title: 'Submenu 1' }, { title: 'Submenu 1' }],
    },
    {
      title: "Batches",
      path: "batches/create",
      icon: <IoIosPeople />,
      // submenu: true,
      // submenuItems: [{ title: 'Submenu 1' }, { title: 'Submenu 1' }],
    },
    {
      title: "Students",
      path: "students/create-application",
      icon: <IoPerson />,
      // submenu: true,
      // submenuItems: [{ title: 'Submenu 1' }, { title: 'Submenu 1' }],
    },
    {
      title: "Employers",
      path: "employers/create",
      icon: <HiOfficeBuilding />,
      // submenu: true,
      // submenuItems: [{ title: 'Submenu 1' }, { title: 'Submenu 1' }],
    },
    {
      title: "Placements",
      path: "placements/create",
      icon: <BsPersonPlusFill />,
      // submenu: true,
      // submenuItems: [{ title: 'Submenu 1' }, { title: 'Submenu 1' }],
    },
    {
      title: "Job Postings",
      path: "postings/create",
      icon: <RiMailSendFill />,
      // submenu: true,
      // submenuItems: [{ title: 'Submenu 1' }, { title: 'Submenu 1' }],
    },
    {
      title: "Settings",
      path: "settings",
      icon: <AiTwotoneSetting />,
      // submenu: true,
      // submenuItems: [{ title: "Submenu 1" }, { title: "Submenu 1" }],
    },
    // {
    //   title: "Training Links",
    //   path: "training-links/training-link",
    //   icon: <AiTwotoneSetting />,
    //   // submenu: true,
    //   // submenuItems: [{ title: "Submenu 1" }, { title: "Submenu 1" }],
    // },
    // {
    //   title: "Training Videos",
    //   path: "training-videos/training-video",
    //   icon: <AiTwotoneSetting />,
    //   // submenu: true,
    //   // submenuItems: [{ title: "Submenu 1" }, { title: "Submenu 1" }],
    // },
    // {
    //   title: "Training eBooks",
    //   path: "training-books/training-ebook",
    //   icon: <AiTwotoneSetting />,
    //   // submenu: true,
    //   // submenuItems: [{ title: "Submenu 1" }, { title: "Submenu 1" }],
    // },
  ];

  return (
    <div className={`float-left max-[980px]:hidden duration-300`}>
      <div
        className={`bg-dark h-screen 
         ${open ? "w-72" : "w-20"}
         sticky top-0 duration-100`}
        onMouseEnter={() => (open ? "" : setOpen(true))}
        onMouseLeave={() => (open ? "" : setOpen(false))}
      >
        <div
          className={`bg-white flex sticky top-0 justify-between ${
            !open && "scale-0"
          } duration-75 py-2`}
        >
          <Image
            className="mx-3 cursor-pointer"
            src="/images/logo.png"
            width="100"
            height="10"
            alt="logo"
          />
          <HiMenuAlt3
            onClick={() => setOpen(!open)}
            className={`bg-transparent text-4xl my-2 mx-6 cursor-pointer ${
              !open
                ? "rotate-180 duration-300 text-blue-400"
                : "text-gray-400 duration-300 hover:text-blue-400"
            } right-6`}
          />
        </div>

        <div className={`mt-7 mx-4 mb-2 text-xs ml-6 ${open && "text-gray-700"}`}>
          {open ? (
            <span className="font-semibold my-2">MENU</span>
          ) : (
            <span className="text-2xl -my-2 mx-1.5">...</span>
          )}
        </div>

        <ul>
          {Menus.map((item, index) => (
            <>
              <Link href={`/${item.path}`}>
                <li
                  key={index}
                  // onClick={() => setSubmenuOpen(!submenuOpen)}
                  className={`text-white text-[14px] pl-7 hover:bg-[#127873] flex duration-300 gap-x-5 cursor-pointer p-[14px]`}
                >
                  <span className="float-left text-xl block">
                    {item.icon ? item.icon : <BsLayersFill />}
                  </span>
                  <span
                    className={`font-medium flex-1 ${
                      !open ? "hidden" : "visible"
                    }`}
                  >
                    {item.title}
                  </span>
                  {item.submenu && open && (
                    <BiChevronRight
                      onClick={() => setSubmenuOpen(!submenuOpen)}
                      className={`font-semibold text-lg ${
                        submenuOpen && "rotate-90"
                      } duration-100 mr-2`}
                    />
                  )}
                </li>
              </Link>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
