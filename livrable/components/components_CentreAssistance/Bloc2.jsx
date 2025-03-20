import { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { IoDocumentText, IoTicket } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { LuBookOpenText } from "react-icons/lu";
import { RiCalendarTodoLine } from "react-icons/ri";
import { PiSpeakerSimpleNoneDuotone } from "react-icons/pi";
import { LuNotebookPen } from "react-icons/lu";
import { CiDollar } from "react-icons/ci";
import data from "@/public/json/CentreAide.json";

const iconMap = {
  FaDollarSign,
  IoDocumentText,
  IoTicket,
  MdAccountCircle,
  LuBookOpenText,
  RiCalendarTodoLine,
  PiSpeakerSimpleNoneDuotone,
  LuNotebookPen,
  CiDollar
};

export default function Bloc2() {
  const [selectedCategory, setSelectedCategory] = useState("participer");

  return (
    <div className="md:p-10">
      <div className="flex flex-wrap justify-center gap-4 overflow-x-auto py-2">
        {Object.keys(data.categories).map((key) => (
          <button
            key={key}
            className={`px-3 py-2 border-b-2 border-transparent transition-all duration-200 ${
              selectedCategory === key ? "font-bold text-blue-500 border-blue-500" : "hover:border-gray-300"
            }`}
            onClick={() => setSelectedCategory(key)}
          >
            {data.categories[key].nom}
          </button>
        ))}
      </div>

      <div className="border-t mt-4 p-4">
        <h1 className="text-xl font-bold mb-4">Articles en vedette</h1>
        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.categories[selectedCategory].articles_en_vedette.map((item) => {
            const Icon = iconMap[item.icone];
            return (
              <li
                key={item.id}
                className="flex items-center gap-3 p-3  shadow-md rounded-md transition-transform transform hover:scale-105"
              >
                {Icon && <Icon className="w-8 h-8 " />}
                <p className="text-sm w-30">{item.titre}</p>
              </li>
            );
          })}
        </ul>
        <h1 className="text-xl font-bold mt-20 mb-4">Naviguer par thème</h1>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {data.categories[selectedCategory].naviguer_par_theme.map((item) => {
            const Icon = iconMap[item.icone];
            return (
              <li
                key={item.id}
                className="flex flex-col items-center gap-2 p-3 shadow-md rounded-md transition-transform transform hover:scale-105"
              >
                {Icon && <Icon className="w-8 h-8 text-blue-500" />}
                <p className="text-sm text-center">{item.titre}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
