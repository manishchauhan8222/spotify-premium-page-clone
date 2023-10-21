import React from 'react'
import { BsSpotify } from 'react-icons/bs'
import { FaFacebookF, FaGlobeAmericas, FaInstagram, FaTwitter } from 'react-icons/fa'
import { BiCopyright } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='bg-black w-full text-white'>
    <div className="flex flex-col lg:flex-row mx-auto py-6 lg:py-16 lg:px-40 ">

<div className='flex p-4 mt-0 items-center md:mx-4 lg:items-start'>
    <BsSpotify size={40} className="w-7 lg:w-12"/>
    <h1 className='lg:text-2xl px-1 lg:font-semibold lg:py-2'>Spotify</h1>
</div>

<div className='flex flex-col md:flex-row justify-between min-w-[500px] py-3 mx-4 md:mx-8 lg:mx-12'>
    <ul>
        <h5 className='pt-4'>Company</h5>
        <li className='footerLi'>About</li>
        <li className='footerLi'>Jobs</li>
        <li className='footerLi'>For the record</li>
    </ul>

    <ul>
        <h5>COMMUNITIES</h5>
        <li className='footerLi'>For Artists</li>
        <li className='footerLi'>Developers</li>
        <li className='footerLi'>Advertising</li>
        <li className='footerLi'>Investors</li>
        <li className='footerLi'>Vendors</li>
    </ul>

    <ul className='md:pr-20 lg:pr-0'>
        <h5>USEFUL LINKS</h5>
        <li className='footerLi'>Support</li>
        <li className='footerLi'>Web Player</li>
        <li className='footerLi'>Free Mobile App</li>
        <li className='footerLi'>Car Thing</li>
        
    </ul>
</div>
<div className="flex lg:justify-end text-white w-full lg:py-8 mx-3 mt-28 lg:mt-0">
    <div className="md:h-14 md:w-14 h-11 w-11 bg-[#222326] flex items-center justify-center rounded-full">
    <FaInstagram size={25} className="cursor-pointer hover:text-[#1ED760]" />
    </div>

    <div className="md:h-14 md:w-14 h-11 w-11 mx-4 bg-[#222326] flex items-center justify-center rounded-full">
    <FaTwitter size={25} className=" cursor-pointer hover:text-[#1ED760]"/>
    </div>

    <div className="md:h-14 md:w-14 h-11 w-11 bg-[#222326] flex items-center justify-center rounded-full">
    <FaFacebookF size={25} className="cursor-pointer hover:text-[#1ED760]"/>
    </div>

</div>
</div>

<div className='flex lg:px-40 justify-between h-auto mx-auto flex-auto'>
<ul className='inline-block md:flex pb-12'>
    <li className='text-xs font-light text-[#efefef81] px-3 '>Legal</li>
    <li className='text-xs font-light text-[#efefef81] px-3 '>Privacy Center</li>
    <li className='text-xs font-light text-[#efefef81] px-3 '>Privacy Policy</li>
    <li className='text-xs font-light text-[#efefef81] px-3 '>Cookies</li>
    <li className='text-xs font-light text-[#efefef81] px-3 '>About Ads</li>
    <li className='text-xs font-light text-[#efefef81] px-3 '>Additional CA Privacy Disclosures</li>
</ul>
<div className='flex flex-col  mx-2'>
    <div className='flex  mt-0 text-[#efefef81] justify-end py-2'>
        <FaGlobeAmericas size={12}/>
        <h6 className='text-xs px-1 font-light hover:text-[#1ED760] cursor-pointer'>USA</h6>
    </div>
    <div className='flex mt-0 text-[#efefef81] '>
        <BiCopyright size={12}/>
        <h6 className='text-xs px-1 font-light'>2022 HiOwner00</h6>
    </div>
    
</div>
</div>

      
    </div>
  )
}

export default Footer
