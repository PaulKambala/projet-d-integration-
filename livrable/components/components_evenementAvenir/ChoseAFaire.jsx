import { IoTrendingUpOutline } from "react-icons/io5";
export default function ChoseAFaire() {
  const valChose = [
    { id: 1, description: "Choses à faire à Montreal" },
    { id: 2, description: "Choses à faire à Ottawa" },
    { id: 3, description: "Choses à faire à Kingston" },
    { id: 4, description: "Choses à faire à Laval" },
    { id: 5, description: "Choses à faire à Belleville" },
    { id: 6, description: "Choses à faire à Cote-Saint" },
    { id: 7, description: "Choses à faire à Gatineau" },
    { id: 8, description: "Choses à faire à Rimouski" },
  ];

  return (
    <div className="pt-4">
      <h1 className="text-2xl font-bold mb-2 text-GrandTitre">
        Choses à faire aux alentours de Ottawa
      </h1>
      <div className="grid grid-cols-2  text-black md:grid-cols-4 md:grid-rows-2 gap-2 p-2 ">
      {valChose.map((ville) => (
        <div key={ville.id} className="flex items-center justify-around  cursor-pointer bg-grisvif py-3 rounded-full ps-5 transform transition duration-300 hover:shadow-xl">
            <span className="text-gray text-sm ">{ville.description}</span>
            <IoTrendingUpOutline />    
        </div>
      ))}
      </div>
     
    </div>
  );
}
