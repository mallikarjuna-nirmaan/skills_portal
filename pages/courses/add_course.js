import SideNav from "@/components/SideNav";
import TopNav from "@/components/TopNav";
import { BsArrowLeftShort } from "react-icons/bs";

const add_course = () => {
  return (
    <div className="flex bg-[#eef0f8]">
      <SideNav />
      <div className="w-full">
        <TopNav />
        <section className="py-6 text-gray-500">
          <div className="h-14 flex justify-between container w-[95%] mx-auto">
            <p className="text-lg font-medium text-gray-800">Create Course</p>
            <button className="bg-[#e1f0ff] hover:bg-[#609cff] hover:text-white duration-100 text-[#609cff] text-base font-semibold w-40 ml-2 py-1 flex h-9 mr-3 rounded-md">
              <BsArrowLeftShort className="text-xl my-1 ml-1.5 font-semibold" />
              Back To Courses
            </button>
          </div>
          <div className="container w-[95%] px-4 mx-auto bg-white">
            <h2 className="text-lg font-medium text-gray-600 mx-4 py-4">
              ADD COURSE
            </h2>
            <hr/>
            <div className=" py-3 flex justify-center items-center -m-3 mb-3  ">
              <div className="w-full md:w-3/4 p-3">
                <div className="p-5 h-full overflow-hidden  rounded-md">
                  <div className="flex flex-wrap pb-3 -m-3">
                    <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-sm text-coolGray-800">
                        Name: <span className="text-red-600">*</span>
                      </p>
                      <input
                        className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                        type="text"
                        placeholder="Enter Name "
                      />
                    </div>
                    <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-sm text-coolGray-800">
                        Full Name: <span className="text-red-600">*</span>
                      </p>
                      <input
                        className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                        type="text"
                        placeholder="Enter full Name "
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="w-full">
                      <div className="flex flex-wrap"></div>
                    </div>
                  </div>
                  <div className="py-3">
                    <div className="w-full">
                      <div className="flex flex-wrap">
                        <div className="w-full">
                          <p className="mb-1 text-sm text-coolGray-800 font-semibold">
                            Description: <span className="text-red-600">*</span>
                          </p>
                          <textarea
                            className="block w-full h-32 p-4 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input resize-none"
                            defaultValue={""}
                          />
                        </div>
                      </div>
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
                        <button className="flex flex-wrap justify-center w-full md:w-auto md:ml-auto px-5 py-2 bg-dark hover:bg-[#127873] font-medium text-sm text-white border border-green-300 rounded-md shadow-button">
                          <p>Save</p>
                        </button>
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

export default add_course;
