import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header>
        <nav>
          <img src="" alt="" />
          <Link href="/"> Home</Link>
          <Link href="/events"> Events</Link>
          <Link href="/about"> About Us</Link>
        </nav>
      </header>
  )
}
