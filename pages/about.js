
import React from 'react'
import Footer from "../components/footer"
import Header from "../components/Header"
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
  return (
<>
<Header/>
<section
  className="py-16 md:py-24 bg-white"
  style={{
    backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
    backgroundPosition: "center top"
  }}
>
  <div className="container 
   mx-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
    <div className="md:max-w-2xl mx-auto mb-12 text-center  ">
      <div className="flex items-center justify-center"></div>
     {/* <h2 className="mb-4 text-3xl md:text-5xl leading-tight text-gray-500 font-bold tracking-tighter">
        About Us
      </h2>
*/}
    </div>
    <div className="mb-10 mx-auto max-w-max overflow-hidden rounded-lg"></div>
    <div className="md:max-w-6xl mx-auto ">
      <h3 className="mb-4 text-2xl md:text-3xl text-center text-gray-500">
        VISION AND MISSION
      </h3>
      <p className="mb-4 text-base md:text-lg text-gray-400">
        Dr. A. P. J. Abdul Kalam, the Former President of India and a
        world-renowned Space Scientist, always encouraged students to stay
        updated with the latest developments in the world and contribute to the
        betterment of society. He quoted, “Education is the most powerful weapon
        which you can use to change the world.” We at Nirmaan firmly believe and
        stand by this ideology and strongly commit ourselves to the goal of
        empowering students with the required system and thus give rise to a
        great nation.
        The technical training focuses on developing websites using
          technologies such as HTML, CSS, Bootstrap, JavaScript, TypeScript,
          Angular, and PHP. We also offer .NET training for developing web
          applications, desktop apps, mobile apps, games, etc by imparting
          knowledge about CSharp programming language (C#), ADO.NET, LINQ,
          Entity Framework, Windows application, and Windows services using C#,
          ASP.NET web forms using C#. The students are taught everything from
          scratch to enable them to comprehend the concepts with utmost clarity.
          The soft skill session trains students to identify their strengths and
          work on their weaknesses and thus build a strong career foundation.
          These classes cover modules such as English grammar, communication
          skills, business writing and etiquette, resume writing, interview
          skills, group discussion tips, time management accompanied by various
          motivational and life-changing sessions. Various activities such as
          JAM, debates, essay writings, mock interviews are frequently conducted
          to review the effectiveness of the lessons imparted. We offer one on
          one mentoring too. In brief, the four primary skills for which the
          students are trained can be abbreviated as LSRW - Listening, Speaking,
          Reading and Writing. By the end of the rigorous technical and soft
          skills training, the students are then checked for regularity,
          commitment and knowledge gained and offered a job that fits their role
          and requirements. We ensure that the placement drives and job offers
          shall boost student’s confidence and motivate them to aim to achieve
          bigger and better goals. We at Nirmaan have committed our lives in
          ensuring the betterment of our students and take pride in able to be a
          part of such lives that have overcome obstacles, changed every
          difficulty into a challenge, grabbed opportunities, and are now
          shining bright in their careers. We have only one passion, the rise of
          a great nation. We at Nirmaan encourage every student who joins the
          training to develop their strengths and acquire life skills required
          to achieve the success in their chosen goals.
      </p>
   { /* <div className="mb-4 max-w-max overflow-hidden rounded-md">
        <img
          src="/images/about.jpeg"
          alt=""/>
      </div>

*/}


      <p className="mb-8 text-base md:text-lg text-coolGray-400 font-medium"></p>
      <ol className="list-decimal list-inside md:px-5 mb-14 text-base md:text-lg text-coolGray-500"></ol>
      <p className="mb-10 pb-10 text-base md:text-lg text-gray-400 border-b border-coolGray-100">
        <span>
          
        </span>
      </p>
    </div>
  </div>
</section>

  <Footer/>
</>
  )
}

