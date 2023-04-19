import SideNav from '@/components/SideNav';
import TopNav from '@/components/TopNav';



const create_employee= () => {
 
  return (
    <div className="flex bg-blue-50 ">
      <SideNav />
      <div className='w-full '>
        <TopNav />
        <section className=" py-20 text-gray-500  ">
  <div className="container px-4 mx-auto bg-white  ">
  <h2 className="text-lg font-medium  text-gray-600  py-12"> CREATE EMPLOYEE </h2>
    <div className="  flex justify-center items-center -m-3 mb-3  ">
      <div className="w-full md:w-3/4 ">
        <div className="p-6 h-full overflow-hidden rounded-md">
          <div className="flex flex-wrap pb-3 -m-3">
    
          <div className="w-full md:w-1/2 p-3 ">
              <p className="mb-1.5 font-medium text-sm text-coolGray-800">
                First name
              </p>
              <input
                className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                type="text"
                placeholder="Enter First Name"
              />
            </div>
            <div className="w-full md:w-1/2 p-3">
              <p className="mb-1.5 font-medium text-sm text-coolGray-800">
                Last name
              </p>
              <input
                className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                type="text"
                placeholder="Enter Last Name "
              />
            </div>


            <div className="w-full md:w-1/2 p-3">
  <p className="mb-1.5 font-medium text-sm text-coolGray-800">
    Email
  </p>
  <div className="relative">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
      <svg className="h-5 w-5 text-coolGray-400" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.3333 15.8333V4.16667C18.3333 3.42403 17.8593 2.71664 17.0711 2.45655C16.2829 2.19646 15.4149 2.42171 14.8417 3.0544L10 8.33333L5.15833 3.0544C4.58511 2.42171 3.71711 2.19646 2.92893 2.45655C2.14074 2.71664 1.66667 3.42403 1.66667 4.16667V15.8333C1.66667 16.575 2.14074 17.2824 2.92893 17.5424C3.71711 17.8025 4.58511 17.5773 5.15833 16.9446L10 11.6667L14.8417 16.9446C15.4149 17.5773 16.2829 17.8025 17.0711 17.5424C17.8593 17.2824 18.3333 16.575 18.3333 15.8333Z" fill="currentColor"/>
      </svg>
    </span>
    <input
      className="w-full px-10 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
      type="email"
      placeholder="Email"
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
      required
    />
    <span className="absolute inset-y-0 right-0 flex items-center pr-3">
      @
    </span>
  </div>
</div>


    

    
 



<div className="w-full md:w-1/2 p-3 ">
  <p className="mb-1.5 font-medium text-sm text-coolGray-800">
    Phone number
  </p>
  <div className="relative">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
      <svg className="h-5 w-5 text-coolGray-400" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.8333 13.3333V6.66667C15.8333 5.84943 15.508 5.06627 14.9239 4.48216C14.3398 3.89805 13.5566 3.57275 12.7394 3.57275H7.26061C6.44344 3.57275 5.66028 3.89805 5.07617 4.48216C4.49206 5.06627 4.16667 5.84943 4.16667 6.66667V13.3333C4.16667 14.1506 4.49206 14.9338 5.07617 15.5179C5.66028 16.102 6.44344 16.4274 7.26061 16.4274H12.7394C13.5566 16.4274 14.3398 16.102 14.9239 15.5179C15.508 14.9338 15.8333 14.1506 15.8333 13.3333ZM10 1.66667C11.8257 1.66667 13.5083 2.41631 14.7181 3.62611C15.9279 4.83591 16.6775 6.51852 16.6775 8.33333C16.6775 10.1491 15.9279 11.8317 14.7181 13.0415C13.5083 14.2513 11.8257 15 10 15C8.17428 15 6.49167 14.2513 5.28187 13.0415C4.07207 11.8317 3.32242 10.1491 3.32242 8.33333C3.32242 6.51852 4.07207 4.83591 5.28187 3.62611C6.49167 2.41631 8.17428 1.66667 10 1.66667Z" fill="currentcolor"/>
      </svg>
    </span>
    <input
      className="w-full px-10 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
      type="tel"
      placeholder="Phone number"
      pattern="[0-9]{10}"
      required
    />
  </div>
</div>

            <div className="w-full md:w-1/2 p-3">
              <p className="mb-1.5 font-medium text-sm text-coolGray-800">
                Password 
              </p>
              <input
                className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                type="text"
                placeholder="Enter Password"
              />
            </div>
            <div className="w-full md:w-1/2 p-3">
              <p className="mb-1.5 font-medium text-sm text-coolGray-800">
                Experience 
              </p>
              <input
                className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                type="number"
                placeholder="Enter Experience"
              />
            </div>
            <div className="w-full md:w-1/2 p-3">
              <p className="mb-1.5 font-medium text-sm text-coolGray-800">
                Join Date 
              </p>
              <input
                className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
                type="Date"
                placeholder=""
              />
            </div>
            <div className="w-full md:w-1/2 p-3">
  <p className="mb-1.5 font-medium text-sm text-coolGray-800">
    Role 
  </p>
  <select 
    className="w-full px-4 py-2.5 bg-white text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
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

          <div className="w-full md:w-1/2 p-3 flex">
  <p className="mb-1.5 font-medium text-sm text-coolGray-800">
  Login Authorization
  </p>
  <label className="inline-flex items-center px-4">
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
