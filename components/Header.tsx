import Image from 'next/image'
import React from 'react'
import logo from "@/assets/Logo.png"

function Header() {
  return (
    <div className='container flex flex-col items-center justify-center gap-y-10 py-6 tablet:gap-5 tablet:py-3'>
        <Image src={logo} alt='logo' width={150} height={65} className='tablet:w-[90px] aspect-[70/30] object-contain ' />
        <div className='flex gap-x-5 tablet:gap-x-4 text-primary  text-lg'>
            <button className='hover:font-bold tablet:text-base'>Home</button>
            <button className='hover:font-bold tablet:text-base'>About</button>
            <button className='hover:font-bold tablet:text-base'>Contact</button>
        </div>
    </div>
  )
}

export default Header