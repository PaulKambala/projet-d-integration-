import Link from "next/link";
import { GiFlame } from "react-icons/gi";
export default function Bloc1({event}) {
  return (
    <div className="mt-5  space-y-4 p-5"> 
  <div className="flex items-center space-x-3 bg-orangeclaire w-full md:w-60 rounded-md p-2">
    <GiFlame />
    <p className="text-black text-sm">Il reste quelques billets</p>
  </div>
  <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-4 md:justify-between md:items-center space-y-5 md:space-y-0">
    
  
    <div className="text-center md:text-left space-y-3 md:max-w-full ">
      <p className="text-md">{event.date}</p>
      <p className="text-3xl text-customBlue font-bold">{event.titre}</p>
      <p className="text-sm mt-2 text-gray-600">
      {event.description}
      </p>
    </div>
    <div className="flex flex-col items-center space-y-3 border rounded-md py-5 px-10 w-full md:w-auto">
      <p className="text-xl font-bold">{event.prix}</p>
      <Link href="/connexion" className="w-full md:w-auto bg-orangefonce rounded-md px-6 py-3 text-white transition transform hover:scale-105">
        Achetez le Billet
      </Link>
    </div>

  </div>
</div>

  );
}
