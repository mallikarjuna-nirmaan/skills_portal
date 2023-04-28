import React from 'react'

import Footer from "../components/footer"
import Header from "../components/Header"

const contact = () => {
  return (
    <div>
        <Header/>
<section className="py-10 bg-gray-50 overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="py-16 px-8 bg-white overflow-hidden rounded-3xl">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 md:max-w-md mx-auto text-center">
          <span className="inline-block mb-4 text-sm text-blue-500 font-bold uppercase tracking-widest">
            GET IN TOUCH
          </span>
          <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">
            Contact US{" "}
          </h2>
          <p className="text-gray-500 font-bold">
            If you have any enquiries, suggestions please feel free to contact
            us at any time by the following ways.
          </p>
        </div>
        <form className="p-10 bg-gray-100 border border-gray-100 rounded-3xl">
          <div className="flex flex-wrap -m-5 mb-1">
            <div className="w-full md:w-1/2 p-5">
              <label
                className="block mb-2 text-sm text-gray-500 font-bold"
                htmlFor="contactLightReverseInput2-1"
              >
                Full Name
              </label>
              <input
                className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-white placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-full"
                id="contactLightReverseInput2-1"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="w-full md:w-1/2 p-5">
              <label
                className="block mb-2 text-sm text-gray-500 font-bold"
                htmlFor="contactLightReverseInput2-2"
              >
                Emaill address
              </label>
              <input
                className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-white placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-full"
                id="contactLightReverseInput2-2"
                type="text"
                placeholder="Email address"
              />
            </div>
          </div>
          <div className="flex flex-wrap -m-5">
            <div className="w-full md:w-1/2 p-5">
              <label
                className="block mb-2 text-sm text-gray-500 font-bold"
                htmlFor="contactLightReverseInput2-3"
              >
                Phone
              </label>
              <input
                className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-white placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-full"
                id="contactLightReverseInput2-3"
                type="text"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="w-full md:w-1/2 p-5">
              <label
                className="block mb-2 text-sm text-gray-500 font-bold"
                htmlFor="contactLightReverseInput2-4"
              >
                Subject
              </label>
              <input
                className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-white placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-full"
                id="contactLightReverseInput2-4"
                type="text"
                placeholder="Type your subject"
              />
            </div>
          </div>
          <div className="flex flex-wrap -m-3.5">
            <div className="w-full p-3.5">
              <label
                className="block mb-2 text-sm text-gray-500 font-bold"
                htmlFor="contactLightReverseInput2-5"
              >
                Message
              </label>
              <textarea
                className="appearance-none px-6 py-5 w-full text-lg text-gray-500 font-bold bg-white placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-3xl"
                id="contactLightReverseInput2-5"
                type="text"
                rows={8}
                placeholder="Enter your message"
                defaultValue={""}
              />
            </div>
            <div className="w-full p-3.5">
              <div className="flex flex-wrap items-center -m-2">
                <div className="w-full md:w-1/2 p-2">
                  <div className="flex">
                  
                    <label
                      className="text-sm text-gray-500 font-bold"
                      htmlFor="contactLightReverseCheckbox2-1"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-2">
                  <div className="flex flex-wrap md:justify-end -m-2">
                    <div className="w-full md:w-auto p-2">
                      <a
                        className="block w-full px-8 md:px-16 py-3.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                        href="#"
                      >
                        Send Message
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="flex flex-wrap -m-4">
          <div className="w-full md:w-1/3 p-4">
            <div className="p-10 text-center h-full rounded-3xl">
              <div className="flex items-center justify-center mb-6 w-12 h-12 mx-auto bg-gray-100 rounded-xl">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3144C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3146 13.9828 15.4995 13.9955 15.7925C13.9985 15.862 14 15.9314 14 16Z"
                    fill="#3B82F6"
                  />
                  <path
                    d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                    fill="#3B82F6"
                  />
                  <path
                    d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15V15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6875 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0977C20.9863 12.1818 22 13.9755 22 16Z"
                    fill="#3B82F6"
                  />
                </svg>
              </div>
              <h3 className="font-heading mb-2 text-xl text-gray-900 font-black">
                Send Email
              </h3>
              <p className="text-gray-500 font-bold">marketing@nirmaan.org</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="p-10 text-center h-full rounded-3xl">
              <div className="flex items-center justify-center mb-6 w-12 h-12 mx-auto bg-gray-100 rounded-xl">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3144C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3146 13.9828 15.4995 13.9955 15.7925C13.9985 15.862 14 15.9314 14 16Z"
                    fill="#3B82F6"
                  />
                  <path
                    d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                    fill="#3B82F6"
                  />
                  <path
                    d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15V15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6875 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0977C20.9863 12.1818 22 13.9755 22 16Z"
                    fill="#3B82F6"
                  />
                </svg>
              </div>
              <h3 className="font-heading mb-2 text-xl text-gray-900 font-black">
                Call Us
              </h3>
              <p className="text-gray-500 font-bold">+91-9100810928 </p>
              <p className="text-gray-500 font-bold">+91-6309987155</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="p-10 text-center h-full rounded-3xl">
              <div className="flex items-center justify-center mb-6 w-12 h-12 mx-auto bg-gray-100 rounded-xl">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3144C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3146 13.9828 15.4995 13.9955 15.7925C13.9985 15.862 14 15.9314 14 16Z"
                    fill="#3B82F6"
                  />
                  <path
                    d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                    fill="#3B82F6"
                  />
                  <path
                    d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15V15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6875 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0977C20.9863 12.1818 22 13.9755 22 16Z"
                    fill="#3B82F6"
                  />
                </svg>
              </div>
              <h3 className="font-heading mb-2 text-xl text-gray-900 font-black">
                Address
              </h3>
              <p className="text-gray-500 font-bold">
                H.No. 8-3-222, Vengalrao Nagar, Beside Madhuranagar Metro
                Station, Pillar No. C1468, Ameerpet, Hyderabad
              </p>
              <p className="text-gray-500 font-bold">VIC 3004, Australia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full h-96 py-16 ">
      <iframe
        className="w-full h-full"
        title="Map Location"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=17.4377196,78.4397217+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>

  </div>

</section>


<Footer/>

    </div>
  )
}

export default contact