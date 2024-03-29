import React, {useEffect, useState} from 'react'
import {Link, useLocation} from "react-router-dom";
import logo from "../../assets/images/logo.webp";
import redCircle from "../../assets/images/roundRed.webp";
import info from "../../assets/images/info.webp";
import menu from "../../assets/images/menu.webp";
import aboutUs from "../../assets/images/about us.webp";
import {CloseIcon, MobileNav, Phone} from "../../assets/icons/Icons";
const NavBar = () => {
  const [show, setShow] = useState(true);
  const location = useLocation(); // Get the current location object

  const [secondNav, setSecondNav] = useState(false)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    // Check if the current location's pathname is the root path
    if (location.pathname === '/') {
      setShow(false); // Set `show` to false if on root path
    }else{
      setShow(true)
    }
    // Always set `mobile` to false when the URL changes, regardless of the path
    setMobile(false);
    setSecondNav(false)
  }, [location]);

  if(mobile || secondNav){
    document.body.classList.add('active-modal')
  }else{
    document.body.classList.remove('active-modal')
  }

  const handleNavClick = () => {
    if(location.pathname==='/'){
      setSecondNav(true)
    }
    else {
      setMobile(true)
    }

  }

  return (
    <div className='navbar z-10 '>
      <div className='flex pl-10 pr-10 lg:pl-16 lg:pr-16 pt-5 w-full justify-between items-center'>
        <Link to='' className='flex items-center gap-5'>
          <img src={logo} alt='RamenHouseLogo' className=' w-10 sm:w-24 sm:h-25 cursor-pointer'/>
          <p className='text-white font-bold text-[10px] sm:text-sm lg:text-xl pt-2 hover:opacity-50 cursor-pointer'>RAMEN HOUSE SHINCHAN</p>
        </Link>
        <div className={show ? 'hidden ' : ' hidden lg:flex text-white font-bold text-xl gap-16'}>
          <Link to='/palatine' className='hover:opacity-50 cursor-pointer' onClick={()=> setShow(false)}>PALATINE</Link>
          <Link to='/glenview' className='hover:opacity-50 cursor-pointer' onClick={()=> setShow(false)}>GLENVIEW</Link>
          <Link to='/vernon-hills' className='hover:opacity-50 cursor-pointer' onClick={()=> setShow(false)}>VERNON HILLS</Link>
        </div>


        <div className={show ? 'hidden lg:flex gap-8' : 'hidden '}>
          <ul className='flex gap-4'>
            <Link to='palatine/info' className='relative'>
              <img src={redCircle} alt='info' className='w-16 h-16 md:w-24 md:h-24'/>
              <img src={info} alt='info'
                   className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-16 md:h-16'/>
            </Link>
            <Link to='palatine/menu' className='relative'>
              <img src={redCircle} alt='menu' className='w-16 h-16 md:w-24 md:h-24'/>
              <img src={menu} alt='menu'
                   className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-15 h-10 md:w-16 md:h-16'/>
            </Link>
            <Link to='/palatine/about-us' className='relative'>
              <img src={redCircle} alt='about us' className='w-16 h-16 md:w-24 md:h-24'/>
              <img src={aboutUs} alt='about us'
                   className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-16 md:h-16'/>
            </Link>
          </ul>

          <div className='flex items-center text-white gap-2 border-l-2 border-l-white pl-5'>
            <svg className='w-6 h-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'
                 stroke='currentColor'>
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"/>
            </svg>
            <div className='flex flex-col items-center'>
              <span className='text-[10px] xl:text-lg font-bold'>+1 (847)-496-4189</span>
              <span className='text-xs'>Call us to order pick up!</span>
            </div>

          </div>

          <button className='bg-[#C74200] font-bold hover:opacity-50 text-white px-4 h-16 mt-5 text-xs md:text-sm'>
          ORDER DELIVERY
          </button>
        </div>


          <MobileNav onClick={handleNavClick} className="stroke-[#C74200] mt- h-6 w-6 ml-10 sm:h-16 sm:w-16 lg:hidden" />

        {mobile && (
          <div className='absolute z-20 text-white top-0 right-0 h-screen w-full sm:w-[50%] bg-black lg:hidden '>
            <CloseIcon onClick={() => setMobile(false)} className='stroke-[#C74200] absolute z-50 right-5 top-5 w-10 sm:w-16'/>
            <div className='flex flex-col items-center gap-10 h-full galaxyFoldNav'>
              <ul
                className='flex mr-10 mt-20  justify-center w-full items-start gap-2'>
                <Link to='palatine/info' className='relative'>
                  <img src={redCircle} alt='info' className='ml-5 w-20 h-20'/>
                  <img src={info} alt='info'
                       className='absolute top-1/2  transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 left-[60px]'/>
                </Link>
                <Link to='palatine/menu' className='relative'>
                  <img src={redCircle} alt='menu' className='ml-5 w-20 h-20'/>
                  <img src={menu} alt='menu'
                       className='absolute top-1/2  transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 left-[60px]'/>
                </Link>
                <Link to='/palatine/about-us' className='relative'>
                  <img src={redCircle} alt='about us' className='ml-5 w-20 h-20'/>
                  <img src={aboutUs} alt='about us'
                       className='absolute top-1/2  transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 left-[60px]'/>
                </Link>
              </ul>

              <button
                className='bg-[#C74200] font-bold hover:opacity-50 text-white py-4 px-[30px] h-16  text-xs md:text-sm'>
                ORDER DELIVERY
              </button>
              <button
                className='bg-[#C74200] font-bold hover:opacity-50 text-white py-4 px-[60px] h-16  text-xs md:text-sm'>
                YELP
              </button>
              <button
                className='bg-[#C74200] font-bold hover:opacity-50 text-white py-4 px-[30px] h-16  text-xs md:text-sm'>
                PALATINE <br/> PRINTABLE MENU
              </button>

              <div className='text-white flex items-center gap-2 text-lg xl:text-2xl'>
                {/* Replace `Phone` with an actual image or icon component */}
                <Phone className='w-16 h-16'/>
                <div>
                  <p className='text-xl'>+1 (847)-496-4189</p>
                  <p className='text-xl'>Call us to order pick up!</p>
                </div>
              </div>

            </div>


          </div>
        )}
        {secondNav && (
          <div className='absolute z-20 text-white top-0 right-0 h-screen w-full sm:w-[50%] bg-black lg:hidden'>
            <CloseIcon onClick={() => setSecondNav(false)} className='stroke-[#C74200] absolute z-50 right-5 top-14 w-10 sm:w-16'/>

            <div className='flex flex-col ml-10 mt-36 text-white font-bold text-xl gap-16'>
              <p className='text-2xl'>CHOOSE LOCATION</p>
              <Link to='/palatine' className='hover:opacity-50 cursor-pointer'
                    onClick={() => setShow(false)}>PALATINE</Link>
              <Link to='/glenview' className='hover:opacity-50 cursor-pointer'
                    onClick={() => setShow(false)}>GLENVIEW</Link>
              <Link to='/vernon-hills' className='hover:opacity-50 cursor-pointer' onClick={() => setShow(false)}>VERNON
                HILLS</Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
export default NavBar
