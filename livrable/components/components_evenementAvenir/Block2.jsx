import { FaCalendarAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
export default function Block2({event}) {
  return (
    <div className="space-y-10 p-10 mt-5 bg-white shadow-lg rounded-lg  ">
      <div className="space-y-3">
        <h1 className="text-xl md:text-3xl text-customBlue font-bold">Date et Heure</h1>
        <div className="flex items-center justify-start space-x-3">
          <FaCalendarAlt />
          <p>Debute le {event.date} - {event.heure} HNE</p>
        </div>
      </div>
      <div className="space-y-3">
        <h1 className="text-xl md:text-3xl text-customBlue font-bold">Emplacement</h1>
        <div className="flex items-center justify-start space-x-3">
          <FaMapMarkerAlt />
          <p>{event.lieu}</p>
        </div>
      </div>
      <div className="space-y-3">
        <h1 className="text-xl md:text-3xl text-customBlue font-bold">
          Politique de remboursement
        </h1>
        <p>
        {event.politique_remboursement}
        </p>
      </div>
      <div className="space-y-3">
        <h1 className="ttext-xl md:text-3xl text-customBlue font-bold">
          À propos de cet evenement
        </h1>
        <p>
        {event.a_propos}
        </p>
      </div>
    </div>
  );
}
