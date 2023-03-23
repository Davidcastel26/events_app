import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header>
        <div className='topNav'>
        <Image alt='logo' src={'/images/logo.png'} width={50} height={50}/>
        <nav>
          <img src="" alt="" />
          <Link href="/"> Home</Link>
          <Link href="/events"> Events</Link>
          <Link href="/about"> About Us</Link>
        </nav>
        </div>
        <h1>Sen de perscir lsf</h1>
      </header>
  )
}
