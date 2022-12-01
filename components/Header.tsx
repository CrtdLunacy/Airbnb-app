'use client'

import Image from 'next/image'
import { ChangeEvent, useState } from 'react'
import { MagnifyingGlassCircleIcon, GlobeAltIcon, UserCircleIcon, UserIcon, Bars3Icon } from '@heroicons/react/24/outline'

function Header() {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10  '>
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          alt='air-logo'
          objectFit='contain'
          objectPosition='left'
        />
      </div>

      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input
          type="text"
          placeholder='Start your search...'
          className='pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400'
          value={value}
          onChange={handleChange}
        />
        <MagnifyingGlassCircleIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
      </div>

      <div className='flex space-x-4 items-center justify-end text-gray-500'>
        <p className='hidden md:inline-flex cursor-pointer'>Become a host </p>
        <GlobeAltIcon className='h-6 cursor-pointer' />

        <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
           <Bars3Icon className='h-6 cursor-pointer'/>
           <UserCircleIcon className='h-6 cursor-pointer' />
        </div>
      </div>
    </header>
  )
}

export default Header
