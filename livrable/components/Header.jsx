'use client'
import Image from "next/image";
import { useState, useEffect } from 'react';
import HeaderRecherche from "./components_Header/HeaderRecherche.jsx";
import NavBar from "./components_Header/NavBar.jsx";
import logo from "@/public/image/logo.webp";
import Link from "next/link.js";
import { IoSunnySharp } from 'react-icons/io5';
import { FaMoon } from 'react-icons/fa';
import { useMyContext } from "@/provider/MyContextProvider.jsx";
import i18next from "@/i18next.js";
export default function Header() {
  const { theme, toggleTheme } = useMyContext()
  const [language, setLanguage] = useState(
   localStorage.getItem('lang') || 'fr'
  );
  const changeLanguage = (lang) => {
   i18next.changeLanguage(lang);
   localStorage.setItem('lang', lang);
   setLanguage(lang);
  };

  useEffect(() => {
   const storedLang = localStorage.getItem('lang');
   if (storedLang) {
    setLanguage(storedLang);
   }
  }, []);
  return (
   <header>
    <nav className="bg-customBlue text-white">
     <div className="flex flex-col md:flex-row  mx-auto px-4 ps-10 pe-10 flex items-center justify-between ">
      <Link href="/">
       <Image
        src={logo}
        alt="Logo du site web"
        width={100}
        className="items-start cursor-pointer"
       />
      </Link>

      <div className="flex flex-col md:flex-row space-x-5  items-center ">
       <HeaderRecherche />
       <NavBar />
       <button className="mt-0 md:mt-4 text-2xl" onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon /> : <IoSunnySharp />}
       </button>
       <select
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="text-black mt-0 md:mt-4"
       >
        <option value="en">EN</option>
        <option value="fr">FR</option>
       </select>
      </div>
     </div>
    </nav>
   </header>
  );
}