import SideNav from "@/components/SideNav";
import TopNav from "@/components/TopNav";
import Link from "next/link";
import { BsPlus, BsFillCloudArrowUpFill } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";
import { FiEdit, FiSearch } from "react-icons/fi";

const create_employee = () => {
  return (
    <div className="flex bg-[#eef0f8]">
      <SideNav />
      <div className="w-full">
        <TopNav />
        <section className="py-4 text-gray-500">
          <div className="h-14 flex justify-between container w-[95%] mx-auto">
            <p className="text-lg font-medium my-1 text-gray-800">Batches</p>
            <div className="flex justify-between">
              <Link href="#">
                <button className="bg-[#3699ff] text-white hover:bg-[#227dd8] duration-200 text-base font-semibold w-36 ml-2 py-1 flex h-9 mr-3 rounded-md">
                  <BsFillCloudArrowUpFill className="text-xl my-1 mx-3 font-extrabold" />
                  Bulk upload
                </button>
              </Link>
              <Link href="./create">
                <button className="bg-[#3699ff] text-white hover:bg-[#227dd8] duration-200 text-base font-semibold w-36 ml-2 py-1 flex h-9 mr-3 rounded-md">
                  <BsPlus className="text-3xl -my-0.5 ml-1.5 font-extrabold" />
                  Create Batch
                </button>
              </Link>
            </div>
          </div>
          <div className="container w-[95%] px-7 mx-auto py-4 bg-white">
            <div className="flex justify-between">
              <div className="flex">
                <div className="py-3">
                  <label class="relative block">
                    <span class="sr-only">Search</span>
                    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                      <FiSearch />
                    </span>
                    <input
                      class="placeholder:text-slate-400 block bg-white w-64 py-2.5 border border-slate-300 rounded-md pl-9 pr-3 shadow-sm focus:outline-none focus:border-blue-400 focus:ring-blue-400 focus:ring-1 sm:text-sm"
                      placeholder="Search..."
                      type="text"
                      name="search"
                    />
                  </label>
                  {/* <input
                    className="w-72 px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-200 border border-coolGray-200 rounded-md shadow-input"
                    type="text"
                    placeholder="Enter First Name"
                  /> */}
                </div>

                <div className="w-[450px] flex ml-4 md:w-1/2 mx-2 py-2">
                  {/* <p className="my-2.5 mr-2 ml-9 font-normal text-base text-coolGray-800">
                    Status:
                  </p> */}
                  <select
                    className="w-72 px-3 my-1 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-200 border border-coolGray-200 rounded-md shadow-input"
                    defaultValue=""
                  >
                    <option value="" defaultValue>
                      Years(All)
                    </option>
                    <option value="2023-2024">2023-2024</option>
                    <option value="2024-2025">2024-2025</option>
                  </select>
                </div>

                <div className="w-[450px] flex ml-3 md:w-1/2 mx-2 py-2">
                  {/* <p className="my-2.5 mr-2 ml-9 font-normal text-base text-coolGray-800">
                    Status:
                  </p> */}
                  <select
                    className="w-72 px-4 my-1 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-200 border border-coolGray-200 rounded-md shadow-input"
                    defaultValue=""
                  >
                    <option value="" defaultValue>
                      Status(All)
                    </option>
                    <option value="ongoing">Ongoing</option>
                    <option value="completed">Completed</option>
                    <option value="upcoming">Upcoming</option>
                  </select>
                </div>
              </div>
              {/* for button */}
              <div className="py-3">
                <div className="flex justify-between items-center">
                  <div>
                    <label htmlFor="toggleButton" className="flex">
                      <div className="flex"></div>
                    </label>
                  </div>
                  <div>
                    <button className="flex flex-wrap justify-center md:w-auto md:ml-auto px-5 py-2.5 bg-[#e1f0ff] hover:bg-[#609cff] hover:text-white duration-150 font-medium text-sm text-[#609cff] border border-green-200 rounded-md shadow-button">
                      <p>Download</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* table */}
            <div className="py-4 text-sm">
              <table className="border-collapse table-auto align-middle">
                <thead className="bg-dark text-white">
                  <tr className="">
                    <th className="text-start w-screen px-4 py-4">BATCH ID#</th>
                    <th className="text-start w-screen px-4 py-4">COURSE</th>
                    <th className="text-start w-screen px-4 py-4">
                      START DATE
                    </th>
                    <th className="text-start w-screen px-4 py-4">END DATE</th>
                    <th className="text-start w-screen px-4 py-4">
                      TIME(START - END)
                    </th>
                    <th className="text-start w-screen px-4 py-4">STATUS</th>
                    <th className="text-start w-screen px-4 py-4">
                      STUDENTS (Selected/Limit)
                    </th>
                    <th className="text-start w-screen px-4 py-4">GENDER</th>
                    <th className="text-start w-screen px-4 py-4">ACTIONS</th>
                  </tr>
                </thead>

                {/* mainContainer */}
                <tbody className="text-start border bg-white">
                  <tr className="">
                    <td className="text-start w-screen px-4 py-4">
                      mallikarjun
                    </td>
                    <td className="text-start w-screen px-4 py-4">bhavni</td>
                    <td className="text-start w-screen px-4 py-4">aakash</td>
                    <td className="text-start w-screen px-4 py-4">hi</td>
                    <td className="text-start w-screen px-4 py-4">
                      akshaffffffffffffffy
                    </td>
                    <td className="text-start w-screen px-4 py-4">hi</td>
                    <td className="text-start w-screen px-4 py-4">hi</td>
                    <td className="text-start w-screen px-4 py-4">hi</td>
                    <td className="text-start flex w-fit text-2xl font-extrabold px-4 py-4">
                      <BsEyeFill className="border rounded-full hover:duration-300 text-sky-600 border-sky-600 p-0.5 hover:text-white hover:bg-[#3699ff]" />
                      <FiEdit className="border rounded-full hover:duration-300 text-sky-600 mx-2 border-sky-600 p-0.5 hover:text-white hover:bg-[#3699ff]" />
                    </td>
                  </tr>
                  <tr className="">
                    <td className="text-start w-screen px-4 py-4">vinod</td>
                    <td className="text-start w-screen px-4 py-4">hi</td>
                    <td className="text-start w-screen px-4 py-4">hi</td>
                    <td className="text-start w-screen px-4 py-4">rushikesh</td>
                    <td className="text-start w-screen px-4 py-4">hi</td>
                    <td className="text-start w-screen px-4 py-4">hi</td>
                    <td className="text-start w-screen px-4 py-4">hi</td>
                    <td className="text-start w-screen px-4 py-4">basavaraj</td>
                    <td className="text-start flex w-fit text-2xl font-extrabold px-4 py-4">
                      <BsEyeFill className="border rounded-full hover:duration-300 text-sky-600 border-sky-600 p-0.5 hover:text-white hover:bg-[#3699ff]" />
                      <FiEdit className="border rounded-full hover:duration-300 text-sky-600 mx-2 border-sky-600 p-0.5 hover:text-white hover:bg-[#3699ff]" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default create_employee;

{
  /* <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-base text-coolGray-800">
                        Phone number: <span className="text-red-600">*</span>
                      </p>
                      <input
                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                        type="text"
                        placeholder="Phone"
                      />
                    </div> */
}

{
  /* <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-base text-coolGray-800">
                        Password: <span className="text-red-600">*</span>
                      </p>
                      <input
                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                        type="text"
                        placeholder="Enter Password"
                      />
                    </div> */
}
{
  /* <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-base text-coolGray-800">
                        Experience: <span className="text-red-600">*</span>
                      </p>
                      <input
                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                        type="number"
                        placeholder="Enter Experience"
                      />
                    </div> */
}
{
  /* <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-base text-coolGray-800">
                        Join Date: <span className="text-red-600">*</span>
                      </p>
                      <input
                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                        type="Date"
                        placeholder=""
                      />
                    </div> */
}
