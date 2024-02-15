import Image from 'next/image'
import React from 'react'
import logo from "@/assets/Logo.png"

function Header() {
  return (
    <div className='container flex flex-col items-center justify-center gap-y-10 py-6'>
        <Image src={logo} alt='logo' width={150} height={65} />
        <div className='flex gap-x-5 text-primary  text-lg'>
            <button className='hover:font-bold'>Home</button>
            <button className='hover:font-bold'>About</button>
            <button className='hover:font-bold'>Contact</button>
        </div>
    </div>
  )
}

export default Header