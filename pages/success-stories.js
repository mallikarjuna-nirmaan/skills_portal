

import React from 'react'
import Footer from "../components/Footer"
import Header from "../components/Header"
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
  return (
<>
<Header/>

<section className="text-gray-500 s">
<section
  className="py-24 md:pb-28 bg-white"
  style={{
    backgroundImage: 'url("images/pattern-white.svg")',
    backgroundPosition: "center"
  }}
>
  <div className="container px-4 mx-auto ">
    <div className="flex flex-wrap items-center justify-center lg:justify-between -mx-4">
      <div className="w-auto px-4 order-last lg:order-first"></div>
      <div className="w-full lg:w-2/6 px-4 mb-12 lg:mb-0">
        <div className="flex items-center">
          <img
            className="w-20 md:w-24 h-20 md:h-24 mr-6 rounded-full"
            src="/images/testi-img1.jpg"
            alt=""
          />
          <div>
            <h3 className="mb-2 text-xl md:text-2xl font-semibold">
            Avinash Reddy Nalamalapu
            </h3>
            <span className="text-lg text-coolGray-500 font-medium">
              Student
            </span>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/6 px-4 mb-12 lg:mb-0">
        <div className="relative pt-12 pb-6 sm:p-6">
          <img
            className="absolute top-0 left-0"
            src="images/quote-top-green.svg"
            alt=""
          />
          <img
            className="absolute bottom-0 right-0"
            src="images/quote-down-green.svg"
            alt=""
          />
          <div className="relative">
            <h2 className="font-semibold tracking-tighter">
            I am Avinash Reddy, resident of Maddipadu village in Ongole district. My family is financially poor and I also lost my father while I was pursuing B. Tech. My mother became the bread earner of our family while working as a tailor. These challenging circumstances made me realize that I should take up the responsibilities of my family to support in every form. Fortunately, I saw a Facebook post about the training courses and facilities at Nirmaan Organization.

All the trainers and counselors at Nirmaan Organization supported me without any hesitation at any time of the day. They mentored and coached me to ensure quality in all the training. Due to the scheduled exams, I wasn’t able to attend a few sessions; however, my mentors here did not let me lose touch with the classes. I was given access to the recordings so that I stay updated.

Due to a lack of good communication and technical skills, I would lose various interview opportunities. My decision to join Nirmaan is a turning point in my life, I have developed excellent verbal and written skills while gaining good technical knowledge as well.

I have successfully cleared the interview with Funlab Tech and was offered a job with a salary of 3,25,000 PA. My family is really happy about this. I will be thankful to Nirmaan Organization throughout my life for what they have done for me has given me and my family stability and empowered me with confidence too.
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section
  className="py-24 md:pb-28 "
  style={{
    backgroundImage: 'url("images/pattern-white.svg")',
    backgroundPosition: "center"
  }}
>
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap items-center justify-center lg:justify-between -mx-4">
      <div className="w-auto px-4 order-last lg:order-first"></div>
      <div className="w-full lg:w-2/6 px-4 mb-12 lg:mb-0">
        <div className="flex items-center">
          <img
            className="w-20 md:w-24 h-20 md:h-24 mr-6 rounded-full"
            src="/images/testi-img2.png"
            alt=""
          />
          <div>
            <h3 className="mb-2 text-xl md:text-2xl font-semibold">
            A Divya
            </h3>
            <span className="text-lg text-coolGray-500 font-medium">
              Student
            </span>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/6 px-4 mb-12 lg:mb-0">
        <div className="relative pt-12 pb-6 sm:p-6">
          <img
            className="absolute top-0 left-0"
            src="images/quote-top-green.svg"
            alt=""
          />
          <img
            className="absolute bottom-0 right-0"
            src="images/quote-down-green.svg"
            alt=""
          />
          <div className="relative">
            <h2 className="font-semibold tracking-tighter">
            I am Divya. I live in a small rented home in Jagathgirigutta with my parents and two siblings. My father, though a daily wage earner ensured that I studied at a good school. I studied at Saraswathi High School, but later due to financial instability, my father couldn’t afford the school fees, and thus I had to join a government school.

After SSC, I completed intermediate at Sree Vardhan Junior college, and I got an engineering seat at CMR technical campus affiliated with JNTU University. I couldn’t clear the interviews which were conducted at college.

My aim was to become a Software Engineer and I was able to fulfill it only because I enrolled in the training course at Microsoft-Nirmaan Organization. I was trained by professionals in the field of web and mobile applications and soft skills such as interview skills and communications skills. This training has helped me grow personally and professionally. I attended the classes regularly and put all my efforts into learning new things and technologies, which opened the door for me to get my dream job.

I am now working as a full-time employee with Osmosys Software Solutions Pvt. Ltd as Assistant System Engineer-Trainee. For this, I am thankful and grateful to Microsoft-Nirmaan Organization. Choosing this free training and placements program is an opportunity for the unemployed to kickstart their career and I would personally recommend everyone to choose the right track and get connected with Nirmaan.
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section
  className="py-24 md:pb-28 bg-white"
  style={{
    backgroundImage: 'url("images/pattern-white.svg")',
    backgroundPosition: "center"
  }}
>
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap items-center justify-center lg:justify-between -mx-4">
      <div className="w-auto px-4 order-last lg:order-first"></div>
      <div className="w-full lg:w-2/6 px-4 mb-12 lg:mb-0">
        <div className="flex items-center">
          <img
            className="w-20 md:w-24 h-20 md:h-24 mr-6 rounded-full"
            src="/images/testi-img3.jpg"
            alt=""
          />
          <div>
            <h3 className="mb-2 text-xl md:text-2xl font-semibold">
            Madhukar E
            </h3>
            <span className="text-lg text-coolGray-500 font-medium">
              Student
            </span>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/6 px-4 mb-12 lg:mb-0">
        <div className="relative pt-12 pb-6 sm:p-6">
          <img
            className="absolute top-0 left-0"
            src="images/quote-top-green.svg"
            alt=""
          />
          <img
            className="absolute bottom-0 right-0"
            src="images/quote-down-green.svg"
            alt=""
          />
          <div className="relative">
            <h2 className="font-semibold tracking-tighter">
            I am E. Madhukar from Warangal. I am from a family where all of us are dependent on seasonal business and farming. My parents are toddy tappers in the village. We get income from here only to support. We had some financial constraints in the family for our studies. But my parents supported us in all that we needed.

Now my second parent is Microsoft-Nirmaan. I came to know about this training program from social networking sites. I immediately connected with them and got myself registered. All at Nirmaan made me so comfortable through online training. Trainers, counselors, and Mentors helped me with information and support for every doubt.

I have taken a WMA course and became a UI developer with all the concepts needed for it (HTML, CSS, Bootstrap, JavaScript, Angular). I thank my technical trainer Priyanka ma’am and soft skills trainer Sunil sir for making me a skilled person. Now I am working with R3H Technologies as an SAP B1 Functionalist. I am very much grateful to Sunil sir and Naren sir for giving such support in placement.

I am always thankful to Microsoft-Nirmaan Organization. I will recommend this to many others to get benefited from this training. Thank you all. A Special thanks to the Placement Team.

Thank you…
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section
  className="py-24 md:pb-28 bg-white"
  style={{
    backgroundImage: 'url("images/pattern-white.svg")',
    backgroundPosition: "center"
  }}
>
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap items-center justify-center lg:justify-between -mx-4">
      <div className="w-auto px-4 order-last lg:order-first"></div>
      <div className="w-full lg:w-2/6 px-4 mb-12 lg:mb-0">
        <div className="flex items-center">
          <img
            className="w-20 md:w-24 h-20 md:h-24 mr-6 rounded-full"
            src="/images/testi-img4.jpg"
            alt=""
          />
          <div>
            <h3 className="mb-2 text-xl md:text-2xl font-semibold">
            Sreeloju Sravani
            </h3>
            <span className="text-lg text-coolGray-500 font-medium">
              Student
            </span>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/6 px-4 mb-12 lg:mb-0">
        <div className="relative pt-12 pb-6 sm:p-6">
          <img
            className="absolute top-0 left-0"
            src="images/quote-top-green.svg"
            alt=""
          />
          <img
            className="absolute bottom-0 right-0"
            src="images/quote-down-green.svg"
            alt=""
          />
          <div className="relative">
            <h2 className="font-semibold tracking-tighter">
            I am Sreeloju Shravani writing these lines with much gratitude. This training has helped me to enhance my skills and secure a good job. We are migrants from Yadadri. My father is a businessman but most of the time we had financial issues in the family. We as children wanted to support our father.

I was confused with career options and had no clarity on what to learn and settle with in life. Finally, I came to know about Microsoft- Nirmaan training program from a Facebook post. I made an inquiry and enrolled in the WMA course. During the pandemic, I had obtained a very nice chance to learn something sitting in the comfort of my home.

I enhance my skills especially communications and various technical skills. I got job placement at Virtusa as an Analyst -KPO.

Thank you, dear trainers and my counselors who made me a skilled person, taught me personality development, provided career guidance, helped in resume building. I will always be grateful to Microsoft-Nirmaan Organization for this opportunity.
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section
  className="py-24 md:pb-28 bg-white"
  style={{
    backgroundImage: 'url("images/pattern-white.svg")',
    backgroundPosition: "center"
  }}
>
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap items-center justify-center lg:justify-between -mx-4">
      <div className="w-auto px-4 order-last lg:order-first"></div>
      <div className="w-full lg:w-2/6 px-4 mb-12 lg:mb-0">
        <div className="flex items-center">
          <img
            className="w-20 md:w-24 h-20 md:h-24 mr-6 rounded-full"
            src="/images/testi-img5.png"
            alt=""
          />
          <div>
            <h3 className="mb-2 text-xl md:text-2xl font-semibold">
            Thatikonda Yogitha
            </h3>
            <span className="text-lg text-coolGray-500 font-medium">
              Student
            </span>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/6 px-4 mb-12 lg:mb-0">
        <div className="relative pt-12 pb-6 sm:p-6">
          <img
            className="absolute top-0 left-0"
            src="images/quote-top-green.svg"
            alt=""
          />
          <img
            className="absolute bottom-0 right-0"
            src="images/quote-down-green.svg"
            alt=""
          />
          <div className="relative">
            <h2 className="font-semibold tracking-tighter">
            I’m Thatikonda Yogitha, coming from a family which consists of four members. My father is an employee at a private firm, my mother is a homemaker & my sister is working too. I completed B.tech and after graduation, I was very confused about what I should do regarding my career. My confusion was whether I should go with higher studies or should I focus to get a job. One day when I was using YouTube, I saw an advertisement regarding the “Future Ready Youth Skilling Program” from Nirmaan Organization & I thought to focus on sharpening my knowledge technically & to improve my communication skills as well. Because, there was no update on college opening at that time. So, I decided to join Nirmaan Organization’s free training & placement in - .Net along with soft skills. Then I registered with Nirmaan & I got a call from the team & then I immediately said “Okay” for joining the training. I was not sure about getting the job at the beginning of the training. But, later on, with the technical trainer providing great knowledge on concepts, soft skills trainers motivation & encouragement in making me speak freely has actually boosted my confidence and raised my hope to crack the job.

Moreover, the placements team also encouraged me in making this happen. As a result of this, I got placed in “Osmosys Software Solutions” as an “Assistant System Engineer” with CTC of Rs.1,86,875 PA.

Now, I feel happy that I can contribute to my family income & my parents are happy & proud of me that I got the job. This has happened just because of Nirmaan Organization’s Trainers & Placement team. I would like to thank each & every individual for making this possible & making my life happy & beautiful.

            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section
  className="py-24 md:pb-28 bg-white"
  style={{
    backgroundImage: 'url("images/pattern-white.svg")',
    backgroundPosition: "center"
  }}
>
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap items-center justify-center lg:justify-between -mx-4">
      <div className="w-auto px-4 order-last lg:order-first"></div>
      <div className="w-full lg:w-2/6 px-4 mb-12 lg:mb-0">
        <div className="flex items-center">
          <img
            className="w-20 md:w-24 h-20 md:h-24 mr-6 rounded-full"
            src="/images/testi-img6.jpg"
            alt=""
          />
          <div>
            <h3 className="mb-2 text-xl md:text-2xl font-semibold">
            Krisna Pachipala
            </h3>
            <span className="text-lg text-coolGray-500 font-medium">
              Student
            </span>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/6 px-4 mb-12 lg:mb-0">
        <div className="relative pt-12 pb-6 sm:p-6">
          <img
            className="absolute top-0 left-0"
            src="images/quote-top-green.svg"
            alt=""
          />
          <img
            className="absolute bottom-0 right-0"
            src="images/quote-down-green.svg"
            alt=""
          />
          <div className="relative">
            <h2 className="font-semibold tracking-tighter">
            My name is Krisna Pachipala and I am from a village called Venkampadu in Mahabubabad. My parents are farmers. We are four siblings in the family. My parents work very hard to give us what we need and support us in whatever we want to do. I always wanted to get a job as soon as possible and support my father and make my happy family.

That’s when I came to know about Nirmaan and its training program. I called Sudheer sir and he supported me a lot. I learned Html, CSS, Bootstrap, Javascript, Angular. The course was very useful and Priyanka madam’s teaching is good and Sunil sir, Aditya sir's teaching is also good. Apart from technical classes, they had provided communication classes on Personality development, communication skills, resume building and interview skills.

The placement assistance was really nice and they encouraged me a lot. They shared lots of information and scheduled interviews to attend. Now I am working with SEFE Automation Systems Pvt Ltd. This is my first job and my family is really happy.

A big thanks to Microsoft-Nirmaan organization management and Microsoft especially for supporting us like this with free training and placement. More than me my parents are happy that I am supporting them financiall
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section
  className="py-24 md:pb-28 bg-white"
  style={{
    backgroundImage: 'url("images/pattern-white.svg")',
    backgroundPosition: "center"
  }}
>
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap items-center justify-center lg:justify-between -mx-4">
      <div className="w-auto px-4 order-last lg:order-first"></div>
      <div className="w-full lg:w-2/6 px-4 mb-12 lg:mb-0">
        <div className="flex items-center">
          <img
            className="w-20 md:w-24 h-20 md:h-24 mr-6 rounded-full"
            src="/images/testi-img7.jpg"
            alt=""
          />
          <div>
            <h3 className="mb-2 text-xl md:text-2xl font-semibold">
            B.Akshith
            </h3>
            <span className="text-lg text-coolGray-500 font-medium">
              Student
            </span>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/6 px-4 mb-12 lg:mb-0">
        <div className="relative pt-12 pb-6 sm:p-6">
          <img
            className="absolute top-0 left-0"
            src="images/quote-top-green.svg"
            alt=""
          />
          <img
            className="absolute bottom-0 right-0"
            src="images/quote-down-green.svg"
            alt=""
          />
          <div className="relative">
            <h2 className="font-semibold tracking-tighter">
            My name is B. Akshith. I have completed my graduation in the year 2017. After that for 2 years, I had prepared for all kinds of government jobs but I was not selected for any job. After that, I took coaching for UI Technologies in the coaching center. Coaching Institute told us 100% placement after completion of the course, but they did not provide any placements.

Through YouTube, I came to know about Nirmaan Organization and I contacted the given contact numbers.

Finally, I spoke to Sunil sir and informed him about my financial situation, Sir had given me assurance and told me that many people have been placed through Nirmaan Organization. I attended online classes and practiced daily. After completion of the course, Sunil sir used to post the openings in the WhatsApp group. I attended the interviews and finally got selected in Doidde Technologies as a Junior Software Engineer.

Initially, I used to have fear of attending interviews and group discussions but Nirmaan Organization provided soft skills training too. There I improved my soft skills and learned how to talk in group discussions, and how to overcome the fear of public speaking, resume preparation tips. All teachers are very kind and with a lot of patience, they clarified my doubts. Every week there was an interactive session with guest faculties there I used to clear all my doubts. Because of these sessions, I got a lot of awareness on how to plan my future because they were industry experts and gave perfect plans to achieve goals and shared their experience while highlighting what is required and what not and where to focus.

Whenever I got disappointed because of not getting selected and not performing well in interviews I used to call Sunil sir. Sunil sir encouraged me a lot and again and again, and informed me about the openings for jobs to perform well.

This is the only Organization providing jobs with training that to in pandemic situations and for freshers and 2017,2018, passed out students.
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section
  className="py-24 md:pb-28 bg-white"
  style={{
    backgroundImage: 'url("images/pattern-white.svg")',
    backgroundPosition: "center"
  }}
>
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap items-center justify-center lg:justify-between -mx-4">
      <div className="w-auto px-4 order-last lg:order-first"></div>
      <div className="w-full lg:w-2/6 px-4 mb-12 lg:mb-0">
        <div className="flex items-center">
          <img
            className="w-20 md:w-24 h-20 md:h-24 mr-6 rounded-full"
            src="/images/testi-img8.jpg"
            alt=""
          />
          <div>
            <h3 className="mb-2 text-xl md:text-2xl font-semibold">
            Gokul Prabhu
            </h3>
            <span className="text-lg text-coolGray-500 font-medium">
              Student
            </span>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/6 px-4 mb-12 lg:mb-0">
        <div className="relative pt-12 pb-6 sm:p-6">
          <img
            className="absolute top-0 left-0"
            src="images/quote-top-green.svg"
            alt=""
          />
          <img
            className="absolute bottom-0 right-0"
            src="images/quote-down-green.svg"
            alt=""
          />
          <div className="relative">
            <h2 className="font-semibold tracking-tighter">
            My name is Gokul Prabhu. Our family is a middle-class family. My father is a government employee in one of the service sectors. We are two siblings in the family and both of us are B.Tech graduates.

I am basically from a mechanical background. But when I came to know about Nirmaan training, I wanted to learn something new and get a good job. My sister and me both of us joined the course. I must thank Nirajan sir for giving me this chance to attend classes though I did not meet the eligibility criteria.

After attending the classes with very basic knowledge, now I am confident about software development. My sister and I both tried for placements and we got jobs in IT Hub – Khammam. My parents are really happy about us.

Though I had lots of doubts and confusion, Microsoft Nirmaan helped me to gain and enhance my skills. The trainers helped a lot. They used to clear all the doubts whenever I asked. We are earning 1.5 lac's PA now.

Thank you so much Microsoft-Nirmaan organization for teaching me and my sister. We are settled in life. Special thanks to our communication trainer who has boosted my confidence

Thank you so much.
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section
  className="py-24 md:pb-28 bg-white"
  style={{
    backgroundImage: 'url("images/pattern-white.svg")',
    backgroundPosition: "center"
  }}
>
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap items-center justify-center lg:justify-between -mx-4">
      <div className="w-auto px-4 order-last lg:order-first"></div>
      <div className="w-full lg:w-2/6 px-4 mb-12 lg:mb-0">
        <div className="flex items-center">
          <img
            className="w-20 md:w-24 h-20 md:h-24 mr-6 rounded-full"
            src="/images/testi-img"
            alt=""
          />
          <div>
            <h3 className="mb-2 text-xl md:text-2xl font-semibold">
            Sandhya Usha Gurrala
            </h3>
            <span className="text-lg text-coolGray-500 font-medium">
              Student
            </span>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/6 px-4 mb-12 lg:mb-0">
        <div className="relative pt-12 pb-6 sm:p-6">
          <img
            className="absolute top-0 left-0"
            src="images/quote-top-green.svg"
            alt=""
          />
          <img
            className="absolute bottom-0 right-0"
            src="images/quote-down-green.svg"
            alt=""
          />
          <div className="relative">
            <h2 className="font-semibold tracking-tighter">
            My name is Sandhya Usha. I am from Godavari district, Andhra Pradesh. My family consists of 4 members. My father is a businessman. My mother is a homemaker. My elder brother is working as an IT employee. But we have had a lot of financial constraints.

I came to know about Microsoft Nirmaan from a friend of mine. I too wanted to join and make use of this so that I can gain knowledge and also can reduce training expenses to my father after my B.Tech. As planned, I took up the training. The expert trainers here have helped me a lot. Especially, I never had clarity on career and resume building, now I am very happy that I crossed all that confusion and got placement in Envizion Studio as a trainee. I hope to go a long way.

I learned at the Nirmaan - WMA course and improved my communication skills to a level and can see that change. I will always be thankful to Microsoft Nirmaan for this opportunity. I have mainly learned personality development skills which is very helpful in my life. I am really thankful for that.
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


</section>

  <Footer/>
</>

  )
    }