import React from 'react';
import Typewriter from "typewriter-effect";
import '../App.css';

export default function Title() {
  return (
    <div class="flex-1 md:pt-56 pt-16">
      <p class="text-light-grey md:text-[5rem] text-4xl font-work-sans md:text-left flex flex-row">
      <span class="opacity-50 font-light whitespace-pre">I am a </span>
      <span class="opacity-50 font-light whitespace-pre md:hidden">Web </span>        
        <span class="opacity-50 font-light md:block hidden">
          <Typewriter
            options={{
              strings: [' Web', ' Front-end', ' React'],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </p>
      <p class="md:text-[5rem] text-[2rem] font-work-sans md:text-left text-transparent multicolor font-semibold"> Developper </p> 

    </div>
  );
}
