import { Fragment } from 'react';
import { ImBooks } from 'react-icons/im';
import { TbTie } from 'react-icons/tb';
import { IoIosPeople } from 'react-icons/io';
import { IoPeopleSharp, IoBagCheck } from 'react-icons/io5';
import { BsPersonCheckFill, BsClockFill } from 'react-icons/bs';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

// // pie chart
// import {
//   Chart as ChartJS,
//   ArcElement,
//   BarElement,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale,
// } from 'chart.js';
// import { Pie, Bar } from 'react-chartjs-2';

// ChartJS.register(
//   ArcElement,
//   BarElement,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale
// );

// export const data1 = {
//   labels: ['male', 'female', 'others'],
//   datasets: [
//     {
//       // label: '# of Votes',
//       data: [12.1, 87.8, 0],
//       backgroundColor: [
//         'rgb(27, 197, 189)',
//         'rgb(105, 147, 255)',
//         'rgb(255,255,0,0.9)',
//       ],
//       borderColor: [
//         'rgb(128,128,128, 0.3)',
//         'rgb(128,128,128, 0.3)',
//         'rgb(128,128,128, 0.3)',
//       ],
//       borderWidth: 2,
//     },
//   ],
// };

// export const data2 = {
//   labels: ['15-20', '21-25', '26+'],
//   datasets: [
//     {
//       // label: '# of Votes',
//       data: [40.3, 53.2, 6.1],
//       backgroundColor: [
//         'rgb(27, 197, 189)',
//         'rgb(105, 147, 255)',
//         'rgb(255,255,0,0.9)',
//       ],
//       borderColor: [
//         'rgb(128,128,128, 0.1)',
//         'rgb(128,128,128, 0.4)',
//         'rgb(128,128,128, 0.3)',
//       ],
//       borderWidth: 2,
//     },
//   ],
// };

//main
const TopNav = () => {
  // function classNames(...classes) {
  //   return classes.filter(Boolean).join(' ');
  // }

  // const barData1 = {
  //   labels: ['', '', ''],
  //   datasets: [
  //     {
  //       label: 'placed',
  //       data: [0, 0, 109],
  //       backgroundColor: 'yellow',
  //       borderWidth: 0,
  //     },
  //   ],
  // };

  // const barData2 = {
  //   labels: ['cycle-1', 'cycle-2', 'cycle-3', 'cycle-4'],
  //   datasets: [
  //     {
  //       label: 'placed',
  //       data: [37, 25, 27, 0],
  //       backgroundColor: 'yellow',
  //       borderWidth: 0,
  //     },
  //   ],
  // };

  // const barOptions1 = {
  //   scales: {
  //     y: {
  //       title: {
  //         display: true,
  //         text: '(Number of students)',
  //         color: 'black',
  //       },
  //     },
  //     x: {
  //       title: {
  //         display: true,
  //         text: '2022-23',
  //         color: 'black',
  //       },
  //     },
  //   },
  // };

  // const barOthers2 = {
  //   scales: {
  //     y: {
  //       title: {
  //         display: true,
  //         text: '(Number of students)',
  //         fontStyle: 'bold',
  //         color: 'black',
  //       },
  //     },
  //   },
  // };

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
