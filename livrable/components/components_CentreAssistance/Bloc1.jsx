import { FaSearch } from "react-icons/fa";
export default function Bloc1() {
  return (
    <div className="flex flex-col items-center space-y-10 p-10">
      <h1 className="text-customBlue font-bold md:text-5xl text-3xl text-center "> Comment pouvons-nous vous aider?</h1>
      <div className="flex items-center justify-center space-x-3 shadow-xl border border-gray-300 rounded-full p-4 w-80 bg-white">
        <button>
        <FaSearch  className="text-black"/>
        </button>
      
      <input type="text"  placeholder="Recherche des articles d'aide" className="w-full outline-none text-black "/>
      </div>
    </div>
  );
}
