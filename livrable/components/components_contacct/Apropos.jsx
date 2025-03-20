import Image from 'next/image';
import ulrich from '@/public/image/ulrich.webp';
import salif from '@/public/image/salif.webp';
export default function Apropos() {
 return (
  <div>
   <div className="bg-[url('/image/contat.webp')] bg-cover bg-center relative p-10 ">
    <div className="flex flex-col md:flex-row items-center justify-center md:space-x-40 space-y-10 md:space-y-0 md:flex-row ">
     <div className="flex flex-col items-center justify-center bg-customBlue p-2 rounded-2xl">
      <Image src={ulrich} alt="photo de ulrich" className="ounded-2xl w-60" />
      <p className="text-white text-2xl">ULRICH LONTSI</p>
      <p className="text-white">Co d&apos;evenements</p>
     </div>
     <div className="flex flex-col items-center justify-center bg-customBlue p-2 rounded-2xl">
      <Image src={salif} alt="photo de ulrich" className=" w-60 rounded-2xl" />
      <p className="text-white text-2xl">SALIF IVAN </p>
      <p className="text-white ">Co du personel</p>
     </div>
    </div>
   </div>
  </div>
 );
}
