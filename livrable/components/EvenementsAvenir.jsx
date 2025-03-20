'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Filtre from './components_evenementAvenir/Filtre';
import ChoseAFaire from './components_evenementAvenir/ChoseAFaire';
import Questions from './components_evenementAvenir/Question';
import EvenementCart from './components_evenementAvenir/EvenementCart';
import Bloc1 from './components_evenementAvenir/Bloc1';
import Block2 from './components_evenementAvenir/Block2';
import Organisateur from './components_Page/Organisateur';
import Image from 'next/image';
import Compteur from './components_evenementAvenir/Compteur';
import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';

export default function EvenementsAvenir() {
 const [page, setPage] = useState('list');
 const [selectedEvent, setSelectedEvent] = useState(null);

 const searchParams = useSearchParams();
 const eventId = searchParams.get('id');

 const [expanded, setExpanded] = useState(false);

 const handleToggle = () => {
  setExpanded((prev) => !prev);
 };

 useEffect(() => {
  if (eventId) {
   import('@/public/json/doc.json/').then(({ default: eventsData }) => {
    const foundEvent = eventsData.find(
     (event) => event.id.toString() === eventId
    );
    setSelectedEvent(foundEvent);
    setPage('details');
   });
  }
 }, [eventId]);

 return (
  <div className="p-10 space-y-10">
   {page === 'list' ? (
    <>
     <div>
      <p className="text-2xl font-bold mb-2 text-GrandTitre">
       Événements Ottawa, Canada
      </p>
      <p className="text-sm">
       Recherchez une activité que vous aimez ou découvrez les événements en
       vogue dans votre région.
      </p>
     </div>

     <div className="flex flex-col md:flex-row md:space-x-20">
      <div className="hidden md:flex">
       <Filtre />
      </div>
      <div className="md:hidden">
       <button onClick={handleToggle}>
        {expanded ? (
         <FaChevronUp />
        ) : (
         <div className="flex items-center space-x-4 shadow-xl bg-white rounded-xl px-20 py-4">
          <FaChevronDown /> <p className='text-2xl font-bold'> filtre</p>
         </div>
        )}
       </button>
       {expanded && (
        <>
         {' '}
         <Filtre />
        </>
       )}
      </div>

      <EvenementCart changePage={setPage} setSelectedEvent={setSelectedEvent} />
     </div>
     <ChoseAFaire />
     <Questions />
    </>
   ) : (
    <div className="flex flex-col gap-10">
     <button
      onClick={() => setPage('list')}
      className="text-customBlue px-4 py-2 transform transition duration-300 hover:scale-105"
     >
      ← Retour aux événements
     </button>
     {selectedEvent && (
      <>
       <Image
        src={selectedEvent.image}
        alt={selectedEvent.alt}
        width={2000}
        height={200}
        className="rounded-3xl"
       />
       <Bloc1 event={selectedEvent} />
       <Compteur deadline={selectedEvent.deadline} />
       <Block2 event={selectedEvent} />
       <Organisateur />
      </>
     )}
    </div>
   )}
  </div>
 );
}
