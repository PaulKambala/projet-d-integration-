import Link from 'next/link';
import { MdInsertInvitation } from 'react-icons/md';
export default function Page_acceuil() {
 return (
  <div className="h-96 bg-[url('/image/image1_acceuil.webp')] bg-cover bg-center relative p-5 flex items-center justify-center ">
   <div className="flex flex-col p-5 bg-Griclair text-white rounded-xl  w-full md:w-1/3  justify-center">
    <p className="text-2xl md:text-5xl mb-10">Bienvenue à School Events</p>

    <Link
     href="/evenemtAvenis"
     className=" text-center transform transition duration-300 hover:scale-105 bg-orangeclaire pt-3 pb-3 ps-2  rounded-xl"
    >
     <div className="flex items-center space-x-3 justify-center">
      <p>Inscrit toi a un Événements</p>
      <MdInsertInvitation />
     </div>
    </Link>
   </div>
  </div>
 );
}
