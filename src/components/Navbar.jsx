import React, {useState ,useEffect} from 'react'
import { BsSpotify } from 'react-icons/bs'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [nav,setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  }

  if(!nav){
    document.body.style.overflow = "hidden";
  }
  else{
    document.body.style.overflow = "visible"
  }
  return (
    <div>

    {/* Desktop menu */}
      <div className=" hidden md:flex items-center bg-black w-full h-20 text-white justify-center lg:px-40">
        <div className='flex p-4 items-center'>
            <BsSpotify size={40}/>
            <h1 className='text-2xl px-1 font-semibold'>Spotify</h1>
        </div>
 
        <div className='w-full flex'>
            <ul className='flex w-full text-right justify-end'>
                <li className='px-4 green cursor-pointer  font-semibold'>Premium</li>
                <li className='px-4 green cursor-pointer font-semibold'>Support</li>
                <li className='px-4 green cursor-pointer font-semibold'>Download</li>
                <li className='px-4 text-md font-extralight'>|</li>
                <li className='px-4 green cursor-pointer font-semibold'>Sign up</li>
                <li className='px-4 green cursor-pointer font-semibold'>Login</li>
            </ul>
        </div>
      </div>

    {/* Mobile Menu  */}

    <div className="flex p-4 justify-between md:hidden w-full bg-black text-white h-[55px] items-center">
      <div className='flex  items-center'>
            <BsSpotify size={28} />
            <h1 className=' px-1 '>Spotify</h1>
        </div>


        <div onClick={handleNav} className="text-white">
        {nav? <AiOutlineMenu size={25} className="font-extrabold" /> : <AiOutlineClose size={25} className="z-20"/> }
        <div className={nav? 'absolute right-[-100%]' : 'fixed top-11 right-0 flex flex-col bg-black text-white w-full sm:w-[447px] p-4 z-10 h-[100%] py-3 ease-in-out duration-300'}>
            <ul>
              <li className=' text-4xl font-md px-4'>Premium</li>
              <li className=' text-4xl font-md px-4 py-5'>Support</li>
              <li className=' text-4xl font-md px-4'>Download</li>
              <div className= 'border-t-2 border-white  w-5 my-10 mx-4'></div>
              <li className=' text-3xl font-thin px-4 py-1'>Sign up</li>
              <li className='  text-3xl font-thin px-4 '>Log in</li>
            </ul>
            <div className='flex  items-center mt-64 mx-4 cursor-pointer'>
            <BsSpotify size={28}/>
            <h1 className=' px-1 '>Spotify</h1>
            </div>
          </div>
        </div>



    </div>


    </div>

    
  )
}

export default Navbar
