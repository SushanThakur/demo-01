'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 flex h-[80px] items-center justify-center shadow-lg px-4 z-30 bg-white">
      <div className="flex w-full max-w-[1400px] justify-between items-center font-semibold h-full">
        {/* Logo */}
        <Link href='/'>
          <div className="btn">Demo Logo</div>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            className="btn btn-circle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="lg:flex hidden h-full">
          <ul className="flex gap-6 h-full items-center">
            {/* Navigation Links */}
            <li className="group h-full flex items-center">
              <Link href="/" className="flex items-center gap-2">
                Home
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>
              <ul className="absolute hidden group-hover:flex py-4 flex-col gap-2 bg-slate-50 px-8 top-[80px] border-t-4 border-green-500 delay">
                <li><Link href="/">Link 1</Link></li>
                <li><Link href="/">Link 2</Link></li>
                <li><Link href="/">Link 3</Link></li>
              </ul>
            </li>
            {/* Repeat similar structure for other navigation links */}
            <li className="group h-full flex items-center">
              <Link href="/" className="flex items-center gap-2">
                Services
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>
              <ul className="absolute hidden group-hover:flex py-4 flex-col gap-2 bg-slate-50 px-8 top-[80px] border-t-4 border-green-500 delay">
                <li><Link href="/">Service 1</Link></li>
                <li><Link href="/">Service 2</Link></li>
                <li><Link href="/">Service 3</Link></li>
              </ul>
            </li>

            <li className="group h-full flex items-center">
              <Link href="/" className="flex items-center gap-2">
                Pages
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>
              <ul className="absolute hidden group-hover:flex py-4 flex-col gap-2 bg-slate-50 px-8 top-[80px] border-t-4 border-green-500 delay">
                <li><Link href="/Contact">Contact Page</Link></li>
                <li><Link href="/LoginSignup">Login/Signup</Link></li>
                <li><Link href="/">Page 3</Link></li>
              </ul>
            </li>

            <li className="group h-full flex items-center">
              <Link href="/" className="flex items-center gap-2">
                Blog
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>
              <ul className="absolute hidden group-hover:flex py-4 flex-col gap-2 bg-slate-50 px-8 top-[80px] border-t-4 border-green-500 delay">
                <li><Link href="/">Blog 1</Link></li>
                <li><Link href="/">Blog 2</Link></li>
                <li><Link href="/">Blog 3</Link></li>
              </ul>
            </li>

            <li className="group h-full flex items-center">
              <Link href="/Contact" className="flex items-center gap-2">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Register Button */}
        <div className="hidden lg:flex items-center gap-4 border-2 border-gray-200 py-4 px-6 rounded-full hover:bg-green-500 hover:border-green-500 delayTime">
          Register Now
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`absolute h-[100vh] top-[80px] right-0 bg-white shadow-lg z-20 lg:hidden p-8 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
            }`}
        >
          <ul className="flex flex-col items-center gap-8 py-4">
            <li>
              <ul className="menu bg-white rounded-box w-56 flex gap-4">
                <li>
                  <details>
                    <summary>Home</summary>
                    <ul>
                      <li><Link href='/'>Link 1</Link></li>
                      <li><Link href='/'>Link 2</Link></li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>Services</summary>
                    <ul>
                      <li><Link href='/'>Service 1</Link></li>
                      <li><Link href='/'>Service 2</Link></li>
                      <li><Link href='/'>Service 3</Link></li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>Pages</summary>
                    <ul>
                      <li>
                        <Link href='/Contact'>Contact Page</Link>
                      </li>
                      <li>
                        <Link href='/LoginSignup'>Login/Signup</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>Blog</summary>
                    <ul>
                      <li><Link href='/'>Blog 1</Link></li>
                      <li><Link href='/'>Blog 2</Link></li>
                    </ul>
                  </details>
                </li>
                <li><Link href='/Contact'>Contact</Link></li>
              </ul>
            </li>
            <Link href='/LoginSignup'>
              <li className="py-2 px-4 border border-green-500 rounded-full bg-green-500 text-white hover:bg-green-600 flex flex-row gap-2">
                Register Now
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </li>
            </Link>
          </ul>
        </div>
      )}

    </div>
  );
};

export default Header;
