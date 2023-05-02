import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  return (
    <>
      {/* <Header/> */}
      <section
        className="relative pt-8 h-screen md:py-32 bg-white text-gray-500"
        style={{
          backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          backgroundPosition: "center",
        }}
      >
        <div className="container px-4 mx-auto mb-16">
          <div className="w-full md:w-3/5 lg:w-1/2">
            <div className="max-w-sm mx-auto">
              <div className="mb-6 text-center">
                <a className="inline-block mb-6" href="/">
                  <img className="h-16" src="/images/logo.png" alt="" />
                </a>
                <h3 className="mb-4 text-2xl md:text-3xl font-bold">Sign In</h3>
                <p className="text-lg text-coolGray-500 font-medium">
                  Enter email and password{" "}
                </p>
              </div>
              <form method="POST" action="https://nirmaanskills.org/login">
                <div className="mb-6">
                  <label
                    className="block mb-2 text-coolGray-800 font-medium"
                    htmlFor=""
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    type="email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-coolGray-800 font-medium"
                    htmlFor=""
                  >
                    Password
                  </label>
                  <input
                    className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    type="password"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <div className="w-full md:w-1/2">
                    <label className="relative inline-flex items-center">
                      <input
                        className="form-checkbox appearance-none"
                        type="checkbox"
                      />
                      <img
                        className="absolute top-1/2 transform -translate-y-1/2 left-0"
                        src="flex-ui-assets/elements/sign-up/checkbox-icon.svg"
                        alt=""
                      />
                      <span className="ml-7 text-xs text-coolGray-800 font-medium">
                        Remember me
                      </span>
                    </label>
                  </div>
                  <div className="w-full md:w-auto mt-1">
                    <a
                      className="inline-block text-xs font-medium text-green-500 hover:text-green-600"
                      href="#"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <a
                  className="inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                  href="#"
                >
                  Sign In
                </a>
              </form>
            </div>
          </div>
        </div>
        <img
          className="md:absolute md:top-0 md:right-0 mx-auto md:h-full md:w-2/5 lg:w-1/2 md:object-cover"
          src="/images/about.jpeg"
          alt=""
        />
      </section>

      {/* <Footer/> */}
    </>
  );
}
