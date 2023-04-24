import SideNav from "@/components/SideNav";
import TopNav from "@/components/TopNav";

const create_role = () => {
  return (
    <div className="flex bg-blue-50">
      <SideNav />
      <div className="w-full">
        <TopNav />
        <section className=" py-20 text-gray-500  ">
          <div className="container px-4 mx-auto bg-white  ">
            <h2 className="text-lg font-medium  text-gray-600 text-employer py-12">
              CREATE ROLE
            </h2>
            <div className=" py-8 flex justify-center items-center -m-3 mb-3  ">
              <div className="w-full md:w-3/4 p-3">
                <div className="p-6 h-full overflow-hidden  rounded-md">
                  <div className="flex flex-wrap pb-3 -m-3">
                    <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-smtext-coolGray-800">
                        Title
                      </p>
                      <input
                        className="w-full px-4 py-2.5 text-smtext-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                        type="text"
                        placeholder="Enter Role Title  "
                      />
                    </div>

                    <div className="w-full md:w-1/2 p-3">
                      <p className="mb-1.5 font-medium text-smtext-coolGray-800">
                        Role Type
                      </p>
                      <select
                        className="w-full px-4 py-2.5 text-sm bg-white text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                        defaultValue=""
                      >
                        <option value="staff">Staff</option>
                        <option value="Trainer">Trainer </option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full">
                    <p className="mb-1 text-sm text-coolGray-800 font-semibold">
                      Job Description
                    </p>
                    <textarea
                      className="block w-full h-32 p-4 text-smtext-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input resize-none"
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

export default create_role;
