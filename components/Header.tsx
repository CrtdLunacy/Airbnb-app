'use client'

import Image from 'next/image'
import { ChangeEvent, useState } from 'react'
import { MagnifyingGlassCircleIcon, GlobeAltIcon, UserCircleIcon, UsersIcon, Bars3Icon } from '@heroicons/react/24/outline'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/navigation'


function Header() {
  const [value, setValue] = useState('');
  const [guestNum, setGuestNum] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const handleChangeGuestNum = (e: ChangeEvent<HTMLInputElement>) => {
    setGuestNum(Number(e.target.value));
  }

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const search = () => {
    router.push(`/search/?location=${value}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&guests=${guestNum}`)
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10  '>
      <div onClick={() => router.push('/')} className='relative flex items-center h-10 cursor-pointer my-auto'>
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

      {value && (
        <div className='flex flex-col col-span-3 mx-auto'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>

            <UsersIcon className='h-5' />
            <input
              value={guestNum}
              onChange={handleChangeGuestNum}
              min={1}
              type="number"
              className='w-12 pl-2 text-lg outline-none text-red-400' />
          </div>
          <div className='flex '>
            <button onClick={() => setValue('')} className='flex-grow text-gray-500'>Cancel</button>
            <button onClick={search} className='flex-grow text-red-400'>Search</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
