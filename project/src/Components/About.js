import React from 'react';
import '../App.css';

export default function Works() {
  return (
    <div class="h-[92vh] flex flex-row mt-52">
      <div class="flex-1 flex flex-row justify-between mr-8">
        <div class="flex-1 self-center h-[46vh] bg-chameleon bg-no-repeat bg-center bg-cover rounded-2xl"></div>
        <div class="flex-1 flex flex-col ml-8">
          <div class="flex-1 h-[46vh] bg-vinyle bg-no-repeat bg-center bg-cover rounded-2xl"></div>
          <div class="flex-1 h-[46vh] bg-namibie bg-no-repeat bg-center bg-cover rounded-2xl mt-5"></div>
        </div>
      </div>

      <div class="flex-1 h-[30vh] flex flex-col font-poppins text-white justify-around self-center">
          <p class="font-semibold text-2xl">A BIT ABOUT ME</p>
          <p class="text-3xl">
            <span class="font-light text-[#E3E4E6]/50">
              I am a web developer who is passionate about creating </span>
            <span class="font-semibold">
              beautiful and joyful digital experiences. Besides development, I love music, animals and travelling.
            </span>
          </p>
        </div>
    </div>
  );
}
