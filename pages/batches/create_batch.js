import SideNav from "@/components/SideNav";
import TopNav from "@/components/TopNav";

const create_batch = () => {
  return (
    <div className="flex bg-blue-50">
      <SideNav />
      <div className="w-full">
        <TopNav />
        <section className=" py-20 text-gray-500  ">
          <div className="container px-4 mx-auto bg-white  ">
            <h2 className="text-2xl font-medium  text-gray-600  py-12">
              CREATE BATCH
            </h2>
            <div className=" py-8 flex justify-center items-center -m-3 mb-3  ">
              <div className="w-full md:w-3/4 p-3">
                <div className="p-6 h-full overflow-hidden  rounded-md">
                  <div className="flex flex-wrap pb-3 -m-3">
                    <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-base text-coolGray-800">
                        Batch ID#:
                      </p>
                      <input
                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                        type="number"
                        placeholder="Enter Batch ID"
                      />
                    </div>
                    <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-base text-coolGray-800">
                        Batch Code#:
                      </p>
                      <input
                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                        type="text"
                        placeholder="Enter Batch Code "
                      />
                    </div>
                    <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-base text-coolGray-800">
                        Course
                      </p>
                      <select
                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input bg-white"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          WA
                        </option>
                      </select>
                    </div>

                    <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-base text-coolGray-800">
                        Course Code#:
                      </p>
                      <input
                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                        type="text"
                        placeholder="Enter Course Code  "
                      />
                    </div>

                    <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-base text-coolGray-800">
                        Start Date :
                      </p>
                      <input
                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                        type="Date"
                        placeholder=""
                      />
                    </div>
                    <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-base text-coolGray-800">
                        End Date :
                      </p>
                      <input
                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                        type="Date"
                        placeholder=""
                      />
                    </div>
                    <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-base text-coolGray-800">
                        Start Time:
                      </p>
                      <input
                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                        type="time"
                        placeholder="HH:MM"
                      />
                    </div>

                    <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-base text-coolGray-800">
                        End Time:
                      </p>
                      <input
                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                        type="time"
                        placeholder="HH:MM"
                      />
                    </div>

                    <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-base text-coolGray-800">
                        Batch Limit:
                      </p>
                      <input
                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                        type="number"
                        placeholder="Enter Batch ID"
                      />
                    </div>
                    <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-base text-coolGray-800">
                        Cycle:
                      </p>
                      <select
                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input bg-white"
                        defaultValue="Cycle-1"
                      >
                        <option value="Cycle-1">Cycle-1</option>
                        <option value="Cycle-2">Cycle-2</option>
                        <option value="Cycle-3">Cycle-3</option>
                        <option value="Cycle-4">Cycle-4</option>
                      </select>
                    </div>

                    <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-base text-coolGray-800">
                        Eligible Min Age :
                      </p>
                      <input
                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                        type="number"
                        placeholder="Enter Min Age:"
                      />
                    </div>
                    <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-base text-coolGray-800">
                        Eligible Max Age :
                      </p>
                      <input
                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                        type="number"
                        placeholder="Enter Maximum Age"
                      />
                    </div>

                    <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-base text-coolGray-800">
                        Eligible Qualification:
                      </p>
                      <input
                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                        type="text"
                        placeholder="Enter Qualification  "
                      />
                    </div>

                    <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-base text-coolGray-800">
                        Max Eligible Income:
                      </p>
                      <input
                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                        type="text"
                        placeholder="Enter Maximum Income "
                      />
                    </div>

                    <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-base text-coolGray-800">
                        Gender:
                      </p>
                      <select
                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input bg-white"
                        defaultValue=""
                      >
                        <option value="Cycle-1">Male </option>
                        <option value="Cycle-2">Female</option>
                        <option value="Cycle-3">Both</option>
                        <option value="Cycle-4">other</option>
                      </select>
                    </div>

                    <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-base text-coolGray-800">
                        Batch Status:
                      </p>
                      <select
                        className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input bg-white"
                        defaultValue=""
                      >
                        <option value="Cycle-1">Upcoming </option>
                        <option value="Cycle-2">Ongoing</option>
                        <option value="Cycle-3">Terminated</option>
                        <option value="Cycle-4">Completed</option>
                      </select>
                    </div>
                  </div>

                  <div className="py-3">
                    <div className="w-full">
                      <div className="flex flex-wrap"></div>
                    </div>
                  </div>
                  <div className="py-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <label htmlFor="toggleButton" className="flex">
                          <div className="flex"></div>
                        </label>
                      </div>

                      <div>
                        <div>
                          <button className="flex flex-wrap justify-center w-full md:w-auto md:ml-auto px-4 py-2 bg-dark hover:bg-[#127873] font-medium text-sm text-white border border-green-500 rounded-md shadow-button">
                            <p>Save</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default create_batch;
