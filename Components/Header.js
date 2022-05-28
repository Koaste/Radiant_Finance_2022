import React, { useState } from 'react'
import {IoMdCloudOutline} from 'react-icons/io'
import { useRouter } from "next/dist/client/router"
import charts from '../pages/charts';
import Link from 'next/link'
import authService from './authentication';
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image';

function Header({ props }) {
  const router = useRouter();
  const { data: session, loading } = useSession();

  const [user, setUser] = useState(() => {
    return authService.getUser()
  })

  const contact = () => {
    router.push({
      pathname: '/contact'
    });
  }

  function handleLogout(){
    authService.logout()
    setUser(null)
  }

  function handleLogin(){
    const user = authService.login()
    setUser(user)
  }

  return (
      <header className='top-0 z-9001 grid grid-cols-3 py-2 px-10 md:px-10'>
        <div className="flex relative items-start h-40 cursor-pointer my-auto">
          <div className='flex relative items
          -center h-20 cursor-pointer my-auto py-3 pl-10'>
            <IoMdCloudOutline 
              size={50}
              style={{ color: "white" }}
              />
            <div onClick={() => router.push("/")} className='font-Montserrat font-bold text-5xl pl-2 text-white'>
                Radiant
                <br></br>
            </div>
          </div>
        </div>
        <div className='pr-10'/>
        
        {/*<------------------------------------------>*/}
        <div className='flex space-x-10 pt-14 pl-[20rem]'>
          <button className='h-12 flex items-center space-x-2 p-4 rounded-lg  text-white cursor-pointer hover:shadow-2xl active:scale-90 transition duration-150'>
            <Link href='/contact' passHref><p className='font-medium text-lg'>CONTACT</p></Link>
          </button>

          {/*<------------------------------------------>*/}
          {/* <button className=' h-12 flex items-center space-x-2 p-4 rounded-lg  text-white cursor-pointer hover:shadow-2xl active:scale-90 transition duration-150'>
            <p className='font-medium text-lg'>OPTIONS</p>
          </button> */}
          {/*<------------------------------------------>*/}
          {/* {user ? (
            <button onClick={handleLogout} className='h-12 flex items-center space-x-2 border-2 p-4 rounded-lg text-white cursor-pointer shadow-md hover:shadow-2xl active:scale-90 transition duration-150 bg-gradient-to-r from-white to-white hover:from-gray-300 hover:to-gray-300'>
              <p className='font-medium text-indigo-500'>LOGOUT</p>
            </button>
          ): (
            <button onClick={handleLogin} className='h-12 flex items-center space-x-2 border-2 p-4 rounded-lg text-white cursor-pointer shadow-md hover:shadow-2xl active:scale-90 transition duration-150 bg-gradient-to-r from-white to-white hover:from-gray-300 hover:to-gray-300'>
              <p className='font-medium text-indigo-500'>LOGIN</p>
            </button>
          )} */}
          {!loading ? (
            <div className='flex'>
              {!session ?(
                <button type="button" onClick={signIn} className="h-12 flex items-center space-x-2 border-2 p-4 rounded-lg text-white cursor-pointer shadow-md hover:shadow-2xl active:scale-90 transition duration-150 bg-gradient-to-r from-white to-white hover:from-gray-300 hover:to-gray-300">Sign In</button>
              ) : (
                <div className='flex'>
                  <Image src={session.user.image} alt={session.user.name} className="h-12 flex items-center space-x-2 border-2 p-4 rounded-lg text-white cursor-pointer shadow-md hover:shadow-2xl active:scale-90 transition duration-150 bg-gradient-to-r from-white to-white hover:from-gray-300 hover:to-gray-300"/>
                  <p className='pl-[1rem] text-white font-medium text-lg'> Hello {session.user.name?.split(' ')?.[0] ?? 'there'}! </p>
                </div>
            )}
            </div>
          ): null}
        </div>
      </header>
  )
}

export default Header