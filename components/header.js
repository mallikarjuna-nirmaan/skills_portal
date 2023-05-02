import Link from "next/link";
import React from "react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <section className="sticky top-0 bg-gray-50">
      <nav className="border px-5 py-4 h-24">
        <div className="w-[100%] flex justify-between">
          <div className="w-[32%] xl:w-1/3">
            <a className="block max-w-max my-4" href="/">
              <img
                className="h-8"
                src="https://static.shuffle.dev/uploads/files/fd/fd2ad7b7c93525f1ee6109c8066e8d626a2a387f/microsoft.png"
                alt=""
              />
            </a>
          </div>

          <div className="w-[34%] hidden xl:block xl:w-1/3">
            <ul className="w-[90%] flex justify-between space-y-5 space-x-9 text-sm font-medium">
              <li className="ml-1 mt-5">
                <a className="text-gray-700 hover:text-coolGray-900 " href="/">
                  HOME
                </a>
              </li>
              <li className="">
                <a
                  className="text-gray-700 hover:text-coolGray-900 "
                  href="https://learn.nirmaanskills.org/login/"
                >
                  ONLINE LEARNING
                </a>
              </li>
              <li className="">
                <a
                  className="text-gray-700 hover:text-coolGray-900 "
                  href="/site/courses"
                >
                  COURSES
                </a>
              </li>
              <li>
                <a
                  className="text-gray-700 hover:text-coolGray-900 "
                  href="/contact"
                >
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>

          <div className="w-[20%] mr-16 hidden xl:block xl:w-1/3">
            <div
              className={`hidden xl:hidden ${isMenuOpen ? "block" : "hidden"}`}
            >
              <ul className="flex flex-col items-center">
                <li className="mb-4">
                  <a className="text-gray-700 hover:text-coolGray-900" href="/">
                    HOME
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className="text-gray-700 hover:text-coolGray-900"
                    href="https://learn.nirmaanskills.org/login/"
                  >
                    ONLINE LEARNING
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className="text-gray-700 hover:text-coolGray-900"
                    href="/courses"
                  >
                    COURSES
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-700 hover:text-coolGray-900"
                    href="/contact"
                  >
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-[100%] flex text-center items-center justify-around">
              <a
                className="w-32 inline-block py-4 px-5 text-sm leading-5 text-green-50 bg-green-500 hover:bg-green-600 font-medium focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md"
                href="/application"
              >
                APPLY NOW
              </a>
              <a
                className="w-32 inline-block py-4 px-5 text-sm leading-5 text-green-50 bg-green-500 hover:bg-green-600 font-medium focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md"
                href="/login"
              >
                LOGIN
              </a>
              <Link href="/">
                <img className="h-16" src="/images/logo.png" alt="logo" />
              </Link>
            </div>
          </div>
        </div>
        <button
          className="navbar-burger self-center xl:hidden"
          onClick={handleMenuToggle}
        >
          <svg
            width={35}
            height={35}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              className="text-white"
              width={32}
              height={32}
              rx={6}
              fill="currentColor"
            />
            <path
              className="text-black"
              d="M7 12H25C25.2652 12 25.5196 11.8946 25.7071 11.7071C25.8946 11.5196 26 11.2652 26 11C26 10.7348 25.8946 10.4804 25.7071 10.2929C25.5196 10.1054 25.2652 10 25 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM25 15H7C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.2652 6.10536 16.5196 6.29289 16.7071C6.48043 16.8946 6.73478 17 7 17H25C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15ZM25 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H25C25.2652 22 25.5196 21.8946 25.7071 21.7071C25.8946 21.5196 26 21.2652 26 21C26 20.7348 25.8946 20.4804 25.7071 20.2929C25.5196 20.1054 25.2652 20 25 20Z"
              fill="currentColor"
            />
          </svg>
          {isMenuOpen ? "Close Menu" : "Open Menu"}
        </button>
      </nav>
    </section>
  );
};
export default Header;
