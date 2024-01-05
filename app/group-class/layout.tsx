import React, { Children } from 'react'
import Navbar from '../components/Navbar'
import HamburgerMenu from '../components/HamburgerMenu'
import Footer from '../components/Footer';

const layout = (  {children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="bg-[#F8F8FB] w-full overflow-x-hidden">
      <Navbar></Navbar>
      <HamburgerMenu></HamburgerMenu>
      {children}
      <Footer></Footer>
      </main>
  )
}

export default layout