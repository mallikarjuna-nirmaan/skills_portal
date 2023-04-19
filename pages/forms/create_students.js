import React from 'react'
import SideNav from '@/components/SideNav';
import TopNav from '@/components/TopNav';

const create_students = () => {
  return (
    <div className="flex bg-blue-50">
    <SideNav />
    <div className='w-full'>
      <TopNav />
      <section className=" py-20 text-gray-500  ">
<div className="container px-4 mx-auto bg-white  ">
<h2 className="text-lg font-medium  text-gray-600  py-12">CREATE APPLICATION</h2>
  <div className=" py-8 flex justify-center items-center -m-3 mb-3  ">
    <div className="w-full md:w-3/4 p-3">
      <div className="p-6 h-full overflow-hidden  rounded-md">
        <div className="flex flex-wrap pb-3 -m-3">
 
        <div className="w-full  p-3 text-base font-bold ">
          Basic  Details 
        
          </div>      
        <div className="w-full md:w-1/2 p-3">
            <p className="mb-1.5 font-medium text-sm text-coolGray-800">
              First Name 
            </p>
            <input
              className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
              type="text"
              placeholder="Enter First Name"
            />
          </div>
          <div className="w-full md:w-1/2 p-3">
            <p className="mb-1.5 font-medium text-sm text-coolGray-800">
              Last Name 
            </p>
            <input
              className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
              type="text"
              placeholder="Enter Last Name  "
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
    Phone Number
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
      placeholder="Phone Number"
      pattern="[0-9]{10}"
      required
    />
  </div>
</div>


<div className="w-full md:w-1/2 p-3 ">
  <p className="mb-1.5 font-medium text-sm text-coolGray-800">
    WhatsApp Number
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
      placeholder="Alternate Phone"
      pattern="[0-9]{10}"
      required
    />
  </div>
</div>

<div className="w-full md:w-1/2 p-3">
  <p className="mb-1.5 font-medium text-sm text-coolGray-800">Marital Status</p>
  <div className="inline-flex">
    <label htmlFor="single" className="mr-4">
      <input
        type="radio"
        id="single"
        name="marital-status"
        defaultValue="single"
        className="mr-1"
      />
      Single
    </label>
    <label htmlFor="married">
      <input
        type="radio"
        id="married"
        name="marital-status"
        defaultValue="married"
        className="mr-1"
      />
      Married
    </label>
  </div>
</div>



<div className="w-full md:w-1/2 p-3">
<p className="mb-1.5 font-medium text-sm text-coolGray-800">
  Gender
</p>
<select 
  className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input bg-white"
  defaultValue="">
  <option value="Male" >Male</option>
  <option value="Female" >Female</option>
  <option value="Other" >Other</option>
  

</select>
</div>





          <div className="w-full md:w-1/2 p-3">
            <p className="mb-1.5 font-medium text-sm text-coolGray-800">
              Date of Birth
            </p>
            <input
              className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
              type="Date"
              placeholder=""
            />
          </div>



          <div className="w-full  p-3 text-base font-bold ">
          Verification Details 
        
          </div>


<div className="w-full md:w-1/2 p-3">
            <p className="mb-1.5 font-medium text-sm text-coolGray-800">
              Aadhar Number 
            </p>
            <input
              className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
              type="number"
              placeholder="Enter Aadhar Number"
            />
          </div>

          <div className="w-full md:w-1/2 p-3">
<p className="mb-1.5 font-medium text-sm text-coolGray-800">
Aadhar
</p>
<input
className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
type="file"
accept="" 
/>
</div>

          <div className="w-full md:w-1/2 p-3">
<p className="mb-1.5 font-medium text-sm text-coolGray-800">
  ID Proof Type
</p>
<select 
  className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input bg-white"
  defaultValue="">
  <option value="Voter Id" >Voter Id</option>
  <option value="Ration Card" >Ration Card</option>
  <option value="Passport" >Passport</option>
  <option value="Driving License" >Driving License</option>
  

</select>
</div>
          <div className="w-full md:w-1/2 p-3">
            <p className="mb-1.5 font-medium text-sm text-coolGray-800">
              ID Proof Number 
            </p>
            <input
              className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
              type="number"
              placeholder="Enter ID Number "
            />
          </div>
          <div className="w-full md:w-1/2 p-3">
<p className="mb-1.5 font-medium text-sm text-coolGray-800">
  Caste Category
</p>
<select 
  className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input bg-white"
  defaultValue="">
  <option value="ST" >ST</option>
  <option value="SC" >SC</option>
  <option value="OBC" >OBC</option>
  <option value="General" >General</option>
  <option value="Others " >Others </option>
  

</select>
</div>


<div className="w-full md:w-1/2 p-3">
<p className="mb-1.5 font-medium text-sm text-coolGray-800">
  Religion 
</p>
<select 
  className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input bg-white"
  defaultValue="">
  <option value="Hindu" >Hindu</option>
  <option value="Islam" >Islam</option>
  <option value="Christian " >Christian </option>
  <option value="Others" >Others</option>
  

</select>
</div>


          

        
          <div className="w-full  p-3 text-base font-bold ">
          Education Details 
        
          </div>

          <div className="w-full md:w-1/2 p-3">
<p className="mb-1.5 font-medium text-sm text-coolGray-800">
  Qualification
</p>
<select 
  className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input bg-white"
  defaultValue="">
  <option value="B.Tech" >B.Tech</option>
  <option value="M.Tech" >M.Tech</option>
  <option value="B.Sc" > B.Sc</option>
  <option value="BCA" >BCA</option>
  <option value="MCA" >MCA</option>
  <option value="M.Sc " >M.Sc </option>
  <option value="Others" >Others</option>
  
  

</select>
</div>

          <div className="w-full md:w-1/2 p-3">
            <p className="mb-1.5 font-medium text-sm text-coolGray-800">
              Stream
            </p>
            <input
              className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
              type="text"
              placeholder="Ex: EEE,MSCS"
            />
          </div>

          <div className="w-full md:w-1/2 p-3">
<p className="mb-1.5 font-medium text-sm text-coolGray-800">
  Year of passout 
</p>
<select 
  className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input bg-white"
  defaultValue="">
  <option value="2023" >2023</option>
  <option value="2022" >2022</option>
  <option value="2021" > 2021</option>
  <option value="2020" >2020</option>
  <option value="2019" >2019</option>

  
  

</select>
</div>

<div className="w-full md:w-1/2 p-3">
  <p className="mb-1.5 font-medium text-sm text-coolGray-800">10th Pass Out In</p>
  <div className="inline-flex">
    <label htmlFor="single" className="mr-4">
      <input
        type="radio"
        id="single"
        name="marital-status"
        defaultValue="single"
        className="mr-1"
      />
      Government School
    </label>
    <label htmlFor="married">
      <input
        type="radio"
        id="married"
        name="marital-status"
        defaultValue="married"
        className="mr-1"
      />
      Private School
    </label>
  </div>
</div>


          <div className="w-full md:w-1/2 p-3">
            <p className="mb-1.5 font-medium text-sm text-coolGray-800">
              School Name 
            </p>
            <input
              className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
              type="text"
              placeholder="Enter School Name "
            />
          </div>
          <div className="w-full md:w-1/2 p-3">
            <p className="mb-1.5 font-medium text-sm text-coolGray-800">
            Percentage in SSC
            </p>
            <input
              className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
              type="number "
              placeholder="Ex: 70,80,etc"
            />
          </div>

          <div className="w-full md:w-1/2 p-3">
            <p className="mb-1.5 font-medium text-sm text-coolGray-800">
            Percentage in Inter
            </p>
            <input
              className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
              type="number "
              placeholder="Ex: 70,80,etc"
            />
          </div>


          <div className="w-full md:w-1/2 p-3">
            <p className="mb-1.5 font-medium text-sm text-coolGray-800">
            Graduated from which college
            </p>
            <input
              className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
              type="text  "
              placeholder="Enter Graduated College"
            />
          </div>

          <div className="w-full md:w-1/2 p-3">
            <p className="mb-1.5 font-medium text-sm text-coolGray-800">
            Percentage in Graduation
            </p>
            <input
              className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
              type="number "
              placeholder="Ex: 70,80,etc"
            />
          </div>


          <div className="w-full md:w-1/2 p-3">
            <p className="mb-1.5 font-medium text-sm text-coolGray-800">
            College Address
            </p>
            <input
              className="w-full h-20 px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
              type="text "
              placeholder="Enter College Address "
            />
          </div>



          <div className="w-full md:w-1/2 p-3">
<p className="mb-1.5 font-medium text-sm text-coolGray-800">
SSC Certificate
</p>
<input
className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
type="file"
accept="" 
/>
</div>
<div className="w-full md:w-1/2 p-3">
<p className="mb-1.5 font-medium text-sm text-coolGray-800">
Inter Certificate
</p>
<input
className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
type="file"
accept="" 
/>
</div>

<div className="w-full md:w-1/2 p-3">
<p className="mb-1.5 font-medium text-sm text-coolGray-800">
Graduation Cerificate
</p>
<input
className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
type="file"
accept=""
/>
</div>






          <div className="w-full  p-3 text-base font-bold ">
          Location  Details 
        
          </div>

    
          <div className="w-full md:w-1/2 p-3">
            <p className="mb-1.5 font-medium text-sm text-coolGray-800">
            Present Full Address
            </p>
            <input
              className="w-full h-20 px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
              type="text "
              placeholder="Enter Address "
            />
          </div>

          <div className="w-full md:w-1/2 p-3">
            <p className="mb-1.5 font-medium text-sm text-coolGray-800">
            Permanent Full Address
            </p>
            <input
              className="w-full h-20 px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
              type="text "
              placeholder="Enter Permanent Address "
            />
          </div>

          <div className="w-full md:w-1/2 p-3">
            <p className="mb-1.5 font-medium text-sm text-coolGray-800">
            Location 
            </p>
            <input
              className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
              type="text  "
              placeholder="Enter Locaion"
            />
          </div>


          <div className="w-full md:w-1/2 p-3">
            <p className="mb-1.5 font-medium text-sm text-coolGray-800">
            District
            </p>
            <input
              className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
              type="text  "
              placeholder="Enter District"
            />
          </div>




<div className="w-full md:w-1/2 p-3">
<p className="mb-1.5 font-medium text-sm text-coolGray-800">
  State
</p>
<select 
  className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input bg-white"
  defaultValue="">
 <option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
  

</select>
</div>

          <div className="w-full md:w-1/2 p-3">
            <p className="mb-1.5 font-medium text-sm text-coolGray-800">
            Enter Postcode 
            </p>
            <input
              className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
              type="number "
              placeholder="Enter Postcode"
            />
          </div>




          <div className="w-full  p-3 text-base font-bold ">
          Family   Details 
        
          </div>


          <div className="w-full md:w-1/2 p-3">
            <p className="mb-1.5 font-medium text-sm text-coolGray-800">
            Guardian's Name 
            </p>
            <input
              className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
              type="text  "
              placeholder="Enter Guardian's Name "
            />
          </div>



<div className="w-full md:w-1/2 p-3">
<p className="mb-1.5 font-medium text-sm text-coolGray-800">
  Relationship with guardian
</p>
<select 
  className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input bg-white"
  defaultValue="">
  <option value="Father" >Father</option>
  <option value="Mother" >Mother</option>
  <option value="Brother " >Brother </option>
  <option value="Sister" >Sister</option>
  <option value="Wife" >Wife</option>
  <option value="Husband" >Husband</option>
  <option value="Friend " >Friend </option>
  <option value="Other" >Other</option>

</select>
</div>

          <div className="w-full md:w-1/2 p-3">
            <p className="mb-1.5 font-medium text-sm text-coolGray-800">
            Guardian's Profession
            </p>
            <input
              className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
              type="text  "
              placeholder="Enter Guardian's Profession "
            />
          </div>

          <div className="w-full md:w-1/2 p-3">
            <p className="mb-1.5 font-medium text-sm text-coolGray-800">
            Guardian's Phone Number 
            </p>
            <input
              className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
              type="number  "
              placeholder="Enter Guardian's Phone  "
            />
          </div>
          <div className="w-full md:w-1/2 p-3">
<p className="mb-1.5 font-medium text-sm text-coolGray-800">
  Highest educated in family 
</p>
<select 
  className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input bg-white"
  defaultValue="">
  <option value="Self " >Self </option>
  <option value="Father" >Father</option>
  <option value="Mother" >Mother</option>
  <option value="Brother " >Brother </option>
  <option value="Sister" >Sister</option>
  <option value="Wife" >Wife</option>
  <option value="Husband" >Husband</option>
  <option value="Friend " >Friend </option>
  <option value="Other" >Other</option>

</select>
</div>

<div className="w-full md:w-1/2 p-3">
<p className="mb-1.5 font-medium text-sm text-coolGray-800">
  Highest Education Qualification in Family 
</p>
<select 
  className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input bg-white"
  defaultValue="">
  <option value="B.Tech" >B.Tech</option>
  <option value="M.Tech" >M.Tech</option>
  <option value="B.Sc" > B.Sc</option>
  <option value="BCA" >BCA</option>
  <option value="MCA" >MCA</option>
  <option value="M.Sc " >M.Sc </option>
  <option value="Others" >Others</option>
  
  

</select>
</div>
<div className="w-full md:w-1/2 p-3">
<p className="mb-1.5 font-medium text-sm text-coolGray-800">
  Family Annual Income 
</p>
<select 
  className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input bg-white"
  defaultValue="">
  <option value="Below INR 1 lakh" >Below INR 1 lakh</option>
  <option value="INR 1-2 lakhs" >INR 1-2 lakhs</option>
  <option value="INR 2-3 lakhs " > INR 2-3 lakhs </option>
  <option value="INR 3-4 lakhs " >INR 3-4 lakhs </option>
  <option value="INR 4-5 lakhs " >INR 4-5 lakhs </option>
  <option value="INR 5-6 lakhs " >INR 5-6 lakhs </option>
  <option value="INR 6-7 lakhs" >INR 6-7 lakhs</option>
  <option value="Above 7 lakhs " >Above 7 lakhs </option>
  
  

</select>
</div>
          <div className="w-full md:w-1/2 p-3">
            <p className="mb-1.5 font-medium text-sm text-coolGray-800">
            Exact Family Income 
            </p>
            <input
              className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
              type="number  "
              placeholder="Enter Exact Family Income   "
            />
          </div>

          <div className="w-full md:w-1/2 p-3">
            <p className="mb-1.5 font-medium text-sm text-coolGray-800">
          Number of Family Members 
            </p>
            <input
              className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
              type="number  "
              placeholder="Enter  Number of Family Members   "
            />
          </div>

        
        
  

   





          <div className="w-full  p-3 text-base font-bold ">
          Other   Details 
        
          </div>

          <div className="w-full md:w-1/2 p-3">
<p className="mb-1.5 font-medium text-sm text-coolGray-800">
  Course
</p>
<select 
  className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input bg-white"
  defaultValue="">
    <option value="WMA" >WMA-Web Mobile Applications</option>
    <option value="OA" >Office Administration</option>
    <option value="ITES" >ITES-IT Enabled Services </option>
    <option value="CS" >CS- Communication Skills</option>
    <option value="WA" >WA -Web Applications </option>
  

</select>
</div>

<div className="w-full md:w-1/2 p-3">
<p className="mb-1.5 font-medium text-sm text-coolGray-800">
  Center
</p>
<select 
  className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input bg-white"
  defaultValue="">
  <option value="FRYSC -Madhuranagar" >FRYSC -Madhuranagar</option>
  
  

</select>
</div>

<div className="w-full md:w-1/2 p-3">
<p className="mb-1.5 font-medium text-sm text-coolGray-800">
how do you know about this Training? 
</p>
<select 
  className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input bg-white"
  defaultValue="">
    <option value="Pamphlet" >Pamphlet</option>
    <option value="Friend" >Friend</option>
    <option value="Nirmaanites" >Nirmaanites </option>
    <option value="News paper" >News paper</option>
    <option value="Relative" >Relative </option>
    <option value="Poster" >Poster</option>
    <option value="old Student" >old Student</option>
    <option value="Way2News" >Way2News </option>
    <option value="Daily Hunt" >Daily Hunt</option>
    <option value="Tribal Welfare Department" >Tribal Welfare Department</option>
    <option value="Whatsapp" >Whatsapp</option>
    <option value="Facebook" >Facebook</option>
    <option value="Youtube" >Youtube </option>
    <option value="Door to Door " >Door to Door</option>
    <option value="Others" >Others </option>
  
  
  
  

</select>
</div>

<div className="w-full md:w-1/2 p-3">
<p className="mb-1.5 font-medium text-sm text-coolGray-800">
Upload Passport Size Photo
</p>
<input
className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
type="file"
accept=""
/>
</div>

<div className="w-full md:w-1/2 p-3">
  <p className="mb-1.5 font-medium text-sm text-coolGray-800">Do you have a laptop or desktop?</p>
  <div className="inline-flex">
    <label htmlFor="single" className="mr-4">
      <input
        type="radio"
        id="single"
        name="marital-status"
        defaultValue="single"
        className="mr-1"
      />
      Yes
    </label>
    <label htmlFor="married">
      <input
        type="radio"
        id="married"
        name="marital-status"
        defaultValue="married"
        className="mr-1"
      />
      No
    </label>
  </div>
</div>







        </div>


        



        <div className="py-3">
          <div className="w-full">
            <div className="flex flex-wrap">
             
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
  )
}

export default create_students