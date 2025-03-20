import DisplayFiltre from "./DisplayFiltre";
import doctList from "@/public/json/ActiviteScolaire.json";
import SelectDate from "./SelectDate";
import SelectPrix from "./SelectPrix";
import SelectFormat from "./SelectFormat";
export default function Filtre() {
  return (
    <div className="pb-5 text-black">
      <div className="bg-grisvif rounded-xl p-5">
      <h1 className="text-2xl font-bold mb-5">Filtres</h1>
      <p className="text-md font-blod mb-2">Catégorie</p>
      <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 gap-2 justify-center ">
        {doctList.map((event) => (
          <DisplayFiltre key={event.id} event={event} />
        ))}
      </div>
      <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 gap-2 justify-center">
        <SelectDate />
        <SelectPrix />
        <SelectFormat />
      </div>
      </div>
  
    </div>
  );
}
