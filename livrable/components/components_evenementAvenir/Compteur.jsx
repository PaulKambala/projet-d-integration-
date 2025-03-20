import { useEffect, useState } from "react";
export default function Compteur ({deadline}){
  const calculateTimeLeft = () => {
    const difference = new Date(deadline) - new Date();
    if (difference > 0) {
      return Math.floor(difference / 1000); 
    }
    return 0;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const intervalID = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  const formatTime = (seconds) => {
    const jours = Math.floor(seconds / (60 * 60 * 24));
    const heures = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secondes = seconds % 60;
    return `${jours}j ${heures}h ${minutes}m ${secondes}s`;
  };

  return (
    <div className=" bg-GrandTitre text-white py-4 text-center">
      {timeLeft > 0 ? (
        <>
          <h3 className=" text-xl md:text-3xl">Temps restant :</h3>
          <p className="">{formatTime(timeLeft)}</p>
        </>
      ) : (
        <p className=" ">Inscriptions terminées !</p>
      )}
    </div>
  );
}
