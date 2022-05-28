import React, { useState, useEffect } from 'react'
import Crypto from '../Components/Crypto';
import Header from '../Components/Header';
import Stock_gain from '../Components/Stock_gain';
import Stock_loss from '../Components/Stock_loss';
import { loadStripe } from '@stripe/stripe-js'
import {IoIosArrowDropdownCircle} from 'react-icons/io'

function App() {
  const [state, setState] = useState([])
  const [stockgainsData, setStockgainsdata] = useState([])
  const [stocklossData, setStocklosssdata] = useState([])
  const [publishableKey, setPublishableKey] = useState('')
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  useEffect(() => {
    fetch("http://127.0.0.1:5000/crypto").then(
      res => res.json()
    ).then(
        data => {
        setState(data)
        console.log(data)
      })
  }, [])

  useEffect(() => {
    fetch("http://127.0.0.1:5000/stock_gains").then(
      res => res.json()
    ).then(
        data => {
        setStockgainsdata(data)
        console.log(data)
      })
  }, [])

  useEffect(() => {
    fetch("http://127.0.0.1:5000/stock_loss").then(
      res => res.json()
    ).then(
        data => {
        setStocklosssdata(data)
        console.log(data)
      })
  }, [])

  useEffect(() => {
    fetch('api/keys', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    }).then((res) =>res.json())
      .then((data)=>{
        console.log(data);
        setPublishableKey(data.publishableKey);
      })
  })

  if (!publishableKey){
    return 'Loading...'
  }

  const stripe = loadStripe(publishableKey);

  return (
      <div className='bg-gradient-to-r from-indigo-500 to-indigo-500  '>
        <Header />
        <div className='h-96 flex pl-[25rem] grid-cols-3 w-screen'>
          <div className='text-8xl font-medium pl-10 text-white text-center pt-40'>FOLLOW THE MARKET.</div>
        </div>
        <div className='pl-[57rem] pb-[2rem]'>
          <IoIosArrowDropdownCircle className='' size={50} style={{ color: "white" }}/>
        </div>
        <form className='pl-[55rem] text-center px-40' action="/api/checkout_sessions" method="POST">
            <button className='h-12 flex items-center space-x-2 border-2 p-4 rounded-lg text-white cursor-pointer shadow-md hover:shadow-2xl active:scale-90 transition duration-150 bg-gradient-to-r from-white to-white hover:from-gray-300 hover:to-gray-300' type="submit" role="link">
              <p className='font-medium text-black'>SUBSCRIBE</p>
            </button>
        </form>
        <section className='flex pt-32'>
          <Crypto props={state}/>
          <Stock_gain props={stockgainsData} />
          <Stock_loss props={stocklossData} />
        </section>
      </div>
  );
}

export default App;



