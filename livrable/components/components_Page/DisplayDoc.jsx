import Image from "next/image";

import Link from "next/link";
export default function DisplayDoc({ event }) {
  return (
   <div
    key={event.id}
    className=" bg-white shadow-lg rounded-lg p-4 overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
   >
    <Link href={`/evenemtAvenis?id=${event.id}`}>
     <Image
      src={event.image}
      alt={event.description}
      width={300}
      height={300}
      className="rounded-t-lg"
     />
     <div className="p-4 w-80">
      <p className="text-lg font-semibold text-gray-800">{event.description}</p>
      <div className="flex justify-between text-sm text-gray-600 mt-2">
       <p>{event.date}</p>
       <p>{event.heure}</p>
      </div>
      <p className="text-sm text-gray-700 mt-2">
       <span className="font-semibold">Lieu : </span>
       {event.lieu}
      </p>
      <p className="text-sm text-gray-700 mt-1">
       <span className="font-semibold">Prix : </span>
       {event.prix}
      </p>
     </div>
    </Link>
   </div>
  );
}
