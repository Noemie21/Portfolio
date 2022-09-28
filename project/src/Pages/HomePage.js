import React from 'react';
import { useTranslation } from 'react-i18next';
import AnimatedText from 'react-animated-text-content';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSquareGithub, faEnvelope, faLemon, fa08c } from '@fortawesome/free-solid-svg-icons'
import linkedIn from '../assets/icons/linkedin.png'
import gitHub from '../assets/icons/github.png'
import mail from '../assets/icons/envelope.png'

export default function DashboardPage() {
const {t} = useTranslation()
  return (
    <div class="flex justify-center w-screen h-screen bg-cover bg-bottom bg-laptop-image" >
      <div class="mt-60 text-4xl text-white text-center font-abel font-thin">
        <p class="text-5xl">NOÉMIE KPATENON</p>
        <div class="mt-5">
          <AnimatedText
            
            type='chars'
            interval={0.04}
            duration={0.8}
            animation={{
              y: '-40px',
              ease: 'ease-out',
            }}
          >
            {t('maintenance_title')}
          </AnimatedText>
        </div>
        {/* <p class="">{t('maintenance_message')}</p> */}
        <div class="mt-4 flex flex-row justify-evenly items center">
          <a href="https://www.linkedin.com/in/noémie-k/" rel="noreferrer" target="_blank"><img class="w-14 hover:shadow-lg" src={linkedIn} alt=""/></a>
          <a href="https://github.com/Noemie21" rel="noreferrer" target="_blank"><img class="w-14 hover:shadow-lg" src={gitHub} alt=""/></a>
          <a href="mailto:n.kpatenon+portfolio@gmail.com"><img class="w-14 hover:shadow-lg" src={mail} alt=""/></a>
        </div>
      </div>
    </div>
  );
}
