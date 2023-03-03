import { Collapse } from 'react-collapse';
import { BiChevronRight } from 'react-icons/bi';
import { BsDot, BsLayersFill } from 'react-icons/bs';

const AccordionMenu = ({
  index,
  open,
  toggle,
  submenuOpen,
  title,
  icon,
  submenu,
  submenuItems,
}) => {
  return (
    <>
      <li
        key={index}
        onClick={toggle}
        className={`text-white group-hover: text-[14px] pl-7 hover:bg-[#127873] flex duration-300 gap-x-5 cursor-pointer p-3.5`}
      >
        <span className="float-left text-xl block">
          {icon ? icon : <BsLayersFill  />}
        </span>
        <span className={`font-medium flex-1 ${!open ? 'hidden' : 'visible'}`}>
          {title}
        </span>
        {submenu && open && (
          <BiChevronRight
            className={`font-semibold text-lg ${
              submenuOpen && 'rotate-90'
            } duration-100 mr-2`}
          />
        )}
      </li>
      <Collapse isOpened={open}>
        {submenu && submenuOpen && open && (
          <ul className={`group-hover:${submenuOpen}`}>
            {submenuItems.map((submenuItem, index) => (
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
      </Collapse>
    </>
  );
};

export default AccordionMenu;
