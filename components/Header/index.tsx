import type { NextComponentType } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Logo from '../../assets/logo-cat.png'
import LogoMobile from '../../assets/logo-cat-icon.svg'

const Header: NextComponentType = pros => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <nav className="bg-default-green">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="false"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="false"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <div className="hidden lg:block h-8 w-auto">
                  <Image src={Logo} alt="Logo" height={36} width={110}/>
                </div>

                <div className="block lg:hidden h-8 w-auto">
                  <Image src={LogoMobile} alt="Logo" height={30} />
                </div>
              </div>

              <div className="hidden sm:block sm:ml-6">
                <div className="menu-items">
                  <a href="#" className="menu-item" aria-current="page">
                    Pensamento Computacional
                  </a>

                  <a href="#" className="menu-item">
                    Quem Somos
                  </a>

                  <a href="#" className="menu-item">
                    Fale Conosco
                  </a>

                  <a href="#" className="menu-item">
                    Fazer Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${mobileOpen ? '' : ''} hidden`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              aria-current="page"
            >
              Dashboard
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Team
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Calendar
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
