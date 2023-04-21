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
  
  
   <>




   <section
  className="py-24 bg-white text-gray-500 "
  style={{
    backgroundImage: 'url("/images/pattern-white.svg")',
    backgroundPosition: "center"
  }}
>
  <div className="container  mx-auto  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] pb-8">
    <div className="max-w-8xl mx-auto mb-12 text-center p-8 ">
      
      <h3 className="mb-4 text-3xl md:text-4xl leading-tight text-gray-500  tracking-tighter">
      Information Technology Enabled Services
      </h3>
      <p className="text-lg md:text-xl text-gray-400 font-medium text-left">
      In the last two decades, technology oriented development policies have taken the centre stage. ITeS has opened windows for job opportunities, service offerings and outsourcing in major economies -the key beneficiaries being – India and China. Propelled by the increase in outsourcing of web applications and product evelopment and by a growing number of clients, Connet is well positioned in the ITES market.

the growth is high, and the prospects are enarmous, there are many deploymant issues for stablishment of IT enabled services.
      </p>
    </div>
   
  </div>
</section>

</>



   <Footer/>

   </>
  )
}
