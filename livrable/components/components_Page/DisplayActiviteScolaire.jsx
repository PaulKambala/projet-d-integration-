"use client"
import { FaStaffSnake } from "react-icons/fa6";
import { FaMusic } from "react-icons/fa";
import { CiStethoscope } from "react-icons/ci";
import { TiSpiral } from "react-icons/ti";
import { FaFilm } from "react-icons/fa";
import { MdSportsBasketball } from "react-icons/md";
import { MdSportsEsports } from "react-icons/md";
import { MdFamilyRestroom } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";
import { useState } from "react";
const iconMapping = {
  FaStaffSnake,
  FaMusic,
  CiStethoscope,
  TiSpiral,
  FaFilm,
  MdSportsBasketball,
  MdSportsEsports,
  MdFamilyRestroom,
  GiMaterialsScience,
  TbMeat,
};

export default function DisplayActiviteScolaire({ event }) {
  const IconComponent = iconMapping[event.icone];
  const [isExpanded, setIsExpanded]= useState(false)
  return (
    <div >
      <div className="flex  items-center justify-center bg-red-50" >
      <button className="text-white flex  items-center justify-start ps-5 h-20 w-80 rounded-sm space-x-4 ">
        {IconComponent && <IconComponent className="w-4 h-4  text-red-800" />}
        <p className="text-sm font-semibold text-gray-800">
          {event.description}
        </p>
      </button>
      <button className="hover:text-red-500 pe-5" onClick={()=> setIsExpanded(! isExpanded)}>plus</button>
      </div> 
      {isExpanded && (
        <p className="mt-5">{event.second_description}</p>
      )}    
    </div>
  );
}



