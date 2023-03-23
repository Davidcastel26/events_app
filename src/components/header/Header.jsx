import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header>
      <div>
        <div className='topNav'>
        <Image alt='logo' src={'/images/logo.png'} width={50} height={50}/>
        <nav>
          <ul>
            <li>
              <Link href="/"> Home</Link>
            </li>
            <li>
              <Link href="/events"> Events</Link>
            </li>
            <li>
              <Link href="/about"> About Us</Link>
            </li>
          </ul>
          <img src="" alt="" />
        </nav>
        </div>
        <h1>Sen de perscir lsf</h1>
      </div>
    </header>
  )
}
