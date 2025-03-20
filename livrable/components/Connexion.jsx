import Block1 from './components_Connexion/Block1';
import Image from 'next/image';
import imageCompte from '@/public/image/imageConnexion.webp';
export default function Connexion() {
 return (
  <div>
   <div className="flex flex-col md:flex-row items-center justify-center space-x-5 p-5 ">
    <div className="w-full md:w-1/2 flex justify-center">
     <Block1 />
    </div>
    <div className="hidden md:flex w-full">
     <Image
      src={imageCompte}
      alt="image de la page Creer compte"
      className="w-full h-full object-cover rounded-xl"
     />
    </div>
   </div>
  </div>
 );
}
