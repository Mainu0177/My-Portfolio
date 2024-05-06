import { XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'

interface Props {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({closeNav, showNav}:Props) => {

    const navOpenStyle = showNav ? "translate-x-0" : "translate-x-[-100%]"

  return (
    <div>
       <div className={`${navOpenStyle} fixed top-0 bottom-0 left-0 right-0 transform transition-all duration-500 bg-black opacity-70 w-[100vw] h-[100vh] z-[10000]`}>

       </div>
          <ul className={`${navOpenStyle} fixed flex flex-col duration-300 transform transition-all justify-center text-white space-y-14 bg-red-600 items-center h-[100%] w-[60%] delay-300 z-[10006]`}>
              <li><a  data-aos="fade-up-right" className="nav__link text-[25px] sm:text-[30px]" href="#">Home</a></li>
              <li><a className="nav__link text-[25px] sm:text-[30px]" href="#">About</a></li>
              <li><a className="nav__link text-[25px] sm:text-[30px]" href="#">Service</a></li>
              <li><a className="nav__link text-[25px] sm:text-[30px]" href="#">Blog</a></li>
              <li><a className="nav__link text-[25px] sm:text-[30px]" href="#">Contact</a></li>
              <XMarkIcon onClick={closeNav} className="absolute top-[-1.4rem] right-[1.4rem] w-[2.2rem] h-[2.2rem] text-white" />
          </ul>
    </div>
  )
}

export default MobileNav