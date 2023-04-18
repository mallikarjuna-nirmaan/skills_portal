import SideNav from '@/components/SideNav';
import TopNav from '@/components/TopNav';



const add_course = () => {
 
  return (
    <div className="flex bg-blue-50">
      <SideNav />
      <div className='w-full'>
        <TopNav />
        <section className=" py-20 text-gray-500  ">
  <div className="container px-4 mx-auto bg-white  ">
  <h2 className="text-lg font-medium  text-gray-600  py-12">ADD COURSE</h2>
    <div className=" py-8 flex justify-center items-center -m-3 mb-3  ">
      <div className="w-full md:w-3/4 p-3">
        <div className="p-6 h-full overflow-hidden  rounded-md">
          <div className="flex flex-wrap pb-3 -m-3">
          <div className="w-full md:w-1/2 p-3">
       
       <p className="mb-1.5 font-medium text-sm text-coolGray-800">
         Name
       </p>
       <input
         className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
         type="text"
         placeholder="Enter Name "
       />
     </div>
     <div className="w-full md:w-1/2 p-3">
       <p className="mb-1.5 font-medium text-sm text-coolGray-800">
         Full Name
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
              <div className="flex flex-wrap">
              </div>
            </div>
          </div>
          <div className="py-3">
            <div className="w-full">
              <div className="flex flex-wrap">
               
                <div className="w-full">
                  <p className="mb-1 text-sm text-coolGray-800 font-semibold">
                    Description
                  </p>
                  <textarea
                    className="block w-full h-32 p-4 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input resize-none"
                    defaultValue={""}
                  />
                </div>
              </div>
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

export default add_course;
