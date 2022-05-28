import React from 'react'
import Header from './Header'

export const Stock_gain = ({ props }) => {

  return (
    <div className='h-400 white text-black pt-10 drop-shadow-2xl'>
      <div className='text-2xl font-medium pl-20 text-white'>Gains of the Day</div>
      <div className='flex m-10 h-[45rem] bg-white rounded-lg shadow-lg text-gray-800'>
        <div className='text-md m-10 font-Montserrat'>
          {
            Object.entries(props).map(([key,values]) => 
            { 
              return(
                <div key={props.key} className='flex space-x-5'>
                  <div className='flex-1 w-32 font-semibold'>
                    {values[0]}
                  </div>
                  <div className='flex-1 font-semibold'>
                    {values[1]}
                  </div>
                  <div className='flex-1 font-semibold'>
                    ${values[2]}
                  </div>
                  <div className='flex-2 text-green-500 font-semibold'>
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

export default Stock_gain