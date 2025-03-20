import doctList from "@/public/json/doc.json";
import Link from "next/link";
import DisplayDoc from "./DisplayDoc";
export default function EvenementPopulaire() {
  return (
    <div className="flex flex-col  items-center  justify-center border-b border-gray-300">
       <Link href="/evenemtAvenis" className="text-xl text-blue-800 p-6 hover:text-blue-500 font-bold ">Les événements à venir</Link> 
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4 mb-10">
        {doctList.map((event) => (
          <DisplayDoc key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
