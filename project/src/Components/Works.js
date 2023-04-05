import React from 'react';
import mishmash from '../assets/img/mishmash.png'
import tutube from '../assets/img/tutube.png'
import '../App.css';

export default function Works() {

  return (
    <div class="h-auto flex flex-col mt-20">
      <p class="text-light-grey md:text-[2.5rem] text-xl font-work-sans">
        <span class="opacity-50 font-light">Selected </span>
        <span class="text-white font-semibold">Works</span>
      </p>
      <div class="flex flex-col mt-16">
        {/* 1 */}
        <div class="flex md:flex-row flex-col justify-between items-end mt-12">
          {/* <div class="flex-1 w-64 h-[60vh] bg-mishmash bg-no-repeat bg-center bg-cover rounded-2xl mr-8"></div> */}
          <div class="flex-1 w-64 h-[60vh] rounded-2xl md:mr-8 self-center">
            <img src={mishmash} alt="" class="object-cover md:h-[60vh] rounded-2xl"></img>
          </div>
          <div class="flex-1 h-[40vh] flex flex-col justify-between font-poppins text-white md:mt-0 mt-4">
            <p class="font-semibold text-base">MISHMASH PROJECT</p>
            <p class="font-normal text-3xl text-[#E3E4E6]/50">Catch-all project <span class="text-white font-semibold"> in which I add small projects frequently.</span></p>
            <p class="font-light text-lg">React</p>
            <a href="https://github.com/Noemie21/Mishmash" rel="noreferrer" target="_blank">
              <div class="button rounded-md w-52 h-14 flex justify-center items-center hover:shadow-lg hover:shadow-gray-800">View work</div>
            </a>
          </div>
        </div>
        {/* 2 */}
        <div class="flex md:flex-row flex-col justify-between items-end mt-28">
          <div class="flex-1 w-64 h-[60vh] rounded-2xl md:ml-8 self-center md:hidden">
            <img src={tutube} alt="" class="object-cover md:w-[100%] md:h-[60vh] rounded-2xl"></img>
          </div>
          <div class="flex-1 h-[40vh] flex flex-col justify-between font-poppins text-white md:mt-0 mt-4">
            <p class="font-semibold text-base">TUTUBE</p>
            <p class="font-normal text-3xl sm:max-md:text-xl text-[#E3E4E6]/50">School project. Creation of a site allowing to  <span class="text-white font-semibold">register, connect, upload videos, add comments and also to follow other users</span></p>
            <p class="font-light text-lg">Symfony</p>
            <a href="https://github.com/Noemie21/Tutube-V2/tree/main/Tutube" rel="noreferrer" target="_blank">
              <div class="button rounded-md w-52 h-14 flex justify-center items-center hover:shadow-lg hover:shadow-gray-800">View work</div>
            </a>
          </div>
          {/* <div class="flex-1 w-64 h-[60vh] bg-tutube bg-no-repeat bg-cover rounded-2xl ml-8"></div> */}
          <div class="flex-1 w-64 h-[60vh] rounded-2xl md:ml-8 self-center md:block hidden">
            <img src={tutube} alt="" class="object-cover md:w-[100%] md:h-[60vh] rounded-2xl"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
