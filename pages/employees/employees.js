import SideNav from "@/components/SideNav";
import TopNav from "@/components/TopNav";
import { BsArrowLeftShort, BsPlus } from "react-icons/bs";

const create_employee = () => {
  return (
    <div className="flex bg-[#eef0f8]">
      <SideNav />
      <div className="w-full">
        <TopNav />
        <section className="py-4 text-gray-500">
          <div className="h-14 flex justify-between container w-[95%] mx-auto">
            <p className="text-lg font-medium my-1 text-gray-800">Employee</p>
            <button className="bg-[#e1f0ff] hover:bg-[#609cff] hover:text-white duration-100 text-[#609cff] text-base font-semibold w-44 ml-2 py-1 flex h-9 mr-3 rounded-md">
              <BsPlus className="text-3xl -my-0.5 ml-1.5 font-extrabold" />
              Create employees
            </button>
          </div>
          <div className="container w-[95%] px-4 mx-auto py-4 bg-white">
            <div className="flex justify-between border pr-4">
              <div className="flex">
                <div className="p-3">
                  <input
                    className="w-80 px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-md shadow-input"
                    type="text"
                    placeholder="Enter First Name"
                  />
                </div>

                <div className="w-[450px] flex md:w-1/2 mx-2 py-3">
                  <p className="my-2 mx-2 font-normal text-base text-coolGray-800">
                    Status:
                  </p>
                  <select
                    className="w-80 px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-md shadow-input"
                    defaultValue=""
                  >
                    <option value="" defaultValue>
                      All
                    </option>
                    <option value="ongoing">Ongoing</option>
                    <option value="left">Left</option>
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
            <div className="py-4">
              <table className="border table-auto">
                <thead className="">
                  <tr>
                    <th>#ID</th>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th>MOBILE</th>
                    <th>EMAIL</th>
                    <th>JOIN DATE</th>
                    <th>ROLE</th>
                    <th>JOB STATUS</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody></tbody>
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
