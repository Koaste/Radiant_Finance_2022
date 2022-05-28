import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Home from './Chartinfo/Home'

function charts() {

  return (
    <div className='bg-gradient-to-r from-indigo-500 to-indigo-500 h-screen'>
      <Header/>
      <Home/>
      <section className='flex pt-12'>
      </section>
    </div>
  )
}

export default charts