import FooterPartie12 from "./FooterPartie12";
import FooterPartie13 from "./FooterPartie13";
import { useTranslation } from 'react-i18next';
export default function FooterPartie1() {
    const { t } = useTranslation('footer');
  return (
   <div className="flex flex-col md:flex-row md:space-x-10 w-full md:w-1/2">
    <div>
     <h2 className="mb-3 mt-2 text-red-200"> {t('footer.menu')}</h2>
     <FooterPartie12 />
    </div>

    <div>
     <h2 className="mb-3 mt-2 text-red-200">{t('footer.customerService')}</h2>
     <FooterPartie13 />
    </div>
    <div>
     <h2 className="mb-3 mt-2 text-red-200">{t('footer.contactUs')}</h2>
     <ul className="text-sm space-y-1">
      <li>{t('footer.phone')}</li>
      <li>{t('footer.hours')}</li>
     </ul>
    </div>
   </div>
  );
}
