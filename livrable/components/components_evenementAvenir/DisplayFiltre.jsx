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
export default function DisplayFiltre({ event }) {
  const IconComponent = iconMapping[event.icone];
  return (
    <div>
      <button className="text-customBlue flex  items-center justify-start rounded-sm space-x-4 ">
        {IconComponent && <IconComponent className="w-4 h-4  text-red-800" />}
        <p className="text-sm font-semibold text-customBlue">
          {event.description}
        </p>
      </button>
    </div>
  );
}
