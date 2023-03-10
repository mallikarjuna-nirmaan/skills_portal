import { Fragment } from 'react';
import { ImBooks } from 'react-icons/im';
import { GiTie } from 'react-icons/gi';
import { IoIosPeople } from 'react-icons/io';
import { IoPeopleSharp, IoBagCheck } from 'react-icons/io5';
import { BsPersonCheckFill, BsStopwatchFill } from 'react-icons/bs';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

// pie chart
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

//main
const TopNav = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const barData2 = {
    labels: ['cycle-1', 'cycle-2', 'cycle-3', 'cycle-4'],
    datasets: [
      {
        label: 'placed',
        data: [37, 25, 27, 0],
        backgroundColor: 'yellow',
        borderWidth: 0,
      },
    ],
  };

  const barOthers2 = {
    scales: {
      y: {
        title: {
          display: true,
          text: '(Number of students)',
          color: 'black',
        },
      },
    },
  };

  return (
    <div className="w-full">
      <div className="bg-white w-full sticky pt-1 top-0 shadow-md flex justify-between px-6 from-neutral-500 h-[70px]">
        <p className="text-4xl text-[#04045e] pt-1 font-semibold">Cigniti</p>
        <button className="w-48 flex h-12 my-1.5 rounded-lg justify-between px-1.5 py-[5px] border border-gray-200">
          <p className="py-2 text-[14px]">
            <span className="text-gray-400">Hi,</span> Mallik
          </p>
          <span className="h-9 w-9 py-1 font-semibold text-teal-500 rounded-lg bg-[#c9f7f5]">
            S
          </span>
        </button>
      </div>
      <div className="bg-[#eef0f8] px-7 py-8 h-full w-auto">
        {/* Dashboard */}
        <div className="flex justify-between">
          <p className="font-semibold">Dashboard</p>
          <div className="flex justify-between w-60">
            <p>Financial Year:</p>
            <Menu as="div" className="inline-block w-32 -mt-2 text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#1bc5bd] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-inset">
                  2022-2023
                  <ChevronDownIcon
                    className="-mr-1 h-6 w-5 text-white"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-0 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Year-ex-1
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Year-ex-1
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Year-ex-1
                        </a>
                      )}
                    </Menu.Item>
                    <form method="POST" action="#">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="submit"
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block w-full px-4 py-2 text-left text-sm'
                            )}
                          >
                            Year-ex-1
                          </button>
                        )}
                      </Menu.Item>
                    </form>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        {/* Employees */}
        <div className=" flex mt-5 mb-8 gap-7">
          <div className="w-[23.5%] h-[100px] bg-white px-7 py-5 shadow-md lg:max-w-md rounded-md">
            <div className="flex justify-between">
              <div>
                <p className="text-2xl font-bold">1</p>
                <p className="text-[#b6b8ca] cursor-pointer duration-100 font-semibold hover:text-[#629fff]">
                  Active courses
                </p>
              </div>
              <div>
                <ImBooks className="text-teal-500 h-16 w-11" />
              </div>
            </div>
          </div>
          <div className="w-[23.5%] h-[100px] bg-white px-7 py-5 shadow-md lg:max-w-md rounded-md">
            <div className="flex justify-between">
              <div>
                <p className="text-2xl font-bold">1</p>
                <p className="text-[#b6b8ca] cursor-pointer duration-100 font-semibold hover:text-[#629fff]">
                  Working Employees
                </p>
              </div>
              <div>
                <GiTie className="text-teal-500 h-16 w-14" />
              </div>
            </div>
          </div>
          <div className="w-[23.5%] h-[100px] bg-white px-7 py-5 shadow-md lg:max-w-md rounded-md">
            <div className="flex justify-between">
              <div>
                <p className="text-2xl font-bold">0</p>
                <p className="text-[#b6b8ca] cursor-pointer duration-100 font-semibold hover:text-[#629fff]">
                  Left Employees
                </p>
              </div>
              <div>
                <GiTie className="text-teal-500 h-16 w-14" />
              </div>
            </div>
          </div>
        </div>
        {/* Batches */}
        <div>
          <p className="font-semibold">Batches</p>
        </div>
        <div className=" flex mt-3 mb-8 gap-7">
          <div className="w-[23.5%] h-[100px] bg-white px-7 py-5 shadow-md lg:max-w-md rounded-md">
            <div className="flex justify-between">
              <div>
                <p className="text-2xl font-bold">0</p>
                <p className="text-[#b6b8ca] cursor-pointer duration-100 font-semibold hover:text-[#629fff]">
                  Ongoing batches
                </p>
              </div>
              <div>
                <BsStopwatchFill className="text-teal-500 h-14 w-10" />
              </div>
            </div>
          </div>
          <div className="w-[23.5%] h-[100px] bg-white px-7 py-5 shadow-md lg:max-w-md rounded-md">
            <div className="flex justify-between">
              <div>
                <p className="text-2xl font-bold">0</p>
                <p className="text-[#b6b8ca] cursor-pointer duration-100 font-semibold hover:text-[#629fff]">
                  Completed batches
                </p>
              </div>
              <div>
                <BsStopwatchFill className="text-teal-500 h-14 w-10" />
              </div>
            </div>
          </div>
          <div className="w-[23.5%] h-[100px] bg-white px-7 py-5 shadow-md lg:max-w-md rounded-md">
            <div className="flex justify-between">
              <div>
                <p className="text-2xl font-bold">0</p>
                <p className="text-[#b6b8ca] cursor-pointer duration-100 font-semibold hover:text-[#629fff]">
                  Upcoming batches
                </p>
              </div>
              <div>
                <BsStopwatchFill className="text-teal-500 h-14 w-10" />
              </div>
            </div>
          </div>
        </div>
        {/* Students */}
        <div>
          <p className="font-semibold">Students</p>
        </div>
        <div className=" flex mt-3 mb-8 gap-7">
          <div className="w-[24%] h-[100px] bg-white px-7 py-5 shadow-md lg:max-w-md rounded-md">
            <div className="flex justify-between">
              <div>
                <p className="text-2xl font-bold">0</p>
                <p className="text-[#b6b8ca] cursor-pointer duration-100 font-semibold hover:text-[#629fff]">
                  Joined Students
                </p>
              </div>
              <div>
                <BsPersonCheckFill className="text-teal-500 h-14 w-11" />
              </div>
            </div>
          </div>
          <div className="w-[24%] h-[100px] bg-white px-7 py-5 shadow-md lg:max-w-md rounded-md">
            <div className="flex justify-between">
              <div>
                <p className="text-2xl font-bold">0</p>
                <p className="text-[#b6b8ca] cursor-pointer duration-100 font-semibold hover:text-[#629fff]">
                  Ongoing Students
                </p>
              </div>
              <div>
                <IoIosPeople className="text-teal-500 h-14 w-11" />
              </div>
            </div>
          </div>
          <div className="w-[24%] h-[100px] bg-white px-7 py-5 shadow-md lg:max-w-md rounded-md">
            <div className="flex justify-between">
              <div>
                <p className="text-2xl font-bold">0</p>
                <p className="text-[#b6b8ca] cursor-pointer duration-100 font-semibold hover:text-[#629fff]">
                  Graduated Students
                </p>
              </div>
              <div>
                <IoPeopleSharp className="text-teal-500 h-14 w-11" />
              </div>
            </div>
          </div>
          <div className="w-[24%] h-[100px] bg-white px-7 py-5 shadow-md lg:max-w-md rounded-md">
            <div className="flex justify-between">
              <div>
                <p className="text-2xl font-bold">0</p>
                <p className="text-[#b6b8ca] cursor-pointer duration-100 font-semibold hover:text-[#629fff]">
                  Placed Students
                </p>
              </div>
              <div>
                <IoBagCheck className="text-teal-500 h-14 w-11" />
              </div>
            </div>
          </div>
        </div>
        {/* Analysis */}
        <div>
          <p className="font-semibold">Analysis</p>
        </div>
        <div className="grid grid-cols-2 mt-3 gap-7">
          <div className="h-[480px] bg-white shadow-sm rounded-md border"></div>
          <div className="h-[480px] bg-white shadow-sm p-9 rounded-md border">
            <p className='font-semibold text-lg'>Students analysis (By cycle)</p>
           
            <Bar
              className="h-[900px] mt-4"
              data={barData2}
              options={barOthers2}
            ></Bar>
          </div>
          <div className="h-96 bg-white shadow-sm rounded-md border">
            <Pie data={data} />
          </div>
          <div className="h-96 bg-white shadow-sm rounded-md border">
            <Pie data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
