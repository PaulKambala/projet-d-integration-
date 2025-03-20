import { BiLogInCircle } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
export default function HeaderLogin() {
     const { t } = useTranslation('header');
    return (
     <div className="md:flex space-y-5 md:space-y-0 items-center space-x-6 mt-5 mb-5">
      <div className="flex col-flex items-center justify-center space-x-2 ">
       <BiLogInCircle className="bg-black rounded-3xl w-6 h-6" />
       <Link href="/connexion" className="hover:text-blue-300 text-sm">
        {t('header.login')}
       </Link>
      </div>
      <div className="flex col-flex  items-center justify-center space-x-2">
       <MdAccountCircle className="bg-black rounded-3xl w-6 h-6" />
       <Link href="/creerUnCompte" className="hover:text-blue-300 text-sm">
        {t('header.account')}{' '}
       </Link>
      </div>
     </div>
    );
}