import React from 'react'
import Footer from "../components/footer"
import Header from "../components/header"
const application = () => {
  return (
    <>
    <Header/>
    <section className="bg-coolGray-50 py-4 text-gray-500 ">
  <div className="container px-4 mx-auto ">
    <div className="p-6 h-full border border-coolGray-100 overflow-hidden  rounded-md shadow-dashboard">
      <div className="pb-6 border-b border-coolGray-100">
        <div className="flex flex-wrap items-center justify-between -m-2">
          <div className="w-full md:w-auto p-2">
            <h2 className="text-coolGray-900 text-base font-semibold">
            Basic Details 
            </h2>
            <p className="text-xs text-coolGray-500 font-medium">
            
            </p>
          </div>
        
        </div>
      </div>
      <div className="py-6 border-b border-coolGray-100">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <p className="text-xs text-gray-500 font-semibold">
                First Name 
              </p>
            </div>
            <div className="w-full md:flex-1 p-3">
              <input
                className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                type="text"
                placeholder="Enter First NAme "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 border-b border-coolGray-100">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <p className="text-xs text-gray-500 font-semibold">
                Last Name
              </p>
            </div>
            <div className="w-full md:flex-1 p-3">
              <input
                className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                type="text"
                placeholder="Enter Last name "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 border-b border-coolGray-100">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <p className="text-xs text-gray-500 font-semibold">
                Middle Name
              </p>
            </div>
            <div className="w-full md:flex-1 p-3">
              <input
                className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                type="text"
                placeholder="Enter Middle Name "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 border-b border-coolGray-100">
  <div className="w-full md:w-9/12">
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/3 p-3">
        <p className="text-xs text-gray-500 font-semibold">
          Gender
        </p>
      </div>
      <div className="w-full md:flex-1 p-3">
        <select
          className=" bg-white w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
          name="gender"
          id="gender"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="lgbtq+">LGBTQ+</option>
        </select>
      </div>
    </div>
  </div>
</div>

<div className="py-6 border-b border-coolGray-100">
  <div className="w-full md:w-9/12">
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/3 p-3">
        <p className="text-xs text-gray-500 font-semibold">
          Date of Birth
        </p>
      </div>
      <div className="w-full md:flex-1 p-3">
        <input
          className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
          type="date"
          placeholder="YYYY-MM-DD"
        />
      </div>
    </div>
  </div>
</div>


<div className="py-6 border-b border-coolGray-100">
  <div className="w-full md:w-9/12">
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/3 p-3">
        <p className="text-xs text-gray-500 font-semibold">
          Caste Category
        </p>
      </div>
      <div className="w-full md:flex-1 p-3">
        <select
          className="bg-white w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
          name="caste"
          id="caste"
        >
          <option value="">Select Caste Category</option>
          <option value="SC">SC</option>
          <option value="ST">ST</option>
          <option value="OBC">OBC</option>
          <option value="Others">Others</option>
        </select>
      </div>
    </div>
  </div>
</div>



<div className="py-6 border-b border-coolGray-100">
  <div className="w-full md:w-9/12">
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/3 p-3">
        <p className="text-xs text-gray-500 font-semibold">
          Religion 
        </p>
      </div>
      <div className="w-full md:flex-1 p-3">
        <select
          className="bg-white w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
          name="caste"
          id="caste"
        >
          <option value="">Select Religion</option>
          <option value="Hinduism">Hinduism</option>
          <option value="Islam">Islam </option>
          <option value="Christianity">Christianity</option>
          <option value="Sikhism">Sikhism</option>
          <option value="Budhism">Budhism</option>
          <option value="Jainism">Jainism</option>
          <option value="Others">Others</option>
        </select>
      </div>
    </div>
  </div>
</div>




<div className="py-6 border-b border-coolGray-100">
  <div className="w-full md:w-9/12">
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/3 p-3">
        <p className="text-xs text-gray-500 font-semibold">
          Marital Status 
        </p>
      </div>
      <div className="w-full md:flex-1 p-3">
        <select
          className="bg-white w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
          name="caste"
          id="caste"
        >
          <option value="">Select Marital Status</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
          <option value="Others">Others</option>
        </select>
      </div>
    </div>
  </div>
</div>

<div className="py-6 border-b border-coolGray-100">
  <div className="w-full md:w-9/12">
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/3 p-3">
        <p className="text-xs text-gray-500 font-semibold">
          Occupation 
        </p>
      </div>
      <div className="w-full md:flex-1 p-3">
        <select
          className="bg-white w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
          name="occupation"
          id="occupation"
        >
          <option value="">Select Occupation</option>
          <option value="Single">Student</option>
          <option value="Married">Unemployed</option>
          <option value="Divorced">Government Employee</option>
          <option value="Others">Private Employee</option>
          <option value="Single">Retired </option>
          <option value="Married">Home Maker</option>
          <option value="Divorced">Business</option>
          <option value="Others">Labour</option>
        </select>
      </div>
    </div>
  </div>
</div>
<div className="py-6 border-b border-coolGray-100">
  <div className="w-full md:w-9/12">
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/3 p-3">
        <p className="text-xs text-gray-500 font-semibold">
        Are you belonging to orphan/Semi orphan/BPL?
 
        </p>
      </div>
      <div className="w-full md:flex-1 p-3">
        <select
          className="bg-white w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
          name="orphan"
          id="orphan"
        >
          <option value="">Select Answer</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
       
        </select>
      </div>
    </div>
  </div>
</div>

<div className="py-6 border-b border-coolGray-100">
  <div className="w-full md:w-9/12">
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/3 p-3">
        <p className="text-xs text-gray-500 font-semibold">
        Are you physically disabled?

        </p>
      </div>
      <div className="w-full md:flex-1 p-3">
        <select
          className="bg-white w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
          name="disabled"
          id="disabled"
        >
          <option value="">Select Answer</option>
          <option value="Yes">Yes</option>
          <option value="No">no</option>
        </select>
      </div>
    </div>
  </div>
</div>


<div className="py-6 border-b border-coolGray-100">
  <div className="w-full md:w-9/12">
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/3 p-3">
        <p className="text-xs text-gray-500 font-semibold">
          Select Disability 
        </p>
      </div>
      <div className="w-full md:flex-1 p-3">
        <select
          className="bg-white w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
          name="disability select "
          id="disability select"
        >
       <option value="">Select Disability</option>
<option value="Blindness">Blindness</option>
<option value="Low-vision">Low-vision</option>
<option value="Leprosy Cured persons">Leprosy Cured persons</option>
 <option value="Hearing Impairment (deaf and hard of hearing)">Hearing Impairment (deaf and hard of hearing)</option>
<option value="Locomotor Disability">Locomotor Disability</option>
<option value="Dwarfism">Dwarfism</option>
<option value="Intellectual Disability">Intellectual Disability</option>
<option value="Mental Illness">Mental Illness</option>
<option value="Autism Spectrum Disorder">Autism Spectrum Disorder</option>
<option value="Cerebral Palsy">Cerebral Palsy</option>
<option value="Muscular Dystrophy">Muscular Dystrophy</option>
<option value="Chronic Neurological conditions">Chronic Neurological conditions</option>
<option value="Specific Learning Disabilities (Dyslexia)">Specific Learning Disabilities (Dyslexia)</option>
<option value="Multiple Sclerosis">Multiple Sclerosis</option>
<option value="Speech and Language disability">Speech and Language disability</option>
<option value="Thalassemia">Thalassemia</option>
<option value="Hemophilia">Hemophilia</option>
<option value="Sickle Cell disease">Sickle Cell disease</option>
<option value="Multiple Disabilities including deaf-blindness">Multiple Disabilities including deaf-blindness</option>
<option value="Acid Attack victim">Acid Attack victim</option>
<option value="Parkinson's disease">Parkinson's disease</option>
<option value="N/A">N/A</option>
        </select>
      </div>
    </div>
  </div>
</div>


<div className="py-6 border-b border-coolGray-100">
  <div className="w-full md:w-9/12">
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/3 p-3">
        <p className="text-xs text-gray-500 font-semibold">
          Languages Known 
        </p>
      </div>
      <div className="w-full md:flex-1 p-3">
        <select
          className="bg-white w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
          name="Languages"
          id="Languages"
        >
       <option value="">Select Known Languages</option>
<option value="Telugu Only">Telugu Only</option>
<option value="Hindi Only">Hindi Only</option>
<option value="Telugu &amp; Hindi">Telugu &amp; Hindi</option>
<option value="Telugu &amp; English">Telugu &amp; English</option>
<option value="Hindi &amp; English">Hindi &amp; English</option>
<option value="Telugu, Hindi &amp; English">Telugu, Hindi &amp; English</option>
<option value="Telugu, Hindi, English and Other Languages">Telugu, Hindi, English and Other Languages</option>
<option value="Telugu and Other Languages">Telugu and Other Languages</option>
<option value="Hindi and Other Languages">Hindi and Other Languages</option>
 <option value="English and Other Languages">English and Other Languages</option>
<option value="More than 3 Languages">More than 3 Languages</option>
<option value="More than 4 Languages">More than 4 Languages</option>
<option value="Can't Speak">Can't Speak</option>
<option value="Not Listed">Not Listed</option>
        </select>
      </div>
    </div>
  </div>
</div>



  








   




 

<div className="py-6 border-b border-coolGray-100">
  <div className="w-full md:w-9/12">
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/3 p-3">
        <p className="text-xs text-gray-500 font-semibold">
          Upload Photograph
        </p>
      </div>
      <div className="w-full md:flex-1 p-3">
        <input
          className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
          type="file"
          accept="image/*" // Optional: limit file types to images only
        />
      </div>
    </div>
  </div>
</div>

    </div>


    <div className="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
      <div className="pb-6 border-b border-coolGray-100">
        <div className="flex flex-wrap items-center justify-between -m-2">
          <div className="w-full md:w-auto p-2">
            <h2 className="text-coolGray-900 text-base font-semibold">
            Verification Details 
            </h2>
            <p className="text-xs text-coolGray-500 font-medium">
            
            </p>
          </div>
       
        </div>
      </div>
      <div className="py-6 border-b border-coolGray-100">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <p className="text-xs text-gray-500 font-semibold">
                Aadhaar Number:
              </p>
            </div>
            <div className="w-full md:flex-1 p-3">
              <input
                className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                type="number"
                placeholder="Enter Aadhaar Number  "
              />
            </div>
          </div>
        </div>
      </div>


      <div className="py-6 border-b border-coolGray-100">
  <div className="w-full md:w-9/12">
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/3 p-3">
        <p className="text-xs text-gray-500 font-semibold">
          Upload Aadhar Card:
        </p>
      </div>
      <div className="w-full md:flex-1 p-3">
        <input
          className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
          type="file"
          accept="image/*" // Optional: limit file types to images only
        />
      </div>
    </div>
  </div>
</div>

<div className="py-6 border-b border-coolGray-100">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <p className="text-xs text-gray-500 font-semibold">
                PAN Number:
              </p>
            </div>
            <div className="w-full md:flex-1 p-3">
              <input
                className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                type="number"
                placeholder="Enter PAN Number  "
              />
            </div>
          </div>
        </div>
      </div>


      <div className="py-6 border-b border-coolGray-100">
  <div className="w-full md:w-9/12">
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/3 p-3">
        <p className="text-xs text-gray-500 font-semibold">
          Upload PAN Card:
        </p>
      </div>
      <div className="w-full md:flex-1 p-3">
        <input
          className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
          type="file"
          accept="image/*" // Optional: limit file types to images only
        />
      </div>
    </div>
  </div>

</div>


<div className="py-6 border-b border-coolGray-100">
  <div className="w-full md:w-9/12">
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/3 p-3">
        <p className="text-xs text-gray-500 font-semibold">
          Other ID Proof Type:
        </p>
      </div>
      <div className="w-full md:flex-1 p-3">
        <select
          className="bg-white w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
          name=""
          id=""
        >
      
          <option value="Voter ID ">Voter ID </option>
          <option value="Passport">Passport </option>
          <option value="Marks Card ">Marks Card </option>
        
        </select>
      </div>
    </div>
  </div>
</div>

    <div className="py-6 border-b border-coolGray-100">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <p className="text-xs text-gray-500 font-semibold">
                Other  ID Proof  Number:
              </p>
            </div>
            <div className="w-full md:flex-1 p-3">
              <input
                className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                type="number"
                placeholder="Enter ID Number  "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 border-b border-coolGray-100">
  <div className="w-full md:w-9/12">
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/3 p-3">
        <p className="text-xs text-gray-500 font-semibold">
          Upload Other Proof:
        </p>
      </div>
      <div className="w-full md:flex-1 p-3">
        <input
          className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
          type="file"
          accept="image/*" // Optional: limit file types to images only
        />
      </div>
    </div>
  </div>
</div>



    </div>





    <div className="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
      <div className="pb-6 border-b border-coolGray-100">
        <div className="flex flex-wrap items-center justify-between -m-2">
          <div className="w-full md:w-auto p-2">
            <h2 className="text-coolGray-900 text-base font-semibold">
            Contact Details 
            </h2>
            <p className="text-xs text-coolGray-500 font-medium">
            
            </p>
          </div>
       
        </div>
      </div>
      <div className="py-6 border-b border-coolGray-100">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <p className="text-xs text-gray-500 font-semibold">
                Mobile :
              </p>
            </div>
            <div className="w-full md:flex-1 p-3">
              <input
                className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                type="number"
                placeholder="Enter Phone Number  "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 border-b border-coolGray-100">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <p className="text-xs text-gray-500 font-semibold">
                Email:
              </p>
            </div>
            <div className="w-full md:flex-1 p-3">
              <input
                className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                type="text "
                placeholder="Enter Email Address  "
              />
            </div>
          </div>
        </div>
      </div>


      <div className="py-6 border-b border-coolGray-100">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <p className="text-xs text-gray-500 font-semibold">
                Adress :
              </p>
            </div>
            <div className="w-full md:flex-1 p-3">
              <input
                className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input h-24 "
                type="text"
                placeholder="  "
              />
            </div>
          </div>
        </div>
      </div>



      <div className="py-6 border-b border-coolGray-100">
  <div className="w-full md:w-9/12">
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/3 p-3">
        <p className="text-xs text-gray-500 font-semibold">
          State:
        </p>
      </div>
      <div className="w-full md:flex-1 p-3">
        <select
          className="bg-white w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
          name=""
          id=""
        >
      
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
    </div>
  </div>
</div>

<div className="py-6 border-b border-coolGray-100">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <p className="text-xs text-gray-500 font-semibold">
                District :
              </p>
            </div>
            <div className="w-full md:flex-1 p-3">
              <input
                className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                type="text "
                placeholder="Enter District "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 border-b border-coolGray-100">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <p className="text-xs text-gray-500 font-semibold">
                Postcode:
              </p>
            </div>
            <div className="w-full md:flex-1 p-3">
              <input
                className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                type="number "
                placeholder="Enter Postcode  "
              />
            </div>
          </div>
        </div>
      </div>
    








    </div>


    <div className="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
      <div className="pb-6 border-b border-coolGray-100">
        <div className="flex flex-wrap items-center justify-between -m-2">
          <div className="w-full md:w-auto p-2">
            <h2 className="text-coolGray-900 text-base font-semibold">
            Educational Details 
            </h2>
            <p className="text-xs text-coolGray-500 font-medium">
            
            </p>
          </div>
       
        </div>
      </div>
      <div className="py-6 border-b border-coolGray-100">
  <div className="w-full md:w-9/12">
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/3 p-3">
        <p className="text-xs text-gray-500 font-semibold">
          Education Qualification:
        </p>
      </div>
      <div className="w-full md:flex-1 p-3">
        <select
          className="bg-white w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
          name=""
          id=""
        >
      
      <option value="Below 10th">Below 10th</option>
<option value="10th">10th</option>
<option value="Intermediate">Intermediate</option>
<option value="Diploma">Diploma</option>
<option value="BTech">BTech</option>
<option value="MTech">MTech</option>
<option value="MSc">MSc</option>
<option value="MBA">MBA</option>
<option value="MCA">MCA</option>
<option value="BA">BA</option>
<option value="BCom">BCom</option>
<option value="BSc">BSc</option>
<option value="Bachelor's Degree">Bachelor's Degree</option>
<option value="Master's Degree">Master's Degree</option>
<option value="Honour's Degree">Honour's Degree</option>
<option value="Doctoral Degree">Doctoral Degree</option>
<option value="other">other</option>
        
        </select>
      </div>
    </div>
  </div>
</div>
      




      <div className="py-6 border-b border-coolGray-100">
  <div className="w-full md:w-9/12">
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/3 p-3">
        <p className="text-xs text-gray-500 font-semibold">
          Education Status:
        </p>
      </div>
      <div className="w-full md:flex-1 p-3">
        <select
          className="bg-white w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
          name=""
          id=""
        >
      
      <option value="Pass">Pass</option>
<option value="Fail">Fail</option>
<option value="Discontinued">Discontinued</option>
<option value="Pursuing">Pursuing</option>

        
        </select>
      </div>
    </div>
  </div>
</div>

<div className="py-6 border-b border-coolGray-100">
  <div className="w-full md:w-9/12">
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/3 p-3">
        <p className="text-xs text-gray-500 font-semibold">
          Year of Passing :
        </p>
      </div>
      <div className="w-full md:flex-1 p-3">
        <select
          className="bg-white w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
          name=""
          id=""
        >
      
      <option value="2023">2023</option>
<option value="2022">2022</option>
<option value="2021">2021</option>
<option value="2020">2020</option>
<option value="2019">2019</option>

        
        </select>
      </div>
    </div>
  </div>
</div>

  

<div className="py-6 border-b border-coolGray-100">
  <div className="w-full md:w-9/12">
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/3 p-3">
        <p className="text-xs text-gray-500 font-semibold">
          Upload Proof of Education:
        </p>
      </div>
      <div className="w-full md:flex-1 p-3">
        <input
          className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
          type="file"
          accept="" // Optional: limit file types to images only
        />
      </div>
    </div>
  </div>
</div>






    </div>


    <div className="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
      <div className="pb-6 border-b border-coolGray-100">
        <div className="flex flex-wrap items-center justify-between -m-2">
          <div className="w-full md:w-auto p-2">
            <h2 className="text-coolGray-900 text-base font-semibold">
            Family Details 
            </h2>
            <p className="text-xs text-coolGray-500 font-medium">
            
            </p>
          </div>
      
        </div>
      </div>
      <div className="py-6 border-b border-coolGray-100">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <p className="text-xs text-gray-500 font-semibold">
             Guardian's First Name: 
              </p>
            </div>
            <div className="w-full md:flex-1 p-3">
              <input
                className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                type="number"
                placeholder="Enter Guardian's First Name "
              />
            </div>
          </div>
        </div>
      </div>


      <div className="py-6 border-b border-coolGray-100">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <p className="text-xs text-gray-500 font-semibold">
             Guardian's Last Name: 
              </p>
            </div>
            <div className="w-full md:flex-1 p-3">
              <input
                className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                type="text"
                placeholder="Enter Guardian's Last Name "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 border-b border-coolGray-100">
  <div className="w-full md:w-9/12">
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/3 p-3">
        <p className="text-xs text-gray-500 font-semibold">
          Relationship With Guardian:
        </p>
      </div>
      <div className="w-full md:flex-1 p-3">
        <select
          className="bg-white w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
          name=""
          id=""
        >
      
      <option value="Father">Father</option>
<option value="Mother ">Mother</option>
<option value="Brother ">Brother</option>
<option value="Sister">Sister</option>
<option value="Wife">Wife</option>
<option value="Husband">Husband</option>
<option value="Friend">Friend</option>
<option value="Other">Other</option>

        
        </select>
      </div>
    </div>
  </div>
</div>


<div className="py-6 border-b border-coolGray-100">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <p className="text-xs text-gray-500 font-semibold">
             Guardian's Profession: 
              </p>
            </div>
            <div className="w-full md:flex-1 p-3">
              <input
                className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                type="text"
                placeholder="Enter Guardian's Profession"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 border-b border-coolGray-100">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <p className="text-xs text-gray-500 font-semibold">
             Guardian's Phone Number: 
              </p>
            </div>
            <div className="w-full md:flex-1 p-3">
              <input
                className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                type="text"
                placeholder="Enter Guardian's Phone Number"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 border-b border-coolGray-100">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <p className="text-xs text-gray-500 font-semibold">
             Number of Family Members: 
              </p>
            </div>
            <div className="w-full md:flex-1 p-3">
              <input
                className="w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                type="number"
                placeholder="Enter Number of Family Members"
              />
            </div>
          </div>
        </div>
      </div>


      <div className="py-6 border-b border-coolGray-100">
  <div className="w-full md:w-9/12">
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/3 p-3">
        <p className="text-xs text-gray-500 font-semibold">
         Family Annual Income:
        </p>
      </div>
      <div className="w-full md:flex-1 p-3">
        <select
          className="bg-white w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
          name=""
          id=""
        >
      <option value=""> Select Annual Income  </option>
      <option value="<2 Lakhs"> Under 2 Lakhs </option>
<option value="2-5 Lakhs">2-5 Lakhs</option>
<option value="5-7 Lakhs">5-7 Lakhs</option>
<option value=">7 Lakhs">Above 7 Lakhs</option>
        
        </select>
      </div>
    </div>
  </div>
</div>




<div className="py-6 border-b border-coolGray-100">
  <div className="w-full md:w-9/12">
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/3 p-3">
        <p className="text-xs text-gray-500 font-semibold">
          Highest Educated in Family:
        </p>
      </div>
      <div className="w-full md:flex-1 p-3">
        <select
          className="bg-white w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
          name=""
          id=""
        >
          <option value="Select">Select</option>
          <option value="Self">Self</option>
        <option value="Father">Father</option>
<option value="Mother ">Mother</option>
<option value="Brother ">Brother</option>
<option value="Sister">Sister</option>
<option value="Wife">Wife</option>
<option value="Husband">Husband</option>
<option value="Friend">Friend</option>
<option value="Other">Other</option>

      
        
        </select>
      </div>
    </div>
  </div>
</div>





<div className="py-6 border-b border-coolGray-100">
  <div className="w-full md:w-9/12">
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/3 p-3">
        <p className="text-xs text-gray-500 font-semibold">
          Highest Education Qualfication in Family:
        </p>
      </div>
      <div className="w-full md:flex-1 p-3">
        <select
          className="bg-white w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
          name=""
          id=""
        >
      
<option value="">Select </option>
<option value="B.Tech">B.Tech</option>
<option value="M.Tech">M.Tech</option>
<option value="B.Sc">B.Sc</option>
<option value="BCA">BCA</option>
<option value="MCA">MCA</option>
<option value="M.Sc">M.Sc</option>
<option value="Others ">Others</option>
     
     </select>
      </div>
    </div>
  </div>
</div>














    </div>

    <div className="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
      <div className="pb-6 border-b border-coolGray-100">
        <div className="flex flex-wrap items-center justify-between -m-2">
          <div className="w-full md:w-auto p-2">
            <h2 className="text-coolGray-900 text-base font-semibold">
            Family Details 
            </h2>
            <p className="text-xs text-coolGray-500 font-medium">
            
            </p>
          </div>
         
        </div>
      </div>
      

      <div className="py-6 border-b border-coolGray-100">
  <div className="w-full md:w-9/12">
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/3 p-3">
        <p className="text-xs text-gray-500 font-semibold">
          How do you know about this training :
        </p>
      </div>
      <div className="w-full md:flex-1 p-3">
        <select
          className="bg-white w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
          name=""
          id=""
        >
      
      <option value="Ex Student">Ex Student</option>
<option value="Sign Board">Sign Board</option>
<option value="Mobilizer">Mobilizer</option>
<option value="Staff Members">Staff Members </option>
<option value="Volunteers">Volunteers</option>
<option value="Campagning Drive">Campagning Drive</option>
<option value="Pamphlet">Pamphlet</option>
<option value="Wall Poster">Wall Poster</option>

<option value="Other Branch">Other Branch</option>
<option value="Nirmaan Team ">Nirmaan Team</option>
<option value="Brother ">Demo Session</option>
<option value="Demo Session">Community Members </option>
<option value="School Orientation">School Orientation</option>
<option value="College Orientation">College Orientation</option>
<option value="TV">TV</option>
<option value="Radio">Radio</option>
<option value="Other">Other</option>


        
        </select>
      </div>
    </div>
  </div>
</div>

<div className="py-6 border-b border-coolGray-100">
  <div className="w-full md:w-9/12">
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/3 p-3">
        <p className="text-xs text-gray-500 font-semibold">
          How do you rate your technical skills :
        </p>
      </div>
      <div className="w-full md:flex-1 p-3">
        <select
          className="bg-white w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
          name=""
          id=""
        >
      <option value="">Select level</option>
      <option value="Beginner">Beginner</option>
<option value="Moderate ">Moderate</option>
<option value="Brother ">Brother</option>
<option value="Advanced">Advanced</option>
<option value="None">None</option>


        
        </select>
      </div>
    </div>
  </div>
</div>


<div className="py-6 border-b border-coolGray-100">
  <div className="w-full md:w-9/12">
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/3 p-3">
        <p className="text-xs text-gray-500 font-semibold">
          Course:
        </p>
      </div>
      <div className="w-full md:flex-1 p-3">
        <select
          className="bg-white w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
          name=""
          id=""
        >
      <option value="WMA">WMA- Web Mobile Applications</option>
      <option value="OA">OA- Office Administration</option>
<option value="ITES">ITES- IT Enabled Services</option>
<option value="CS ">CS- Communication Skills</option>
<option value="WA">WA-Web Applications</option>
<option value="Wife">Wife</option>


        
        </select>
      </div>
    </div>
  </div>
</div>




<div className="py-6 border-b border-coolGray-100">
  <div className="w-full md:w-9/12">
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/3 p-3">
        <p className="text-xs text-gray-500 font-semibold">
          Preferred Mode of Training:
        </p>
      </div>
      <div className="w-full md:flex-1 p-3">
        <select
          className="bg-white w-full px-4 py-2.5 text-sm text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
          name=""
          id=""
        >
      <option value="">Select Preferred Mode </option>
      <option value="Physical">Physical</option>
<option value="Virtual ">Virtual</option>
<option value="Self  ">Self </option>

        
        </select>
      </div>
    </div>
  </div>
</div>
<div className="w-full md:w-auto p-2">
            <div className="flex flex-wrap justify-between -m-1.5">
              <div className="w-full md:w-auto p-1.5">
            
              </div>
              <div className="w-full md:w-auto p-1.5">
                <button className="flex flex-wrap justify-center w-full px-4 py-2 bg-green-500 hover:bg-green-600 font-medium text-xs text-white border border-green-500 rounded-md shadow-button">
                  <p>Register</p>
                </button>
              </div>
            </div>
          </div>

    

























    </div>
  </div>
</section>

    <Footer/>
    
    </>
  )
}

export default application