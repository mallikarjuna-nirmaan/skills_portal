import SideNav from '@/components/SideNav';
import TopNav from '@/components/TopNav';



const create_employee= () => {
 
  return (
    <div className="flex bg-blue-50">
      <SideNav />
      <div className='w-full'>
        <TopNav />
        <section className=" py-20 text-gray-500  ">
  <div className="container px-4 mx-auto bg-white  ">
  <h2 className="text-2xl font-medium  text-gray-600  py-12"> CREATE EMPLOYEE </h2>
    <div className=" py-8 flex justify-center items-center -m-3 mb-3  ">
      <div className="w-full md:w-3/4 p-3">
        <div className="p-6 h-full overflow-hidden  rounded-md">
          <div className="flex flex-wrap pb-3 -m-3">
    
          <div className="w-full md:w-1/2 p-3">
              <p className="mb-1.5 font-medium text-base text-coolGray-800">
                First name
              </p>
              <input
                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                type="text"
                placeholder="Enter First Name"
              />
            </div>
            <div className="w-full md:w-1/2 p-3">
              <p className="mb-1.5 font-medium text-base text-coolGray-800">
                Last name
              </p>
              <input
                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                type="text"
                placeholder="Enter Last Name "
              />
            </div>


            <div className="w-full md:w-1/2 p-3">
              <p className="mb-1.5 font-medium text-base text-coolGray-800">
                Email
              </p>
              <input
                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                type="text"
                placeholder="Email"
              />
            </div>

    

    
 



<div className="w-full md:w-1/2 p-3">
              <p className="mb-1.5 font-medium text-base text-coolGray-800">
                Phone number
              </p>
              <input
                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                type="text"
                placeholder="Phone"
              />
            </div>
           
            <div className="w-full md:w-1/2 p-3">
              <p className="mb-1.5 font-medium text-base text-coolGray-800">
                Password 
              </p>
              <input
                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                type="text"
                placeholder="Enter Password"
              />
            </div>
            <div className="w-full md:w-1/2 p-3">
              <p className="mb-1.5 font-medium text-base text-coolGray-800">
                Experience 
              </p>
              <input
                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                type="number"
                placeholder="Enter Experience"
              />
            </div>
            <div className="w-full md:w-1/2 p-3">
              <p className="mb-1.5 font-medium text-base text-coolGray-800">
                Join Date 
              </p>
              <input
                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                type="Date"
                placeholder=""
              />
            </div>
            <div className="w-full md:w-1/2 p-3">
  <p className="mb-1.5 font-medium text-base text-coolGray-800">
    Role 
  </p>
  <select 
    className="w-full px-4 py-2.5 bg-white text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
    defaultValue="">
    <option value="" disabled>Select a role</option>
    <option value="admin">Admin</option>
    <option value="mobiliser">mobiliser</option>
    <option value="Placement Manager">Placement Manager</option>
    <option value="Counsellor">Counsellor</option>
    <option value="Lab Trainer">Lab Trainer</option>
    <option value="Soft Skills Trainer">Soft Skills Trainer</option>
    <option value="Center Manager">Center Manager</option>
    <option value="Technical Trainer">Technical Trainer</option>
    <option value="Software Developer ">Software Developer</option>
    <option value="Office boy House keeping ">Office boy House keeping </option>
    <option value="Security Guard ">Security Guard</option>
    <option value="Placement Executive ">Placement Executive </option> 
  </select>
</div>

          <div className="w-full md:w-1/2 p-3">
  <p className="mb-1.5 font-medium text-base text-coolGray-800">
  Login Authorization:
  </p>
  <label className="inline-flex items-center">
    <input
      type="checkbox"
      className="form-checkbox h-5 w-5 text-green-500 rounded-sm border-gray-300"
    />
    <span className="ml-2 text-gray-700 font-medium"></span>
  </label>
</div>

          </div>


          


          <div className="py-3">


            <div className="flex justify-between items-center">
                <div>
                     
                <label htmlFor="toggleButton" className="flex">
<div className='flex'>

    </div>
   
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

export default create_employee;
