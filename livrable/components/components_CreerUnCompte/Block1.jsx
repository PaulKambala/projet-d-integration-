import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { TbBrandAppleFilled } from 'react-icons/tb';
export default function Block1() {
 return (
  <div className="flex flex-col items-start space-y-10 p-5 shadow-lg rounded-lg">
   <p className="text-2xl md:text-6xl font-bold">Créer un compte</p>
   <form className="space-y-4 flex flex-col w-full ">
    <input
     type="text"
     placeholder="Adresse de Courriel"
     className="px-2 py-2 outline-black text-black rounded-md text-start border-2 border-gray "
    />
    <button className="bg-Griclair text-white rounded-xl py-4">
     Continuer
    </button>
   </form>
   <hr className="h-1 w-full bg-gray" />
   <div className="flex items-center space-x-3 border-2 border-gray  w-full py-4 justify-center">
    <FcGoogle />
    <button>Se connecter avec Google</button>
   </div>
   <div className=" w-full space-y-2">
    <p>Autres méthodes pour ouvrir un compte</p>
    <div className="flex space-x-3 ">
     <BsFacebook className="w-10 h-10 text-GrandTitre" />
     <TbBrandAppleFilled className="w-10 h-10" />
    </div>
    <Link href="/connexion" className="flex justify-end text-GrandTitre">
     Se connecter
    </Link>
   </div>
  </div>
 );
}
