import Image from 'next/image';
import { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import {
  BsLayersFill,
  BsDot,
  BsPersonSquare,
  BsPersonPlusFill,
} from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';
import { IoIosPeople } from 'react-icons/io';
import { IoPerson } from 'react-icons/io5';
import { HiOfficeBuilding } from 'react-icons/hi';
import { RiMailSendFill } from 'react-icons/ri';
import { AiTwotoneSetting } from 'react-icons/ai';
import AccordionMenu from './AccordionMenu';

const SideNav = () => {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      setOpen(null);
    }
    setOpen(index);
  };

  const Menus = [
    { title: 'Dashboard' },
    {
      title: 'Employees',
      icon: <BsPersonSquare />,
      // submenu: true,
      // submenuItems: [{ title: 'Submenu 1' }, { title: 'Submenu 1' }],
    },
    {
      title: 'Courses',
      icon: <ImBooks />,
      // submenu: true,
      // submenuItems: [{ title: 'Submenu 1' }, { title: 'Submenu 1' }],
    },
    {
      title: 'Batches',
      icon: <IoIosPeople />,
      // submenu: true,
      // submenuItems: [{ title: 'Submenu 1' }, { title: 'Submenu 1' }],
    },
    {
      title: 'Students',
      icon: <IoPerson />,
      // submenu: true,
      // submenuItems: [{ title: 'Submenu 1' }, { title: 'Submenu 1' }],
    },
    {
      title: 'Employers',
      icon: <HiOfficeBuilding />,
      // submenu: true,
      // submenuItems: [{ title: 'Submenu 1' }, { title: 'Submenu 1' }],
    },
    {
      title: 'Placements',
      icon: <BsPersonPlusFill />,
      // submenu: true,
      // submenuItems: [{ title: 'Submenu 1' }, { title: 'Submenu 1' }],
    },
    {
      title: 'Job Postings',
      icon: <RiMailSendFill />,
      // submenu: true,
      // submenuItems: [{ title: 'Submenu 1' }, { title: 'Submenu 1' }],
    },
    {
      title: 'Settings',
      icon: <AiTwotoneSetting />,
      submenu: true,
      submenuItems: [{ title: 'Submenu 1' }, { title: 'Submenu 1' }],
    },
  ];

  return (
    <div className="float-left">
      <div
        className={`bg-dark  h-screen pt-4 ${
          //hover:w-72
          open ? 'w-72' : 'w-20'
        } sticky top-0 duration-100`}
      >
        <FaBars
          onClick={() => setOpen(!open)}
          className={`bg-transparent text-blue-400 text-3xl mt-2 absolute cursor-pointer ${
            !open && 'rotate-180'
          } right-6`}
        />
        <div
          className={`bg-white  ${
            !open && 'scale-0'
          } duration-75 p-3 pl-8 -mt-4`}
        >
          <Image
            className="cursor-pointer"
            src="/images/logo.png"
            width="100"
            height="10"
            alt="logo"
          />
        </div>

        <div className={`mt-14 text-xs ml-6 ${open && 'text-[...]'} mb-3`}>
          <span>MENU</span>
        </div>

        <ul>
          {Menus.map((item, index) => (
            // return (
            //   <AccordionMenu
            //     key={index}
            //     submenuOpen={submenuOpen}
            //     open={index === open}
            //     title={item.title}
            //     icon={item.icon}
            //     submenu={item.submenu}
            //     submenuItems={item.submenuItems}
            //     toggle={() => toggle(index)}
            //   />
            // );
            <>
              <li
                key={index}
                onClick={() => setSubmenuOpen(!submenuOpen)}
                className={`text-white group-hover: text-[14px] pl-7 hover:bg-[#127873] flex duration-300 gap-x-5 cursor-pointer p-3.5`}
              >
                <span className="float-left text-xl block">
                  {item.icon ? item.icon : <BsLayersFill />}
                </span>
                <span
                  className={`font-medium flex-1 ${
                    !open ? 'hidden' : 'visible'
                  }`}
                >
                  {item.title}
                </span>
                {item.submenu && open && (
                  <BiChevronRight
                    className={`font-semibold text-lg ${
                      submenuOpen && 'rotate-90'
                    } duration-100 mr-2`}
                  />
                )}
              </li>
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
      <div className="font-semibold">home page</div>
    </div>
  );
};

export default SideNav;
