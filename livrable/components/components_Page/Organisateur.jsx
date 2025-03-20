import doctList from "@/public/json/Organisateur.json";
import DisplayOrganisateur from "./DisplayOrganisateur";
export default function Organisateur() {
  return (
    <div className="flex flex-col  items-center  justify-center space-y-1 border-b border-gray-400 bg-gray-200 mb-10 pb-10" >
      <p className="text-2xl text-black p-6">
      les Organisateurs à suivre 
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-5 p-1 md:space-x-4">
        {doctList.map((event) => (
          <DisplayOrganisateur key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
