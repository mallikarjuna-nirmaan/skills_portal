
import React from 'react'
import Footer from "/components/footer"
import Header from "/components/header"
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
  return (
    <>
   <Header/>

<section
  className="py-20 xl:pt-24 xl:pb-28 bg-white"
  style={{
    backgroundImage: 'url("/images/pattern-white.svg")',
    backgroundPosition: "center"
  }}
>
  <div className="container px-4 mx-auto text-center text-gray-500">
    <span className=" inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl ">
      CHOOSE YOUR DESIRED COURSES
    </span>
    <h3 className="mb-4 text-3xl md:text-5xl text-coolGray-900  tracking-tighter ">
      Our Courses
    </h3>
    <div className="flex flex-wrap justify-center -mx-4">
      <div className="w-full md:w-1/2 lg:w-1/3 p-4 ">
        <div className="flex flex-col items-center pt-10 px-8 pb-8 bg-coolGray-50 rounded-md shadow-md hover:scale-105 transition duration-500">
          <span className="inline-block py-px px-2 mb-6 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">
            M.Tech,B.Tech,B.Sc,Etc
          </span>
          <p className="mb-7 text-lg md:text-xl text-coolGray-400 font-medium">
            WAD - Web Application Development
          </p>
          <ul className="self-start mb-8">
            <li className="flex items-center mb-3 text-coolGray-500 font-medium">
              <img
                className="mr-3"
                src="/images/checkbox-green.svg"
              />
              <span>Html, java script, Angular, css, Boostrap, php</span>
            </li>
            <li className="flex items-center mb-3 text-coolGray-500 font-medium">
              <img
                className="mr-3"
                src="/images/checkbox-green.svg"
              />
              <span>70 Classes</span>
            </li>
            <li className="flex items-center mb-3 text-coolGray-500 font-medium">
              <img
                className="mr-3"
                src="/images/checkbox-green.svg"
              />
              <span> 90 Days</span>
            </li>
            <li className="flex items-center text-coolGray-500 font-medium">
              <img
                className="mr-3"
                src="/images/checkbox-green.svg"
              />
              <span>Free</span>
            </li>
          </ul>
          <a
            className="inline-block py-3 px-7 w-full text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
            href="#"
          >
            Get Enrolled
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-4 ">
        <div className="flex flex-col items-center pt-10 px-8 pb-8 bg-coolGray-50 rounded-md shadow-md hover:scale-105 transition duration-500">
          <span className="inline-block py-px px-2 mb-6 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">
            M.Tech, B.Tech, B.Sc, Etc
          </span>
          <p className="mb-7 text-lg md:text-xl text-coolGray-400 font-medium">
            NET - Network Enable Technology
          </p>
          <ul className="self-start mb-8">
            <li className="flex items-center mb-3 text-coolGray-500 font-medium">
              <img
                className="mr-3"
                src="/images/checkbox-green.svg"
              />
              <span>C# , Ado.net, Asp.net ,MVC Framework, SQL server</span>
            </li>
            <li className="flex items-center mb-3 text-coolGray-500 font-medium">
              <img
                className="mr-3"
                src="/images/checkbox-green.svg"
              />
              <span>70 Classes</span>
            </li>
            <li className="flex items-center mb-3 text-coolGray-500 font-medium">
              <img
                className="mr-3"
                src="/images/checkbox-green.svg"
              />
              <span> 90 Days</span>
            </li>
            <li className="flex items-center text-coolGray-500 font-medium">
              <img
                className="mr-3"
                src="/images/checkbox-green.svg"
              />
              <span>Free</span>
            </li>
          </ul>
          <a
            className="inline-block py-3 px-7 w-full text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
            href="#"
          >
            Get Enrolled
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-4 ">
        <div className="flex flex-col items-center pt-10 px-8 pb-8 bg-coolGray-50 rounded-md shadow-md hover:scale-105 transition duration-500 ">
          <span className="inline-block py-px px-2 mb-6 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">
            M.Tech, B.Tech, B.Sc, Etc
          </span>
          <p className="mb-7 text-lg md:text-xl text-coolGray-400 font-medium">
            IT Enabled Servces 
          </p>
          <ul className="self-start mb-8">
            <li className="flex items-center mb-3 text-coolGray-500 font-medium">
              <img
                className="mr-3"
                src="/images/checkbox-green.svg"
              />
              <span>Information Technology Enabled Services</span>
            </li>
            <li className="flex items-center mb-3 text-coolGray-500 font-medium">
              <img
                className="mr-3"
                src="/images/checkbox-green.svg"
              />
              <span>70 Classes</span>
            </li>
            <li className="flex items-center mb-3 text-coolGray-500 font-medium">
              <img
                className="mr-3"
                src="/images/checkbox-green.svg"
              />
              <span> 90 Days</span>
            </li>
            <li className="flex items-center text-coolGray-500 font-medium">
              <img
                className="mr-3"
                src="/images/checkbox-green.svg"
              />
              <span>Free</span>
            </li>
          </ul>
          <a
            className="inline-block py-3 px-7 w-full text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
            href="#"
          >
            Get Enrolled
          </a>
        </div>
      </div>
    </div>
  </div>
 
</section>

<Footer/>

  


  

   </>
    
  )
}
