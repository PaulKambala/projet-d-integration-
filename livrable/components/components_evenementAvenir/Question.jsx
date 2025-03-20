import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { useState } from "react";

export default function Questions() {
  const question = [
    {
      id: 1,
      titre: "Quels sont les meilleurs événements auxquels assister ?",
      description1: "Spectacle de la Saint-Valentin avec Ambush au Busters !",
      description2: "Drag Bingo au Buster's Bar & Grill à Kanata !",
      description3: "Decapitated, Incantation, Darkest Hour, Exmortus",
      description4: "Première de la Saison 2 de Dès Le Début",
    },
    {
      id: 2,
      titre:
        "Quels sont les événements qui font fureur en ce moment à Ottawa ?",
      description1: "Soirées du Réveillon du Nouvel An",
      description2: "Spectacle de feux d'artifice",
      description3: "Événements pour la Saint-Valentin",
      description4: "Foires de l'emploi",
    },
    {
      id: 3,
      titre: "Quels sont les événements à venir ?",
      description1: "Spectacle de la Saint-Valentin avec Ambush au Busters !",
      description2: "KOSMIC 2025 | LIFE IN SECTION",
      description3: '"Ako sam žena, NISAM KONJ" - Ottawa',
      description4: "EXXXTASY",
      description5: "Le Gospel à travers : Le Livre des Romains",
    },
  ];

  const [expanded, setExpanded] = useState({});

  const handleToggle = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
      <div className="pt-4">
        <h1 className="text-2xl font-bold mb-2 text-GrandTitre">
          Questions fréquemment posées sur Ottawa
        </h1>
        <div>
          {question.map((quest) => (
            <div key={quest.id} className="border-b border-gray-300 mb-10 mt-10 p-5">
           
              <div className="flex items-center space-x-5">
              <button onClick={() => handleToggle(quest.id)}>
                  {expanded[quest.id] ? <FaChevronUp /> : <FaChevronDown />}
                  </button> 
                <p>{quest.titre}</p>
                
              </div>
             
              {expanded[quest.id] && (
                <div className="mb-5 bg-grisvif rounded-2xl">
                  <ul className="list-disc pl-10 mt-5 mb-5">
                    <li className="text-sm text-customBlue ms-10 mb-2 ">
                      {quest.description1}
                    </li>
                    <li className="text-sm text-customBlue ms-10  mb-2">
                      {quest.description2}
                    </li>
                    <li className="text-sm text-customBlue ms-10  mb-2">
                      {quest.description3}
                    </li>
                    <li className="text-sm text-customBlue ms-10  mb-2">
                      {quest.description4}
                    </li>
                    {quest.description5 && (
                      <li className="text-sm text-customBlue ms-10 mb-2">
                        {quest.description5}
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
