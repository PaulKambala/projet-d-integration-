import Image from "next/image";

export default function DisplayOrganisateur({ event}) {
  return (
     
        <div
          key={event.id}
          className=" w-30 md:w-60 flex flex-col items-center p-4 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl text-center"
        >
          <div className="flex flex-col items-center">
            <Image
              src={event.image}
              alt={event.description}
              width={100}
              height={100}
              className="w-20 h-20 rounded-full object-cover"
            />
            <p className="text-sm font-semibold text-gray-800 mt-2 h-10">{event.description}</p>
          </div>

          <div className="mt-4">
            <p className="text-sm font-semibold text-blue-800 mt-5"  >{event.abonnees} abonnées</p>
            <button className="mt-2 bg-gray-400 text-customBlue px-4 py-2 rounded-md hover:bg-customBlue hover:text-white">
              S&#39;abonner
            </button>
          </div>
        </div>
  );
}

