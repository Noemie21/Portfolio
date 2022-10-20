import React from 'react';
import linkedIn from '../assets/icons/linkedin2.png'
import gitHub from '../assets/icons/github.png'
import mail from '../assets/icons/envelope.png'
import '../App.css';

export default function Footer() {
  return (
    <div class="md:mt-80 mt-16 md:mb-10 mb-6 h-[20vh] flex flex-col justify-around items-center">
      <p class="text-light-grey md:text-xl text-xl font-work-sans text-center md:text-left">
        <span class="text-transparent multicolor font-semibold"> So that we can talk more about... </span> 
      </p>
      <div class="w-[30vw] flex flex-row justify-evenly items-center">
        <a href="https://github.com/Noemie21" rel="noreferrer" target="_blank"><img class="w-9 opacity-50 hover:opacity-100 hover:scale-125" src={gitHub} alt=""/></a>
        <a href="mailto:n.kpatenon+portfolio@gmail.com"><img class="w-9 opacity-50 hover:opacity-100 hover:scale-125" src={mail} alt=""/></a>
        <a href="https://www.linkedin.com/in/noémie-k/" rel="noreferrer" target="_blank"><img class="w-9 opacity-50 hover:opacity-100 hover:scale-125" src={linkedIn} alt=""/></a>
      </div>
    </div>
  );
}
