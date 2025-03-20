import Image from "next/image";
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo_tiktok from "@/public/image/logo_tik.webp";
import logo_insta from "@/public/image/logo_instagram.webp";
import i18next from '@/i18next.js';
export default function FooterPartie3() {
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
      const { t } = useTranslation('footer');
    return (
     <div className="flex flex-col md:flex-row justify-between md:mt-20 md:mb-20 space-y-8 md:space-y-0">
      <div>
       <h2 className="mb-3 mt-2 text-red-200">{t('footer.language')}</h2>
       <ul className="text-sm space-y-1">
        <select
         value={language}
         onChange={(e) => changeLanguage(e.target.value)}
         className="text-black mt-0 md:mt-4"
        >
         <option value="en">EN</option>
         <option value="fr">FR</option>
        </select>
       </ul>
      </div>
      <div className="flex flex-col items-center">
       <p className="text-sm">{t('footer.socials')}</p>
       <div className="flex space-x-4 mt-3">
        <Image
         src={logo_tiktok}
         alt="Logo TikTok"
         width={40}
         className="rounded-md"
        />
        <Image
         src={logo_insta}
         alt="Logo Instagram"
         width={40}
         className="rounded-md"
        />
       </div>
      </div>
     </div>
    );
  }
  