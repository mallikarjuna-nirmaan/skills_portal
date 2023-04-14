import SideNav from '@/components/SideNav';
import TopNav from '@/components/TopNav';



const training_link= () => {
 
  return (
    <div className="flex bg-blue-50">
      <SideNav />
      <div className='w-full'>
        <TopNav />
        <section className=" py-20 text-gray-500  ">
  <div className="container px-4 mx-auto bg-white  ">
  <h2 className="text-2xl font-medium  text-gray-600  py-12"> ADD TRAINING LINK </h2>
    <div className=" py-8 flex justify-center items-center -m-3 mb-3  ">
      <div className="w-full md:w-3/4 p-3">
        <div className="p-6 h-full overflow-hidden  rounded-md">
          <div className="flex flex-wrap pb-3 -m-3">
   
          <div className="w-full md:w-1/2 p-3">
  <p className="mb-1.5 font-medium text-base text-coolGray-800">
    Year:
  </p>
  <select 
    className="bg-white w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
    defaultValue="">
    
    <option value="" disabled>Nothing selected </option>
   

  </select>
</div>
<div className="w-full md:w-1/2 p-3">
  <p className="  mb-1.5 font-medium text-base text-coolGray-800">
   Batch:
  </p>
  <select 
    className="bg-white w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input"
    defaultValue="">
    
    <option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
<option value="17">17</option>
<option value="18">18</option>
 <option value="19">19</option>
<option value="20">20</option>
<option value="21">21</option>
<option value="22">22</option>
<option value="23">23</option>
<option value="24">24</option>
<option value="25">25</option>
<option value="26">26</option>
<option value="27">27</option>
<option value="28">28</option>
<option value="29">29</option>
<option value="30">30</option>
<option value="31">31</option>
<option value="32">32</option>
<option value="33">33</option>
<option value="34">34</option>
<option value="35">35</option>
<option value="36">36</option>
<option value="37">37</option>
<option value="38">38</option>
<option value="39">39</option>
<option value="40">40</option>
<option value="41">41</option>
<option value="42">42</option>
<option value="43">43</option>
<option value="44">44</option>
<option value="45">1</option>
<option value="46">2</option>
<option value="47">3</option>
<option value="48">4</option>
<option value="49">5</option>
 <option value="50">6</option>
<option value="51">7</option>
<option value="52">8</option>
<option value="53">9</option>
<option value="54">10</option>
<option value="55">11</option>
<option value="56">12</option>
<option value="57">13</option>
<option value="58">14</option>
<option value="59">15</option>
<option value="60">16</option>
    

  </select>
</div>


            
            
                <div className="w-full md:w-1/2 p-3">
                  <p className="mb-1 text-sm text-coolGray-800 font-semibold">
                    Training Link:
                  </p>
                  <textarea
                    className="block w-full h-16 p-4 text-base text-coolGray-900 font-normal outline-none focus:border-blue-500 border border-coolGray-200 rounded-lg shadow-input resize-none"
                    defaultValue={""}
                  />
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

export default training_link;
