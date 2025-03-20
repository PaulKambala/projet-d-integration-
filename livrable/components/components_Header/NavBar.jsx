'use client';
import HeaderLogin from './HearderLogin';
import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
export default function NavBar() {
    const{t}= useTranslation('header')
 const [isOpen, setIsOpen] = useState(false);
 return (
  <div className="flex  flex-col items-center space-y-4 mt-5 mb-5">
   <button className="md:hidden " onClick={() => setIsOpen(!isOpen)}>
    {isOpen ? <FiX /> : <FiMenu />}
   </button>
   <ul className="hidden md:flex space-x-4  text-sm items-center">
    <li>
     <Link href="/" className="hover:text-blue-300 ">
      {t('header.home')}
     </Link>
    </li>
    <li>
     <Link href="/evenemtAvenis" className="hover:text-blue-300 ">
      {t('header.event')}
     </Link>
    </li>
    <li>
     <Link href="/centreAssistant" className="hover:text-blue-300">
      {t('header.assist')}
     </Link>
    </li>
    <li>
     <Link href="/contact" className="hover:text-blue-300">
      {t('header.contact')}
     </Link>
    </li>
    <li>
     <HeaderLogin />
    </li>
   </ul>
   {isOpen && (
    <ul className="md:hidden flex flex-col space-y-4 p-8 text-center border-t bg-Griclair rounded-3xl">
     <li>
      <Link href="/" className="block py-2" onClick={() => setIsOpen(false)}>
       {t('header.home')}
      </Link>
     </li>
     <li>
      <Link
       href="/evenemtAvenis"
       className="block py-2"
       onClick={() => setIsOpen(false)}
      >
       {t('header.event')}
      </Link>
     </li>
     <li>
      <Link
       href="/centreAssistant"
       className="block py-2"
       onClick={() => setIsOpen(false)}
      >
       {t('header.assist')}
      </Link>
     </li>
     <li>
      <Link
       href="/contact"
       className="block py-2"
       onClick={() => setIsOpen(false)}
      >
       {t('header.contact')}
      </Link>
     </li>
     <li className="flex justify-center">
      <HeaderLogin />
     </li>
    </ul>
   )}
  </div>
 );
}
