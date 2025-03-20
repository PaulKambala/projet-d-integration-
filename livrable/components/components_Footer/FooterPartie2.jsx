import { useTranslation } from 'react-i18next';
export default function FooterPartie2() {
  const { t } = useTranslation('footer');
 return (
  <div className="flex flex-col w-full md:w-1/2 items-start md:items-end">
   <h2 className="mb-3 mt-2 text-red-200">{t('footer.newsletter')}</h2>
   <form action="">
    <div className="flex flex-col md:flex-row md:space-x-2">
     <input
      type="text"
      placeholder="Votre e-mail"
      className="bg-gray-600 text-white py-2 rounded-md px-4 mb-2 md:mb-0"
     />
     <button className="bg-white text-customBlue px-4 py-2 rounded-md hover:bg-customBlue hover:text-white">
      {t('footer.subscribe')}
     </button>
    </div>
   </form>
   <p className="text-sm mt-3 md:w-1/2">{t('footer.consent')}</p>
  </div>
 );
}
