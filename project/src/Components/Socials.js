import React from 'react';
import '../App.css';
import linkedIn from '../assets/icons/linkedin2.png'
import gitHub from '../assets/icons/github.png'
import mail from '../assets/icons/envelope.png'

export default function Socials() {
  return (
    <div class="flex-initial hidden md:flex justify-center items-center pt-36">
      <div class="w-[26vw] h-[50vh] relative">

        <a href="https://www.linkedin.com/in/noémie-k/" rel="noreferrer" target="_blank">
          <div class="linkedIn-before rounded-xl border-solid w-56 h-56 p-px flex justify-center items-center absolute bottom-0 left-0 z-30">
            <div class="linkedIn rounded-xl border-solid w-full h-full flex justify-center items-center">
              <img class="w-8 hover:scale-125" src={linkedIn} alt=""/>
            </div>
          </div>
        </a>

        <a href="https://github.com/Noemie21" rel="noreferrer" target="_blank">
          <div class="gitHub-before rounded-xl border-solid w-48 h-48 p-px flex justify-center items-center absolute top-0 right-8">
            <div class="gitHub rounded-xl border-solid w-full h-full flex justify-center items-center">
              <img class="w-10 hover:scale-125" src={gitHub} alt=""/>
            </div>
          </div>
        </a>

        <a href="mailto:n.kpatenon+portfolio@gmail.com">
          <div class="mail-before rounded-xl border-solid w-48 h-48 p-px flex justify-center items-center absolute  bottom-0 right-0 z-20">
            <div class="mail rounded-xl border-solid w-full h-full flex justify-center items-center">
              <img class="w-8 hover:scale-125" src={mail} alt=""/>
            </div>
          </div>
        </a>

      </div>
    </div>
  );
}
