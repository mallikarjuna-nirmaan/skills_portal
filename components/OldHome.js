// import Footer from "./footer";
// import Header from "./Header";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

// import React, { useState } from "react";
// import CountUp from "react-countup";

// export default function Home() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const images = [
//     {
//       src: "/images/banner-1.jpg",
//       title: "Image 1 Title",
//       subtitle: "Image 1 Subtitle",
//     },
//     {
//       src: "/images/banner-2.jpg",
//       title: "Image 2 Title",
//       subtitle: "Image 2 Subtitle",
//     },
//     {
//       src: "/images/banner-3.jpg",
//       title: "Image 3 Title",
//       subtitle: "Image 3 Subtitle",
//     },
//     {
//       src: "/images/banner-4.jpg",
//       title: "Image 4 Title",
//       subtitle: "Image 4 Subtitle",
//     },
//     {
//       src: "/images/banner-5.jpg",
//       title: "Image 5 Title",
//       subtitle: "Image 5 Subtitle",
//     },
//   ];

//   const handlePrevClick = () => {
//     setCurrentSlide((currentSlide - 1 + images.length) % images.length);
//   };

//   const handleNextClick = () => {
//     setCurrentSlide((currentSlide + 1) % images.length);
//   };

//   return (
//     <>
//       <Header />
//       <Carousel
//         showThumbs={false}
//         showStatus={false}
//         showIndicators={false}
//         infiniteLoop
//         autoPlay
//         interval={5000}
//       >
//         {images.map((image, index) => (
//           <div key={index}>
//             <img src={image.src} alt={image.title} />
//             {/*
//           <div className="legend">
//             <h1 className="large-text">{image.title}</h1>
//             <p className="small-text">{image.subtitle}</p>
//       </div>*/}
//           </div>
//         ))}
//       </Carousel>

//       <section className="py-20 xl:py-24 text-gray-500 bg-blue-50 ">
//         <div className="container px-4 mx-auto">
//           <div className="flex flex-wrap bg-blue-50 justify-center text-center -mx-4">
//             <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
//               <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-500">
//                 <CountUp
//                   end={3501}
//                   duration={1}
//                   separator=","
//                   suffix="+"
//                   delay={0.5}
//                   className="mb-2 text-4xl md:text-5xl font-bold text-green-600 tracking-tighter"
//                 />
//                 <p className="text-lg md:text-xl text-coolGray-500 font-medium">
//                   STUDENTS ENROLLED
//                 </p>
//               </div>
//             </div>
//             <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
//               <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-500">
//                 <CountUp
//                   end={1041}
//                   duration={1}
//                   separator=","
//                   suffix="+"
//                   delay={0.5}
//                   className="mb-2 font-bold text-4xl md:text-5xl text-green-600 tracking-tighter"
//                 />
//                 <p className="text-lg md:text-xl text-coolGray-500 font-medium">
//                   STUDENTS JOINED
//                 </p>
//               </div>
//             </div>
//             <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
//               <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-500">
//                 <CountUp
//                   end={544}
//                   duration={1}
//                   separator=","
//                   suffix="+"
//                   delay={0.5}
//                   className="mb-2 font-bold text-4xl md:text-5xl text-green-600 tracking-tighter"
//                 />
//                 <p className="text-lg md:text-xl text-coolGray-500 font-medium">
//                   COURSE COMPLETED
//                 </p>
//               </div>
//             </div>
//             <div className="w-full md:w-1/3 lg:w-1/4 px-4">
//               <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-500">
//                 <CountUp
//                   end={0}
//                   duration={3}
//                   separator=","
//                   suffix="+"
//                   delay={2}
//                   className="mb-2 font-bold text-4xl md:text-5xl text-green-600 tracking-tighter"
//                 />
//                 <p className="text-lg md:text-xl text-coolGray-500 font-medium">
//                   STUDENTS PLACED
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section>
//         {/*
//   className="py-20 xl:py-24 bg-white text-gray-500 bg-blue-50"
//   style={{
//     backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
//     backgroundPosition: "center"
//   }}
// >
//   <div className="container px-4 mx-auto ">
//     <div className="flex flex-wrap justify-center text-center -mx-4">
//       <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
//         <h2 className="mb-2 text-4xl md:text-5xl font-bold text-green-600 tracking-tighter">
//           3501
//         </h2>
//         <p className="text-lg md:text-xl text-coolGray-500 font-medium">
//           STUDENTS ENROLLED
//         </p>
//       </div>
//       <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
//         <h2 className="mb-2 font-bold text-4xl md:text-5xl text-green-600 tracking-tighter">
//           1041
//         </h2>
//         <p className="text-lg md:text-xl text-coolGray-500 font-medium">
//           STUDENTS JOINED{" "}
//         </p>
//       </div>
//       <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
//         <h2 className="mb-2 font-bold text-4xl md:text-5xl text-green-600 tracking-tighter">
//           544
//         </h2>
//         <p className="text-lg md:text-xl text-coolGray-500 font-medium">
//           COURSE COMPLETED{" "}
//         </p>
//       </div>
//       <div className="w-full md:w-1/3 lg:w-1/4 px-4">
//         <h2 className="mb-2 font-bold text-4xl md:text-5xl text-green-600 tracking-tighter">
//           0
//         </h2>
//         <p className="text-lg md:text-xl text-coolGray-500 font-medium">
//           STUDENTS PLACED{" "}
//         </p>
//       </div>
//     </div>
//   </div>
//   */}
//       </section>

//       <section
//         className="py-20 xl:pt-24 xl:pb-28 bg-white"
//         style={{
//           backgroundImage: 'url("/images/pattern-white.svg")',
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="container px-4 mx-auto text-center text-gray-500">
//           <span className=" inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl ">
//             CHOOSE YOUR DESIRED COURSES
//           </span>
//           <h3 className="mb-4 text-3xl md:text-5xl text-coolGray-900  tracking-tighter ">
//             Our Courses
//           </h3>
//           <div className="flex flex-wrap justify-center -mx-4">
//             <div className="w-full md:w-1/2 lg:w-1/3 p-4">
//               <div className="flex flex-col items-center pt-10 px-8 pb-8 bg-coolGray-50 rounded-md shadow-md hover:scale-105 transition duration-500 ">
//                 <span className="inline-block py-px px-2 mb-6 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">
//                   M.Tech,B.Tech,B.Sc,Etc
//                 </span>
//                 <p className="mb-7 text-lg md:text-xl text-coolGray-400 font-medium">
//                   WAD - Web Application Development
//                 </p>
//                 <ul className="self-start mb-8">
//                   <li className="flex items-center mb-3 text-coolGray-500 font-medium">
//                     <img className="mr-3" src="/images/checkbox-green.svg" />
//                     <span>Html, java script, Angular, css, Boostrap, php</span>
//                   </li>
//                   <li className="flex items-center mb-3 text-coolGray-500 font-medium">
//                     <img className="mr-3" src="/images/checkbox-green.svg" />
//                     <span>70 Classes</span>
//                   </li>
//                   <li className="flex items-center mb-3 text-coolGray-500 font-medium">
//                     <img className="mr-3" src="/images/checkbox-green.svg" />
//                     <span> 90 Days</span>
//                   </li>
//                   <li className="flex items-center text-coolGray-500 font-medium">
//                     <img className="mr-3" src="/images/checkbox-green.svg" />
//                     <span>Free</span>
//                   </li>
//                 </ul>
//                 <a
//                   className="inline-block py-3 px-7 w-full text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
//                   href="#"
//                 >
//                   Get Enrolled
//                 </a>
//               </div>
//             </div>
//             <div className="w-full md:w-1/2 lg:w-1/3 p-4">
//               <div className="flex flex-col items-center pt-10 px-8 pb-8 bg-coolGray-50 rounded-md shadow-md hover:scale-105 transition duration-500 ">
//                 <span className="inline-block py-px px-2 mb-6 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">
//                   M.Tech, B.Tech, B.Sc, Etc
//                 </span>
//                 <p className="mb-7 text-lg md:text-xl text-coolGray-400 font-medium">
//                   NET - Network Enable Technology
//                 </p>
//                 <ul className="self-start mb-8">
//                   <li className="flex items-center mb-3 text-coolGray-500 font-medium">
//                     <img className="mr-3" src="/images/checkbox-green.svg" />
//                     <span>
//                       C# , Ado.net, Asp.net ,MVC Framework, SQL server
//                     </span>
//                   </li>
//                   <li className="flex items-center mb-3 text-coolGray-500 font-medium">
//                     <img className="mr-3" src="/images/checkbox-green.svg" />
//                     <span>70 Classes</span>
//                   </li>
//                   <li className="flex items-center mb-3 text-coolGray-500 font-medium">
//                     <img className="mr-3" src="/images/checkbox-green.svg" />
//                     <span> 90 Days</span>
//                   </li>
//                   <li className="flex items-center text-coolGray-500 font-medium">
//                     <img className="mr-3" src="/images/checkbox-green.svg" />
//                     <span>Free</span>
//                   </li>
//                 </ul>
//                 <a
//                   className="inline-block py-3 px-7 w-full text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
//                   href="#"
//                 >
//                   Get Enrolled
//                 </a>
//               </div>
//             </div>
//             <div className="w-full md:w-1/2 lg:w-1/3 p-4">
//               <div className="flex flex-col items-center pt-10 px-8 pb-8 bg-coolGray-50 rounded-md shadow-md hover:scale-105 transition duration-500 ">
//                 <span className="inline-block py-px px-2 mb-6 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">
//                   M.Tech, B.Tech, B.Sc, Etc
//                 </span>
//                 <p className="mb-7 text-lg md:text-xl text-coolGray-400 font-medium">
//                   ITES - Info Technology Enabled Services
//                 </p>
//                 <ul className="self-start mb-8">
//                   <li className="flex items-center mb-3 text-coolGray-500 font-medium">
//                     <img className="mr-3" src="/images/checkbox-green.svg" />
//                     <span>Information Technology Enabled Services</span>
//                   </li>
//                   <li className="flex items-center mb-3 text-coolGray-500 font-medium">
//                     <img className="mr-3" src="/images/checkbox-green.svg" />
//                     <span>70 Classes</span>
//                   </li>
//                   <li className="flex items-center mb-3 text-coolGray-500 font-medium">
//                     <img className="mr-3" src="/images/checkbox-green.svg" />
//                     <span> 90 Days</span>
//                   </li>
//                   <li className="flex items-center text-coolGray-500 font-medium">
//                     <img className="mr-3" src="/images/checkbox-green.svg" />
//                     <span>Free</span>
//                   </li>
//                 </ul>
//                 <a
//                   className="inline-block py-3 px-7 w-full text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
//                   href="#"
//                 >
//                   Get Enrolled
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       <section
//         className="py-20 xl:py-24 bg-blue-50"
//         style={{
//           backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="container px-4 mx-auto">
//           <div className="text-center">
//             <h3 className="mb-4 text-3xl md:text-5xl tracking-tighter text-gray-500 ">
//               KEY COMPONENTS OF THE SCHEME
//             </h3>
//           </div>
//           <div className="flex flex-wrap justify-center -mx-4">
//             <div className="w-full md:w-1/2 lg:w-1/3 p-4">
//               <div className="flex flex-col pt-8 pb-8 bg-coolGray-50 rounded-md shadow-md hover:scale-105 transition duration-500  text-gray-200 bg-green-600 h-96">
//                 <div className="px-8 pb-8">
//                   <h3 className="mb-6 text-lg md:text-xl font-medium text-white">
//                     Short Term Training
//                   </h3>
//                   <p className="mb-6 font-medium">
//                     Learn professionally designed course curriculum from subject
//                     matter experts within a short period of time. 1. Web
//                     Application Development HTML, CSS, JavaScript, Angular,
//                     Bootstrap, PHP, MySQL. 2. Office Administration Basics of
//                     computers, Microsoft Office, Typing, Management Skills
//                   </p>
//                 </div>
//                 <div className="" />
//               </div>
//             </div>
//             <div className="w-full md:w-1/2 lg:w-1/3 p-4">
//               <div className="flex flex-col pt-8 pb-8 bg-coolGray-50 rounded-md shadow-md hover:scale-105 transition duration-500  bg-green-600 text-gray-200 h-96">
//                 <div className="px-8 pb-8">
//                   <div className="flex flex-wrap items-center justify-between mb-6">
//                     <h3 className="mr-3 text-lg md:text-xl font-medium text-white">
//                       Certification
//                     </h3>
//                   </div>
//                   <p className="mb-6 font-medium">
//                     We understand the importance of valid proof of completion of
//                     a course for a student. Hence, after successful completion
//                     of the entire training program at Nirmaan Organisation, each
//                     student is awarded a certificate from Future Ready Youth
//                     Skilling Program that will stay valid indefinitely.
//                   </p>
//                 </div>
//                 <div className="" />
//               </div>
//             </div>
//             <div className="w-full md:w-1/2 lg:w-1/3 p-4">
//               <div className="flex flex-col pt-8 pb-8 bg-coolGray-50 rounded-md shadow-md hover:scale-105 transition duration-500 bg-green-600 text-gray-200 h-96">
//                 <div className="px-8 pb-8">
//                   <h3 className="mb-6 text-lg md:text-xl font-medium text-white">
//                     Placement Assistance
//                   </h3>
//                   <div className="mb-6"></div>
//                   <p className="mb-6 font-medium">
//                     The placement team at Nirmaan consists of highly committed
//                     individuals who ensure that the student who shows tremendous
//                     dedication and activeness regularly during the classes and
//                     also meets the eligibility criteria are placed in a worthy
//                     position at a reputed firm. We have successfully placed 348
//                     students in companies such as Cognizant, TCS, Wipro etc . We
//                     have many more lives to change!
//                   </p>
//                 </div>
//                 <div className="" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }
