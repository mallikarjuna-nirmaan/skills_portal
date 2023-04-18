import Image from "next/image";
import { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import {
  BsLayersFill,
  BsDot,
  BsPersonSquare,
  BsPersonPlusFill,
} from "react-icons/bs";
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

  // const toggle = (index) => {
  //   if (open === index) {
  //     setOpen(null);
  //   }
  //   setOpen(index);
  // };

  const Menus = [
    { title: "Dashboard", path: "/dashboard" },
    {
      title: "Employees",
      path: "/employees/create_employee",
      icon: <BsPersonSquare />,
      // submenu: true,
      // submenuItems: [{ title: 'Submenu 1' }, { title: 'Submenu 1' }],
    },
    {
      title: "Courses",
      path: "/courses/add_course",
      icon: <ImBooks />,
      // submenu: true,
      // submenuItems: [{ title: 'Submenu 1' }, { title: 'Submenu 1' }],
    },
    {
      title: "Batches",
      path: "/batches/create_batch",
      icon: <IoIosPeople />,
      // submenu: true,
      // submenuItems: [{ title: 'Submenu 1' }, { title: 'Submenu 1' }],
    },
    {
      title: "Students",
      path: "/students/create_student",
      icon: <IoPerson />,
      // submenu: true,
      // submenuItems: [{ title: 'Submenu 1' }, { title: 'Submenu 1' }],
    },
    {
      title: "Employers",
      path: "/employers/create_employer",
      icon: <HiOfficeBuilding />,
      // submenu: true,
      // submenuItems: [{ title: 'Submenu 1' }, { title: 'Submenu 1' }],
    },
    {
      title: "Placements",
      path: "/placements/create_placement",
      icon: <BsPersonPlusFill />,
      // submenu: true,
      // submenuItems: [{ title: 'Submenu 1' }, { title: 'Submenu 1' }],
    },
    {
      title: "Job Postings",
      path: "/postings/add_job",
      icon: <RiMailSendFill />,
      // submenu: true,
      // submenuItems: [{ title: 'Submenu 1' }, { title: 'Submenu 1' }],
    },
    {
      title: "Settings",
      path: "/",
      icon: <AiTwotoneSetting />,
      submenu: true,
      submenuItems: [{ title: "Submenu 1" }, { title: "Submenu 1" }],
    },
  ];

  return (
    <div className="float-left max-[980px]:hidden duration-300">
      <div
        className={`bg-dark h-screen pt-4 ${
          //hover:w-72
          open ? "w-72" : "w-20"
        } sticky top-0 duration-100`}
      >
        <HiMenuAlt3
          onClick={() => setOpen(!open)}
          className={`bg-transparent text-4xl mt-1 absolute cursor-pointer ${
            !open
              ? "rotate-180 duration-300 text-blue-400"
              : "text-gray-400 duration-300 hover:text-blue-400"
          } right-6`}
        />
        <div
          className={`bg-white  ${
            !open && "scale-0"
          } duration-75 p-3 pl-8 -mt-5`}
        >
          <Image
            className="cursor-pointer"
            src="/images/logo.png"
            width="100"
            height="10"
            alt="logo"
          />
        </div>

        {/* <div className="duration-500 p-1 pl-3">
          <Image
            className="cursor-pointer min-[980px]:hidden"
            src="/images/logo.png"
            width="100"
            height="10"
            alt="logo"
          />
        </div> */}

        <div className={`mt-12 text-xs ml-6 ${open && "text-gray-700"} mb-3`}>
          {open ? (
            <span className="font-semibold">MENU</span>
          ) : (
            <span className="text-2xl mx-2">...</span>
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
              {item.submenu && submenuOpen && open && (
                <ul>
                  {item.submenuItems.map((submenuItem, index) => (
                    <li
                      key={index}
                      className={`text-white flex text-[14px] pl-10 hover:bg-[#127873] duration-300 gap-x-5 cursor-pointer p-4`}
                    >
                      <BsDot className="font-semibold  text-xl text-gray-900" />
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
