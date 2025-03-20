import { useState } from 'react';
import Link from 'next/link';
import Filtre from './components_evenementAvenir/Filtre'; 
import EvenementCart from './components_evenementAvenir/EvenementCart';

const upcomingEvents = [
    {
        id: 1,
        title: 'Événement à Venir 1',
        imageUrl: 'https://exo/upcoming1.jpg',
        details: 'Détails sur l\'événement à venir 1',
    },
    {
        id: 2,
        title: 'Événement à Venir 2',
        imageUrl: 'https://exo/upcoming2.jpg',
        details: 'Détails sur l\'événement à venir 2',
    },
];

export default function Gallery() {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [page, setPage] = useState("list");

    return (
        <div className="p-10 space-y-10">
            {page === "list" ? (
                <>
                    <div>
                        <p className="text-2xl font-bold mb-2 text-GrandTitre">
                            Événements à Venir
                        </p>
                        <p className="text-sm">
                            Découvrez les événements en vogue dans votre région.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-20">
                        <Filtre />
                        <div className="event-grid">
                            {upcomingEvents.map(event => (
                                <Link key={event.id} href={`/event/${event.id}`}>
                                    <div className="event-item" onClick={() => { setSelectedEvent(event); setPage("detail"); }}>
                                        <img src={event.imageUrl} alt={event.title} className="event-image" />
                                        <h2 className="event-title">{event.title}</h2>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <div className="flex flex-col gap-10">
                    <button onClick={() => setPage("list")} className="text-customBlue px-4 py-2 transform transition duration-300 hover:scale-105">
                        ← Retour aux événements
                    </button>
                    {selectedEvent && (
                        <>
                            <img
                                src={selectedEvent.imageUrl}
                                alt={selectedEvent.title}
                                className="rounded-3xl"
                            />
                            <p>{selectedEvent.details}</p>
                        </>
                    )}
                </div>
            )}
            <style jsx>{`
                .event-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                    gap: 15px;
                }
                .event-item {
                    overflow: hidden;
                    border-radius: 8px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    cursor: pointer;
                }
                .event-image {
                    width: 100%;
                    height: auto;
                    border-radius: 8px 8px 0 0;
                }
                .event-title {
                    margin: 10px 0;
                    text-align: center;
                }
            `}</style>
        </div>
    );
}