import Link from "next/link";
import { useTranslation } from 'react-i18next';
export default function FooterPartie12() {
     const { t } = useTranslation('footer');
  return (
   <ul className="text-sm space-y-1">
    <li>
     <Link href="/" className="hover:text-blue-300 ">
      {t('footer.home')}
     </Link>
    </li>
    <li>
     <Link href="/evenemtAvenis" className="hover:text-blue-300 ">
      {t('footer.events')}
     </Link>
    </li>
    <li>
     <Link href="/centreAssistant" className="hover:text-blue-300">
      {t('footer.assist')}
     </Link>
    </li>
    <li>
     <Link href="/apropos" className="hover:text-blue-300">
      {t('footer.about')}
     </Link>
    </li>
   </ul>
  );
}
