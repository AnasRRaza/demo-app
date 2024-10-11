import React from 'react';
import { IoSearchOutline, IoSettingsOutline } from 'react-icons/io5';

import { Typography } from './Typography';

const Header = () => {
  return (
    <div className='h-16 border-b flex items-center justify-between md:px-20'>
      <div className='w-1/2'>
        <Typography variant='heading' className='text-sm'>
          Draft of Training Material
        </Typography>
      </div>
      <div className='w-1/2 flex gap-4'>
        <div className='relative w-80 flex'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
            <IoSearchOutline className='text-gray-500' />
          </div>
          <input
            type='search'
            className='block w-full p-2 ps-10 text-sm text-gray-900 rounded-full bg-slate-100'
            placeholder='Search'
          />
        </div>
        <div className='p-2 bg-slate-100 rounded-full'>
          <IoSettingsOutline size={24} className='text-gray-500' />
        </div>
      </div>
    </div>
  );
};

export default Header;
