import React, { useRef }  from 'react';
import {NavLink} from 'react-router-dom'
import Title from '../Components/Title'
import Socials from '../Components/Socials'
import Experiences from '../Components/Experiences';
import Works from '../Components/Works';
import About from '../Components/About'
import Footer from '../Components/Footer';
import down from '../assets/icons/chevron-down.png'
import '../App.css'

export default function HomePage() {

  const scollToHome = useRef();
  const scollToWork = useRef();
  const scollToAbout = useRef();
  const scollToContact = useRef();

  const active = "block py-2 px-3 text-transparent active"
  const notActive = "block py-2 px-3 hover:text-transparent gradient"

  return (
    <div class="flex flex-col justify-center min-w-full h-full bg-black-bg px-28 z-100 relative" ref={scollToHome}>
      <nav class="h-[10vh] min-w-full container sticky top-0 flex items-center justify-between fixed top-0 bg-black-bg flex flex-row text-white font-poppins font-semibold z-100" >
        <p class="md:text-2xl">NOEMIE KPATENON</p>
        <div class="">
          <ul class="hidden md:flex flex-row p-4 text-sm z-100">
            <li onClick={() => scollToHome.current.scrollIntoView({behavior: "smooth",})}>
              {/* <NavLink to="/#home" className={(navData) => navData.isActive ? 'text-red-500' : {notActive} }>HOME</NavLink> */}
              <a href="/#home" class="block py-2 px-3 hover:text-transparent gradient active:bg-blue-600" aria-current="page">HOME</a>
            </li>
            <li onClick={() => scollToWork.current.scrollIntoView({behavior: "smooth",})}>
              <a href="#work" class="block py-2 px-3 hover:text-transparent gradient">WORK</a>
            </li>
            <li onClick={() => scollToAbout.current.scrollIntoView({behavior: "smooth",})}>
              <a href="#about" class="block py-2 px-3 hover:text-transparent gradient">ABOUT</a>
            </li>
            <li onClick={() => scollToContact.current.scrollIntoView({behavior: "smooth",})}>
              <a href="#contact" class="block py-2 px-3 hover:text-transparent gradient">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="md:min-h-[90vh] bg-black-bg flex flex-col justify-between items-center pb-8">
        <div class="flex flex-row justify-between w-full">
          <Title />
          <Socials />
          <div class="w-[10vw]"></div>
        </div>
        <img class="w-8 md:block hidden animate-bounce" src={down} alt=""/>
      </div>
      <Experiences />
      <div  ref={scollToWork}>
        <Works />
      </div>
      <div class="md:min-h-[100vh]">
        <div ref={scollToAbout}>
          <About />
        </div>
      </div>
      <div ref={scollToContact}></div>
      <Footer />
      
    </div>
  );
}
