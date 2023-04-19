import SideNav from "@/components/SideNav";
import TopNav from "@/components/TopNav";

const add_job = () => {
  return (
    <div className="flex bg-blue-50">
      <SideNav />
      <div className="w-full">
        <TopNav />
        <section className=" py-20 text-gray-500  ">
          <div className="container px-4 mx-auto bg-white  ">
            <h2 className="text-lg font-medium  text-gray-600 text-employer py-12">
              ADD JOB POST
            </h2>
            <div className=" py-8 flex justify-center items-center -m-3 mb-3  ">
              <div className="w-full md:w-3/4 p-3">
                <div className="p-6 h-full overflow-hidden  rounded-md">
                  <div className="flex flex-wrap pb-3 -m-3">
                    <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-sm text-coolGray-800">
                        Title: <span className='text-red-600'>*</span>
                      </p>
                      <input
                        className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                        type="text"
                        placeholder="Enter Title "
                      />
                    </div>

                    <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-sm text-coolGray-800">
                        Company: <span className='text-red-600'>*</span>
                      </p>
                      <input
                        className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                        type="text"
                        placeholder="Enter Company "
                      />
                    </div>
                    <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-sm text-coolGray-800">
                        Location: <span className='text-red-600'>*</span>
                      </p>
                      <input
                        className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                        type="text"
                        placeholder="Enter Location "
                      />
                    </div>

                    <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-sm text-coolGray-800">
                        Salary: <span className='text-red-600'>*</span>
                      </p>
                      <input
                        className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                        type="number"
                        placeholder="Enter Salary"
                      />
                    </div>

                    <div className="w-full p-3">
                      <p className="mb-1 text-sm text-coolGray-800 font-semibold">
                        Job Keywords: <span className='text-red-600'>*</span>
                      </p>
                      <textarea
                        className="block w-full h-16 p-4 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input resize-none"
                        defaultValue={""}
                      />
                    </div>
                  </div>

                  <div className="w-full p-3 ">
                    <p className="mb-1 text-sm text-coolGray-800 font-semibold">
                      Job Description: <span className='text-red-600'>*</span>
                    </p>
                    <textarea
                      className="block w-full h-32 p-4 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input resize-none"
                      defaultValue={""}
                    />
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

export default add_job;
