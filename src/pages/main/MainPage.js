import React from 'react'
import logo from '../../assets/images/logo.webp'
import palatine from '../../assets/images/Palatine.jpg'
import {Phone} from "../../assets/icons/Icons";
const MainPage = () => {
  return (
    <>
    <div className='bgImage h-screen w-full relative'>

      <div className='overlay flex flex-col justify-between h-full'>
        <div className='text-white px-5 lg:px-16 pb-10 mt-96'>
          <p className='text-2xl lg:text-5xl'>YOUR FAVORITE JAPANESE FOOD <br/> PLACE IN TOWN.</p>
          <div
            className='bg-[#C74200] w-full lg:w-44 py-4 mt-2 lg:mt-10 cursor-pointer rounded-2xl text-center hover:text-black hover:bg-white transition-colors'>
            <p>Choose location</p>
          </div>
        </div>

      </div>
    </div>
    <hr/>
    <div className='bg-black pb-10'>
      <p className='text-white text-3xl lg:text-5xl flex justify-center pt-10'>OUR LOCATIONS</p>


      <div className='flex flex-col lg:flex-row mt-10 md:pl-16'>
        <div className='lg:w-1/2 mb-10 px-2'>
          <div className='relative bg-cover bg-center h-96 lg:h-[500px] w-full overflow-hidden'
               style={{backgroundImage: `url(${palatine})`}}>
            <img src={logo} alt='logo ' className='absolute w-24 h-24 top-5 left-5'/>
            <div
              className='absolute inset-x-0 bottom-0 bg-[#C74200] w-full py-4 cursor-pointer text-white text-center'>
              <p className='hover:text-black '>GO TO PALATINE</p>
            </div>
          </div>
        </div>

        <div className='lg:w-1/2 flex flex-col items-center px-4 lg:px-16'>
          <p className='text-white text-3xl mt-5'>OPENING HOURS</p>
          <div className='bg-black border-2 border-[#C74200] p-5 flex flex-col items-center mt-5'>
            <div className='text-white flex flex-col xl:flex-row gap-5 items-center text-lg lg:text-2xl mb-8'>
              <div
                className='flex py-8 pr-5 md:mt-8  border-b-2 xl:border-b-0 xl:border-r-2 border-[#C74200]   gap-2 xl:flex-col'>
                <p className='text-base lg:text-xl'>TUE-FRI</p>
                <p className='text-base lg:text-xl'>SAT-SUN</p>
              </div>
              <div className='flex gap-2 xl:flex-col items-center'>
                <p className='text-base lg:text-xl'>LUNCH</p>
                <p className='text-sm lg:text-lg'>11:30am - 2:00pm</p>
                <p className='text-sm lg:text-lg'>11:30am - 2:30pm</p>
              </div>
              <div className='flex gap-3 xl:flex-col items-center'>
                <p className='text-base lg:text-xl'>DINNER</p>
                <p className='text-sm lg:text-lg'>5:00pm - 9:00pm</p>
                <p className='text-sm lg:text-lg'>5:00pm - 9:00pm</p>
              </div>
            </div>
            <div className='text-white flex items-center gap-2 text-lg xl:text-2xl'>
              {/* Replace `Phone` with an actual image or icon component */}
              <Phone className='w-5 h-5 lg:w-10 lg:h-10'/>
              <div>
                <p className='text-sm lg:text-lg'>+1 (847)-496-4189</p>
                <p className='text-sm lg:text-lg'>Call us to order pick up!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row mt-10 md:pl-16'>
        <div className='lg:w-1/2 mb-10 px-2'>
          <div className='relative bg-cover bg-center h-96 lg:h-[500px] w-full overflow-hidden'
               style={{backgroundImage: `url(${palatine})`}}>
            <img src={logo} alt='logo ' className='absolute w-24 h-24 top-5 left-5'/>
            <div
              className='absolute inset-x-0 bottom-0 bg-[#C74200] w-full py-4 cursor-pointer text-white text-center'>
              <p className='hover:text-black'>GO TO PALATINE</p>
            </div>
          </div>
        </div>

        <div className='lg:w-1/2 flex flex-col items-center px-4 lg:px-16'>
          <p className='text-white text-3xl mt-5'>OPENING HOURS</p>
          <div className='bg-black border-2 border-[#C74200] p-5 flex flex-col items-center mt-5'>
            <div className='text-white flex flex-col xl:flex-row gap-5 items-center text-lg lg:text-2xl mb-8'>
              <div
                className='flex py-8 pr-5 md:mt-8  border-b-2 xl:border-b-0 xl:border-r-2 border-[#C74200]   gap-2 xl:flex-col'>
                <p className='text-base lg:text-xl'>TUE-FRI</p>
                <p className='text-base lg:text-xl'>SAT-SUN</p>
              </div>
              <div className='flex gap-2 xl:flex-col items-center'>
                <p className='text-base lg:text-xl'>LUNCH</p>
                <p className='text-sm lg:text-lg'>11:30am - 2:00pm</p>
                <p className='text-sm lg:text-lg'>11:30am - 2:30pm</p>
              </div>
              <div className='flex gap-3 xl:flex-col items-center'>
                <p className='text-base lg:text-xl'>DINNER</p>
                <p className='text-sm lg:text-lg'>5:00pm - 9:00pm</p>
                <p className='text-sm lg:text-lg'>5:00pm - 9:00pm</p>
              </div>
            </div>
            <div className='text-white flex items-center gap-2 text-lg xl:text-2xl'>
              {/* Replace `Phone` with an actual image or icon component */}
              <Phone className='w-5 h-5 lg:w-10 lg:h-10'/>
              <div>
                <p className='text-sm lg:text-lg'>+1 (847)-496-4189</p>
                <p className='text-sm lg:text-lg'>Call us to order pick up!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row mt-10 md:pl-16'>
        <div className='lg:w-1/2 mb-10 px-2'>
          <div className='relative bg-cover bg-center h-96 lg:h-[500px] w-full overflow-hidden'
               style={{backgroundImage: `url(${palatine})`}}>
            <img src={logo} alt='logo ' className='absolute w-24 h-24 top-5 left-5'/>
            <div
              className='absolute inset-x-0 bottom-0 bg-[#C74200] w-full py-4 cursor-pointer text-white text-center'>
              <p className='hover:text-black'>GO TO PALATINE</p>
            </div>
          </div>
        </div>

        <div className='lg:w-1/2 flex flex-col items-center px-4 lg:px-16'>
          <p className='text-white text-3xl mt-5'>OPENING HOURS</p>
          <div className='bg-black border-2 border-[#C74200] p-5 flex flex-col items-center mt-5'>
            <div className='text-white flex flex-col xl:flex-row gap-5 items-center text-lg lg:text-2xl mb-8'>
              <div
                className='flex py-8 pr-5 md:mt-8  border-b-2 xl:border-b-0 xl:border-r-2 border-[#C74200]   gap-2 xl:flex-col'>
                <p className='text-base lg:text-xl'>TUE-FRI</p>
                <p className='text-base lg:text-xl'>SAT-SUN</p>
              </div>
              <div className='flex gap-2 xl:flex-col items-center'>
                <p className='text-base lg:text-xl'>LUNCH</p>
                <p className='text-sm lg:text-lg'>11:30am - 2:00pm</p>
                <p className='text-sm lg:text-lg'>11:30am - 2:30pm</p>
              </div>
              <div className='flex gap-3 xl:flex-col items-center'>
                <p className='text-base lg:text-xl'>DINNER</p>
                <p className='text-sm lg:text-lg'>5:00pm - 9:00pm</p>
                <p className='text-sm lg:text-lg'>5:00pm - 9:00pm</p>
              </div>
            </div>
            <div className='text-white flex items-center gap-2 text-lg xl:text-2xl'>
              {/* Replace `Phone` with an actual image or icon component */}
              <Phone className='w-5 h-5 lg:w-10 lg:h-10'/>
              <div>
                <p className='text-sm lg:text-lg'>+1 (847)-496-4189</p>
                <p className='text-sm lg:text-lg'>Call us to order pick up!</p>
              </div>
            </div>
          </div>
    </div>
    </div>

</div>
</>

)
}
export default MainPage
