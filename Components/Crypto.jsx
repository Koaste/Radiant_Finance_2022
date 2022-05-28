import React from 'react'

export const Crypto = ({ props }) => {

  return (
    <div className='h-400 white text-black drop-shadow-2xl' key={props}>
      <div className='text-2xl font-medium pl-20 mt-10 text-white'>CryptoCurrency</div>
      <div className='flex m-10 h-[45rem] bg-white rounded-lg shadow-lg text-gray-800'>
        <div className='text-md m-10 font-Montserrat'>
          {
            Object.entries(props).map(([key,values]) => 
            { 
              return(
                <div key={props.key} className='flex space-x-5'>
                  <div key={values[0]} className='flex-1 w-60 font-semibold'>
                    {values[0].slice(0, values[0].length - 4)}
                  </div>
                  <div key={values[1]} className='flex-1 font-semibold'>
                    {values[1].slice(0, values[1].length - 4)}
                  </div>
                  <div key={values[2]} className='flex-1 font-semibold'>
                    ${values[2]}
                  </div>
                  <div key={values[3]} className='flex-1 font-semibold'>
                    {values[3]}
                  </div>
                </div>
              )
            }
          )}
        </div>
      </div>
    </div>
  )
}

export default Crypto