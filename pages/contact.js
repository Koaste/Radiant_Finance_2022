import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Home from './Chartinfo/Home'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {GrLocation} from 'react-icons/gr'

function contact() {
  
  return (
    <div className='bg-gradient-to-r from-indigo-500 to-indigo-500 h-screen'>
      <Header/>
      <Home />
      <div className='h-200 white text-black drop-shadow-2xl'>
        <div className='text-8xl text-white pl-[60rem]'>
          CONTACT
        <div className='text-2xl font-medium pl-20 mt-10 text-white'>
          <div className='h-[22rem] w-[40rem] bg-white rounded-lg shadow-lg text-gray-800'>
            <div className='flex text-2xl px-40 pt-16 font-Montserrat'>
              <HiOutlineMail size={30} />
              <p className='px-5 pb-1'>spark@radiant.com</p>
            </div>
            <div className='flex text-2xl px-40 pt-16 font-Montserrat'>
              <BsFillTelephoneFill size={30} />
              <p className='px-5 pb-1'>(647)-999-9999</p>
            </div>
            <div className='flex text-2xl px-40 pt-16 font-Montserrat'>
              <GrLocation size={30}/>
              <p className='px-5 pb-1'>Toronto, Canada</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default contact