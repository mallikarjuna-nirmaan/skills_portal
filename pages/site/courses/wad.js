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
  <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
  <meta name="author" content="Pavan Chowdary" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>WAD - Nirmaan Skills Ready</title>
  <meta name="description" content="WAD - Nirmaan Skills Ready" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
 
 <section
  className="py-24 bg-white text-gray-500 "
  style={{
    backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
    backgroundPosition: "center"
  }}
>
  <div className="container  mx-auto  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] pb-8">
    <div className="max-w-4xl mx-auto mb-12 text-center p-8">
      
      <h3 className="mb-4 text-3xl md:text-4xl leading-tight text-gray-500  tracking-tighter">
        Web Application Development
      </h3>
      <p className="text-lg md:text-xl text-gray-400 font-medium">
        Modules Under WDA Course
      </p>
    </div>
    <div className="max-w-8xl mx-auto ">
      <a className="group block mb-6  px-8" >
        <div className="flex justify-between flex-wrap bg-coolGray-50 group-hover:bg-coolGray-100 rounded-md  transition duration-200">
          <div className="w-full md:w-1/2 mb-2 md:mb-0  ">
            <h3 className="text-lg md:text-xl text-gray-500 group-hover:text-coolGray-900 font-semibold">
            HTML (Hyper Text Markup Language)
            </h3>
            <li>It is used for Graphical Representation of a Page.</li>
<li>Text Basics</li>
<li>Text-formatting Elements i.e. (How to Make the text bold, give the underlines to it and Italic text )</li>
<li>Images alignment in the webpage</li>
<li>Lists and Redirecting to the pages.</li>
<li>Tables, nav tag, section and footer</li>
<li>Basic Forms</li>
<h3 className="text-lg md:text-xl text-gray-500 group-hover:text-coolGray-900 font-semibold">
            CSS3 (Cascading Style Sheets)
            </h3>
            <li>Basics of CSS</li>
<li>Font Styles and color</li>
<li>List Styles and Box Model</li>
<li>CSS Selectors (class &amp; Id) Key Frames and Basic Design of Forms</li>
<li>Navigation Menus, Animations by Animate.css and CDN</li>
<li>Social Icons by Font Awesome CDN(Content Delivery Network)</li>
<h3 className="text-lg md:text-xl text-gray-500 group-hover:text-coolGray-900 font-semibold">
            BOOTSTRAP 4
            </h3>
            <li>It’s a Framework Which will help for to create a webpage in an easy way.</li>
<li>Containers</li>
<li>Grid Layout and Border Layout.</li>
<li>Components (Navbar, Jumbotron, Modal, Forms, Cards… etc.)</li>
<li>Project By Bootstrap using Git hosting.</li>

<h3 className="text-lg md:text-xl text-gray-500 group-hover:text-coolGray-900 font-semibold">
            PHP (Hypertext Processor)
            </h3>
            <li>For Client-Side programming we use PHP</li>
<li>Variables</li>
<li>Inserting and Using Database Data</li>
<li>PHP Functions and PHP oops</li>
<li>Form Validation by PHP</li>

<h3 className="text-lg md:text-xl text-gray-500 group-hover:text-coolGray-900 font-semibold">
            JavaScript
            </h3>
            <li>This is used to make the webpage more Functionality.</li>
<li>Variables (let, const and var)</li>
<li>Data types (Arrays, Object, Functions, Number &amp; String)</li>
<li>DOM (Document Object Model)</li>
<li>Event Listeners (click, keyup &amp; keydown) and also small project by all these concepts</li>
<li>AJAX (Asynchronous JavaScript)</li>


<h3 className="text-lg md:text-xl text-gray-500 group-hover:text-coolGray-900 font-semibold">
            Angular JS
            </h3>
            <li>To develop modern, responsive Single-page Web Application we use Angular</li>
<li>Introduction to Angular</li>
<li>Angular Fundamentals.(Components, Generation By CLI, Directives and Services)</li>
<li>Display Data and Handling Events(Attribute Binding, Adding Bootstrap, Two way Bindings… etc.)</li>
<li>Custom Pipes</li>
          </div>
        
        </div>
      </a>

    </div>
  </div>
</section>


 



</>

  


   <Footer/>

   </>
  )
}
