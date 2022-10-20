import React from 'react';
import cozycloud from '../assets/img/cozycloud-logo.png'
import epitech from '../assets/img/epitech-digital-logo.png'
import unlatch from '../assets/img/unlatch-logo.png'
import nanolab from '../assets/img/nanolab-logo.png'
import '../App.css';

export default function Experiences() {
  return (
    <div class="h-[50vh] flex flex-col justify-center">
      <p class="text-light-grey md:text-[2.5rem] font-work-sans">
        <span class="opacity-50 font-light">Some of </span>
        <span class="text-white font-semibold">the clients I have <br class="hidden md:block"></br> worked for</span>
      </p>
      <div class="flex md:flex-row flex-col justify-between items-center mt-16">
        <img class="w-52 grayscale hover:grayscale-0" src={cozycloud} alt=""/>
        <img class="w-52 grayscale invert opacity-50 hover:opacity-100" src={unlatch} alt=""/>
        <img class="w-52 grayscale hover:grayscale-0" src={nanolab} alt=""/>
        <img class="w-52 grayscale hover:grayscale-0" src={epitech} alt=""/>
      </div>
    </div>
  );
}
