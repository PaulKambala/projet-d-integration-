//Test
import { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import HeaderLogin from './HearderLogin';
import HeaderParti1 from './HeaderParti1';

export default function NavBar({ changePage }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <button className="md:hidden flex justify-center items-center mt-4" onClick={() => setIsOpen(!isOpen)}>
        <TiThMenuOutline size={20} className="hover:text-blue-300" />
      </button>

      {/* Menu pc */}
      <ul className="hidden md:flex space-x-4 text-sm">
        <li><button className="hover:text-blue-300" onClick={() => changePage("home")}>Accueil</button></li>
        <li><button className="hover:text-blue-300" onClick={() => changePage("evenemtAvenir")}>Événements à venir</button></li>
        <li><button className="hover:text-blue-300" onClick={() => changePage("galerie")}>Galerie</button></li>
        <li><button className="hover:text-blue-300" onClick={() => changePage("about")}>À propos</button></li>
      </ul>

      {/* Menu Mobile (s'affiche uniquement si `isOpen` est `true`) */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-2 bg-gray-800 p-2 rounded">
          <ul className="flex flex-col space-y-2">
            <li><button className="hover:text-blue-300" onClick={() => { changePage("home"); setIsOpen(false); }}>Accueil</button></li>
            <li><button className="hover:text-blue-300" onClick={() => { changePage("evenemtAvenir"); setIsOpen(false); }}>Événements à venir</button></li>
            <li><button className="hover:text-blue-300" onClick={() => { changePage("galerie"); setIsOpen(false); }}>Galerie</button></li>
            <li><button className="hover:text-blue-300" onClick={() => { changePage("about"); setIsOpen(false); }}>À propos</button></li>
          </ul>
          <HeaderLogin />
        </div>
      )}
    </div>
  );
}