import { useTranslation } from 'react-i18next';
export default function FooterPartie13() {
     const { t } = useTranslation('footer');
 return (
  <ul className="text-sm space-y-1">
   <li>
    <a href="#" className="hover:text-blue-300">
     {t('footer.orders')}
    </a>
   </li>
   <li>
    <a href="#" className="hover:text-blue-300">
     {t('footer.returns')}
    </a>
   </li>
   <li>
    <a href="#" className="hover:text-blue-300">
     {t('footer.payments')}
    </a>
   </li>
   <li>
    <a href="#" className="hover:text-blue-300">
     {t('footer.faq')}
    </a>
   </li>
  </ul>
 );
}
