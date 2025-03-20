import Link from "next/link"
export default function Bloc3() {
    return (
     <div className="flex flex-col items-center mb-20 p-10  ">
      <hr className="border-t w-full mb-5" />
      <p className="text-2xl font-bold text-center">
       Vous avez encore des questions?
      </p>
      <button className="bg-orangefonce text-white py-4 px-6 rounded-md transform transition duration-300 hover:scale-105 hover:shadow-xl mt-5">
       <Link href="/contact">Contactez-nous</Link>
      </button>
     </div>
    );
}